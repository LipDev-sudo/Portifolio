import type { Suit } from "./cards";
import type { HandResult } from "./hands";

export interface Joker {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: "common" | "uncommon" | "rare";
  cost: number;
  /** Aplica efeito e retorna { chips, mult } adicionais */
  apply: (hand: HandResult, jokers: Joker[]) => { chips: number; mult: number };
}

export const ALL_JOKERS: Joker[] = [
  {
    id: "npm",
    name: "npm install",
    icon: "📦",
    description: "+50 chips para toda mão jogada.",
    rarity: "common",
    cost: 3,
    apply: () => ({ chips: 50, mult: 0 }),
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    icon: "🔷",
    description: "+3 Mult por domínio diferente na mão.",
    rarity: "common",
    cost: 4,
    apply: (hand) => {
      const suits = new Set<Suit>(hand.scoredCards.map((c) => c.suit));
      return { chips: 0, mult: suits.size * 3 };
    },
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    description: "Cartas AI/ML dão +30 chips cada.",
    rarity: "uncommon",
    cost: 5,
    apply: (hand) => {
      const aiCount = hand.scoredCards.filter((c) => c.suit === "ai").length;
      return { chips: aiCount * 30, mult: 0 };
    },
  },
  {
    id: "prettier",
    name: "Prettier",
    icon: "✨",
    description: "Cartas Frontend dão +20 chips cada.",
    rarity: "common",
    cost: 3,
    apply: (hand) => {
      const feCount = hand.scoredCards.filter((c) => c.suit === "frontend").length;
      return { chips: feCount * 20, mult: 0 };
    },
  },
  {
    id: "docker",
    name: "Docker",
    icon: "🐋",
    description: "+2 Mult por carta DevOps pontuada.",
    rarity: "uncommon",
    cost: 5,
    apply: (hand) => {
      const devopsCount = hand.scoredCards.filter((c) => c.suit === "devops").length;
      return { chips: 0, mult: devopsCount * 2 };
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "🔵",
    description: "+1 Mult por cada carta pontuada.",
    rarity: "uncommon",
    cost: 5,
    apply: (hand) => ({ chips: 0, mult: hand.scoredCards.length }),
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    icon: "🤝",
    description: "+4 Mult se você jogar exatamente 2 cartas.",
    rarity: "rare",
    cost: 7,
    apply: (hand) => ({
      chips: 0,
      mult: hand.scoredCards.length + (hand.unscoredCards?.length ?? 0) === 2 ? 4 : 0,
    }),
  },
  {
    id: "redux",
    name: "Redux",
    icon: "🔄",
    description: "+80 chips se a mão for Monorepo (Flush).",
    rarity: "uncommon",
    cost: 5,
    apply: (hand) => ({ chips: hand.type === "flush" ? 80 : 0, mult: 0 }),
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "☸️",
    description: "+5 Mult se a mão for Full Stack ou superior.",
    rarity: "rare",
    cost: 6,
    apply: (hand) => {
      const strong = ["full_house", "four_of_a_kind", "straight_flush", "royal_flush"];
      return { chips: 0, mult: strong.includes(hand.type) ? 5 : 0 };
    },
  },
  {
    id: "leetcode",
    name: "LeetCode",
    icon: "💡",
    description: "+3 Mult se o rank mais alto da mão for Ás.",
    rarity: "common",
    cost: 4,
    apply: (hand) => {
      const hasAce = hand.scoredCards.some((c) => c.rank === 14);
      return { chips: 0, mult: hasAce ? 3 : 0 };
    },
  },
];

/** Retorna jokers disponíveis para a loja (exclui os que o jogador já tem) */
export function getShopJokers(ownedIds: string[], count = 3): Joker[] {
  const available = ALL_JOKERS.filter((j) => !ownedIds.includes(j.id));
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
