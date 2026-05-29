export type Suit = "frontend" | "backend" | "devops" | "ai";
export type Rank = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14; // 11=J 12=Q 13=K 14=A

export interface Card {
  id: string;
  suit: Suit;
  rank: Rank;
  name: string;      // e.g. "React"
  chips: number;     // base chip value
}

export const SUIT_META: Record<Suit, { label: string; icon: string; color: string; glow: string }> = {
  frontend: { label: "Frontend", icon: "⚛️", color: "#00d4ff", glow: "rgba(0,212,255,0.3)" },
  backend:  { label: "Backend",  icon: "🔧", color: "#a855f7", glow: "rgba(168,85,247,0.3)" },
  devops:   { label: "DevOps",   icon: "🛠️", color: "#bef264", glow: "rgba(190,242,100,0.3)" },
  ai:       { label: "AI/ML",   icon: "🤖", color: "#fb923c", glow: "rgba(251,146,60,0.3)" },
};

// 13 cards per suit. Rank 2=weakest, 14(Ace)=strongest
const CARD_NAMES: Record<Suit, Record<Rank, string>> = {
  frontend: {
    2:  "HTML",         3:  "CSS",        4:  "Figma",
    5:  "Tailwind",     6:  "JavaScript", 7:  "TypeScript",
    8:  "Vue",          9:  "Svelte",     10: "React",
    11: "GraphQL",      12: "Next.js",    13: "Redux",
    14: "UX Design",
  },
  backend: {
    2:  "SQL",          3:  "REST API",   4:  "Auth/JWT",
    5:  "Redis",        6:  "Node.js",    7:  "Express",
    8:  "FastAPI",      9:  "Django",     10: "PostgreSQL",
    11: "MongoDB",      12: "AWS Lambda", 13: "gRPC",
    14: "System Design",
  },
  devops: {
    2:  "Git",          3:  "npm",        4:  "ESLint",
    5:  "Prettier",     6:  "Jest",       7:  "Docker",
    8:  "GitHub Actions",9: "Nginx",      10: "Kubernetes",
    11: "Terraform",    12: "AWS",        13: "GCP",
    14: "Cloud Arch.",
  },
  ai: {
    2:  "Dataset",      3:  "Pandas",     4:  "NumPy",
    5:  "Scikit-learn", 6:  "TensorFlow", 7:  "PyTorch",
    8:  "Transformers", 9:  "BERT",       10: "GPT",
    11: "LangChain",    12: "AutoML",     13: "MLOps",
    14: "AGI",
  },
};

function chipValue(rank: Rank): number {
  if (rank <= 9) return rank;      // 2–9
  if (rank === 10) return 10;
  if (rank === 11) return 10;      // J
  if (rank === 12) return 10;      // Q
  if (rank === 13) return 10;      // K
  return 11;                        // A
}

/** Gera o baralho completo de 52 cartas */
export function buildDeck(): Card[] {
  const deck: Card[] = [];
  const suits: Suit[] = ["frontend", "backend", "devops", "ai"];
  const ranks: Rank[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        id: `${suit}-${rank}`,
        suit,
        rank,
        name: CARD_NAMES[suit][rank],
        chips: chipValue(rank),
      });
    }
  }
  return deck;
}

/** Fisher-Yates shuffle */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
