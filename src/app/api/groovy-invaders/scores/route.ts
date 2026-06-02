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

const SCORE_LIMIT = 5;
const MAX_SCORE = 9_999_999;
const MAX_WAVE = 999;
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
