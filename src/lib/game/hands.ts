import type { Card } from "./cards";

export type HandType =
  | "high_card" | "pair" | "two_pair" | "three_of_a_kind"
  | "straight" | "flush" | "full_house"
  | "four_of_a_kind" | "straight_flush" | "royal_flush";

export interface HandConfig {
  type: HandType;
  name: string;
  description: string;
  baseChips: number;
  baseMult: number;
  minCards: number;
}

export const HAND_CONFIGS: Record<HandType, HandConfig> = {
  high_card:       { type: "high_card",       name: "Syntax Error",       description: "A carta mais alta",            baseChips: 5,   baseMult: 1,  minCards: 1 },
  pair:            { type: "pair",             name: "Hello World",         description: "Um par de cartas iguais",      baseChips: 10,  baseMult: 2,  minCards: 2 },
  two_pair:        { type: "two_pair",         name: "Code Review",         description: "Dois pares",                   baseChips: 20,  baseMult: 2,  minCards: 4 },
  three_of_a_kind: { type: "three_of_a_kind", name: "Design Pattern",      description: "Três cartas iguais",           baseChips: 30,  baseMult: 3,  minCards: 3 },
  straight:        { type: "straight",         name: "Tech Stack",          description: "5 ranks consecutivos",         baseChips: 30,  baseMult: 4,  minCards: 5 },
  flush:           { type: "flush",            name: "Monorepo",            description: "5 cartas do mesmo domínio",    baseChips: 35,  baseMult: 4,  minCards: 5 },
  full_house:      { type: "full_house",       name: "Full Stack",          description: "Trio + par",                   baseChips: 40,  baseMult: 4,  minCards: 5 },
  four_of_a_kind:  { type: "four_of_a_kind",  name: "Senior Dev",          description: "Quatro cartas iguais",         baseChips: 60,  baseMult: 7,  minCards: 4 },
  straight_flush:  { type: "straight_flush",  name: "10x Engineer",        description: "5 consecutivos mesmo domínio", baseChips: 100, baseMult: 8,  minCards: 5 },
  royal_flush:     { type: "royal_flush",      name: "Principal Engineer",  description: "10-A do mesmo domínio",        baseChips: 100, baseMult: 8,  minCards: 5 },
};

export interface HandResult {
  type: HandType;
  config: HandConfig;
  scoredCards: Card[];   // cards that count toward score
  unscoredCards: Card[];
}

/** Detecta o melhor tipo de mão para as cartas selecionadas */
export function detectHand(cards: Card[]): HandResult {
  if (cards.length === 0) throw new Error("No cards");

  const sorted = [...cards].sort((a, b) => b.rank - a.rank);

  const rankGroups = groupBy(sorted, (c) => c.rank);
  const suitGroups = groupBy(sorted, (c) => c.suit);

  const counts = Object.values(rankGroups)
    .map((g) => g.length)
    .sort((a, b) => b - a);

  const isFlush = Object.keys(suitGroups).length === 1 && sorted.length === 5;
  const isStraight = checkStraight(sorted);
  const isRoyal = sorted.map((c) => c.rank).sort().join(",") === "10,11,12,13,14";

  // Royal Flush
  if (isFlush && isRoyal) {
    return { type: "royal_flush", config: HAND_CONFIGS.royal_flush, scoredCards: sorted, unscoredCards: [] };
  }
  // Straight Flush
  if (isFlush && isStraight) {
    return { type: "straight_flush", config: HAND_CONFIGS.straight_flush, scoredCards: sorted, unscoredCards: [] };
  }
  // Four of a Kind
  if (counts[0] >= 4) {
    const quads = Object.values(rankGroups).find((g) => g.length >= 4)!;
    const rest = sorted.filter((c) => !quads.find((q) => q.id === c.id));
    return { type: "four_of_a_kind", config: HAND_CONFIGS.four_of_a_kind, scoredCards: quads, unscoredCards: rest };
  }
  // Full House
  if (counts[0] === 3 && counts[1] === 2) {
    return { type: "full_house", config: HAND_CONFIGS.full_house, scoredCards: sorted, unscoredCards: [] };
  }
  // Flush
  if (isFlush) {
    return { type: "flush", config: HAND_CONFIGS.flush, scoredCards: sorted, unscoredCards: [] };
  }
  // Straight
  if (isStraight && sorted.length === 5) {
    return { type: "straight", config: HAND_CONFIGS.straight, scoredCards: sorted, unscoredCards: [] };
  }
  // Three of a Kind
  if (counts[0] === 3) {
    const trips = Object.values(rankGroups).find((g) => g.length === 3)!;
    const rest = sorted.filter((c) => !trips.find((t) => t.id === c.id));
    return { type: "three_of_a_kind", config: HAND_CONFIGS.three_of_a_kind, scoredCards: trips, unscoredCards: rest };
  }
  // Two Pair
  if (counts[0] === 2 && counts[1] === 2) {
    const pairs = Object.values(rankGroups).filter((g) => g.length === 2).flat();
    const rest = sorted.filter((c) => !pairs.find((p) => p.id === c.id));
    return { type: "two_pair", config: HAND_CONFIGS.two_pair, scoredCards: pairs, unscoredCards: rest };
  }
  // Pair
  if (counts[0] === 2) {
    const pair = Object.values(rankGroups).find((g) => g.length === 2)!;
    const rest = sorted.filter((c) => !pair.find((p) => p.id === c.id));
    return { type: "pair", config: HAND_CONFIGS.pair, scoredCards: pair, unscoredCards: rest };
  }
  // High Card
  return { type: "high_card", config: HAND_CONFIGS.high_card, scoredCards: [sorted[0]], unscoredCards: sorted.slice(1) };
}

function groupBy<T>(arr: T[], key: (item: T) => string | number): Record<string, T[]> {
  return arr.reduce((acc, item) => {
    const k = String(key(item));
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

function checkStraight(sorted: Card[]): boolean {
  if (sorted.length < 5) return false;
  const ranks = [...new Set(sorted.map((c) => c.rank))].sort((a, b) => a - b);
  if (ranks.length !== 5) return false;
  // Normal straight
  if (ranks[4] - ranks[0] === 4) return true;
  // Ace-low straight (A-2-3-4-5)
  if (ranks.join(",") === "2,3,4,5,14") return true;
  return false;
}
