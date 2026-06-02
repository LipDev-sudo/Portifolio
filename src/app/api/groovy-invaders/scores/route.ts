import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ScoreEntry = {
  id: string;
  accessNumber: number;
  playerName: string;
  score: number;
  wave: number;
  submittedAt: string;
};

type ScoreStore = {
  nextAccessNumber: number;
  scores: ScoreEntry[];
};

type SupabaseScoreRow = {
  id: string;
  access_number: number;
  player_name: string;
  score: number;
  wave: number;
  created_at: string;
};

const SCORE_LIMIT = 5;
const MAX_SCORE = 9_999_999;
const MAX_WAVE = 999;
const SCORE_TABLE = "groovy_invaders_scores";
const STORE_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(STORE_DIR, "groovy-invaders-scores.json");

const allowedDevOrigins = new Set([
  "http://127.0.0.1:3003",
  "http://localhost:3003",
]);

function corsHeaders(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowOrigin =
    origin && (origin === request.nextUrl.origin || allowedDevOrigins.has(origin))
      ? origin
      : request.nextUrl.origin;

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  };
}

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey || serviceRoleKey.includes("cole_aqui")) {
    return null;
  }

  return { url, serviceRoleKey };
}

function supabaseHeaders(serviceRoleKey: string) {
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
  };
}

function mapSupabaseRow(row: SupabaseScoreRow): ScoreEntry {
  return {
    id: row.id,
    accessNumber: Number(row.access_number),
    playerName: `Visitante #${row.access_number}`,
    score: Number(row.score),
    wave: Number(row.wave),
    submittedAt: row.created_at,
  };
}

async function fetchSupabaseScores(order: string) {
  const config = getSupabaseConfig();
  if (!config) return null;

  const url = new URL(`${config.url}/rest/v1/${SCORE_TABLE}`);
  url.searchParams.set("select", "id,access_number,player_name,score,wave,created_at");
  url.searchParams.set("order", order);
  url.searchParams.set("limit", String(SCORE_LIMIT));

  const response = await fetch(url, {
    method: "GET",
    headers: supabaseHeaders(config.serviceRoleKey),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Supabase score read failed: ${response.status}`);
  }

  const rows = await response.json() as SupabaseScoreRow[];
  return rows.map(mapSupabaseRow);
}

async function insertSupabaseScore(score: number, wave: number) {
  const config = getSupabaseConfig();
  if (!config) return null;

  const url = new URL(`${config.url}/rest/v1/${SCORE_TABLE}`);
  url.searchParams.set("select", "id,access_number,player_name,score,wave,created_at");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      ...supabaseHeaders(config.serviceRoleKey),
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      player_name: "Visitante",
      score,
      wave,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Supabase score insert failed: ${response.status}`);
  }

  const rows = await response.json() as SupabaseScoreRow[];
  return rows[0] ? mapSupabaseRow(rows[0]) : null;
}

async function supabaseScorePayload() {
  const [topScores, recentScores] = await Promise.all([
    fetchSupabaseScores("score.desc,wave.desc,created_at.asc"),
    fetchSupabaseScores("created_at.desc"),
  ]);

  if (!topScores || !recentScores) return null;

  return {
    topScores,
    recentScores,
    champion: topScores[0] ?? null,
    latest: recentScores[0] ?? null,
  };
}

async function readStore(): Promise<ScoreStore> {
  try {
    const raw = await readFile(STORE_FILE, "utf8");
    const parsed = JSON.parse(raw) as Partial<ScoreStore>;

    return {
      nextAccessNumber:
        typeof parsed.nextAccessNumber === "number" && parsed.nextAccessNumber > 0
          ? parsed.nextAccessNumber
          : 1,
      scores: Array.isArray(parsed.scores) ? parsed.scores.filter(isScoreEntry) : [],
    };
  } catch {
    return { nextAccessNumber: 1, scores: [] };
  }
}

async function writeStore(store: ScoreStore) {
  await mkdir(STORE_DIR, { recursive: true });
  await writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf8");
}

function isScoreEntry(entry: unknown): entry is ScoreEntry {
  if (!entry || typeof entry !== "object") return false;
  const candidate = entry as Partial<ScoreEntry>;

  return (
    typeof candidate.id === "string" &&
    typeof candidate.accessNumber === "number" &&
    typeof candidate.playerName === "string" &&
    typeof candidate.score === "number" &&
    typeof candidate.wave === "number" &&
    typeof candidate.submittedAt === "string"
  );
}

function scoreResponse(store: ScoreStore, headers: Record<string, string>) {
  const recentScores = [...store.scores]
    .sort((a, b) => Date.parse(b.submittedAt) - Date.parse(a.submittedAt))
    .slice(0, SCORE_LIMIT);
  const topScores = [...store.scores]
    .sort((a, b) => b.score - a.score || b.wave - a.wave || Date.parse(a.submittedAt) - Date.parse(b.submittedAt))
    .slice(0, SCORE_LIMIT);

  return NextResponse.json(
    {
      ok: true,
      topScores,
      recentScores,
      champion: topScores[0] ?? null,
      latest: recentScores[0] ?? null,
    },
    { headers },
  );
}

function parseInteger(value: unknown, max: number) {
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  const normalized = Math.floor(value);
  if (normalized < 0 || normalized > max) return null;
  return normalized;
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

export async function GET(request: NextRequest) {
  const headers = corsHeaders(request);
  const supabaseScores = await supabaseScorePayload();

  if (supabaseScores) {
    return NextResponse.json(
      {
        ok: true,
        ...supabaseScores,
      },
      { headers },
    );
  }

  const store = await readStore();

  return scoreResponse(store, headers);
}

export async function POST(request: NextRequest) {
  const headers = corsHeaders(request);
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Payload invalido." },
      { status: 400, headers },
    );
  }

  const body = payload && typeof payload === "object" ? payload as Record<string, unknown> : {};
  const score = parseInteger(body.score, MAX_SCORE);
  const wave = parseInteger(body.wave, MAX_WAVE);

  if (score === null || wave === null) {
    return NextResponse.json(
      { ok: false, message: "Score ou wave invalidos." },
      { status: 400, headers },
    );
  }

  try {
    const insertedScore = await insertSupabaseScore(score, wave);
    const supabaseScores = await supabaseScorePayload();

    if (insertedScore && supabaseScores) {
      return NextResponse.json(
        {
          ok: true,
          submitted: insertedScore,
          ...supabaseScores,
        },
        { headers },
      );
    }
  } catch (error) {
    console.error("Groovy Invaders Supabase score error:", error);

    return NextResponse.json(
      { ok: false, message: "Nao foi possivel salvar o score no Supabase." },
      { status: 502, headers },
    );
  }

  const store = await readStore();
  const accessNumber = store.nextAccessNumber;
  const entry: ScoreEntry = {
    id: `${Date.now()}-${accessNumber}`,
    accessNumber,
    playerName: `Visitante #${accessNumber}`,
    score,
    wave,
    submittedAt: new Date().toISOString(),
  };

  store.nextAccessNumber += 1;
  store.scores = [entry, ...store.scores].slice(0, 100);
  await writeStore(store);

  return scoreResponse(store, headers);
}
