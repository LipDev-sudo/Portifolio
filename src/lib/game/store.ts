import { create } from "zustand";
import { buildDeck, shuffle, type Card } from "./cards";
import { detectHand, type HandResult } from "./hands";
import { type Joker, getShopJokers } from "./jokers";
import {
  BLINDS, STARTING_MONEY, STARTING_HANDS, STARTING_DISCARDS,
  HAND_SIZE, MAX_JOKERS, type Blind,
} from "./progression";

export type Phase = "menu" | "blind_select" | "playing" | "scoring" | "shop" | "game_over" | "victory";

export interface ScoreEvent {
  chips: number;
  mult: number;
  total: number;
  handName: string;
}

interface GameStore {
  // ── Phase & progression ─────────────────────────────────
  phase: Phase;
  ante: number;       // 0-based (0=ante1)
  blindIndex: number; // 0-based within ante

  // ── Round state ─────────────────────────────────────────
  score: number;
  target: number;
  handsLeft: number;
  discardsLeft: number;

  // ── Economy ─────────────────────────────────────────────
  money: number;

  // ── Cards ───────────────────────────────────────────────
  drawPile: Card[];
  hand: Card[];
  discardPile: Card[];
  selectedIds: string[];

  // ── Jokers ─────────────────────────────────────────────
  jokers: Joker[];
  shopJokers: Joker[];

  // ── Last scored hand ────────────────────────────────────
  lastScore: ScoreEvent | null;

  // ── Actions ─────────────────────────────────────────────
  startRun: () => void;
  startBlind: () => void;
  toggleSelect: (id: string) => void;
  playHand: () => void;
  discard: () => void;
  goToShop: () => void;
  buyJoker: (joker: Joker) => void;
  nextBlind: () => void;
  goToMenu: () => void;
}

function currentBlind(ante: number, blindIndex: number): Blind {
  return BLINDS[ante][blindIndex];
}

function initDrawPile(): { drawPile: Card[]; hand: Card[] } {
  const deck = shuffle(buildDeck());
  return { drawPile: deck.slice(HAND_SIZE), hand: deck.slice(0, HAND_SIZE) };
}

export const useGameStore = create<GameStore>((set, get) => ({
  phase: "menu",
  ante: 0,
  blindIndex: 0,
  score: 0,
  target: 0,
  handsLeft: STARTING_HANDS,
  discardsLeft: STARTING_DISCARDS,
  money: STARTING_MONEY,
  drawPile: [],
  hand: [],
  discardPile: [],
  selectedIds: [],
  jokers: [],
  shopJokers: [],
  lastScore: null,

  // ── Start a new run ─────────────────────────────────────
  startRun: () => {
    set({
      phase: "blind_select",
      ante: 0,
      blindIndex: 0,
      score: 0,
      target: 0,
      handsLeft: STARTING_HANDS,
      discardsLeft: STARTING_DISCARDS,
      money: STARTING_MONEY,
      jokers: [],
      drawPile: [],
      hand: [],
      discardPile: [],
      selectedIds: [],
      lastScore: null,
    });
  },

  // ── Enter current blind ─────────────────────────────────
  startBlind: () => {
    const { ante, blindIndex } = get();
    const blind = currentBlind(ante, blindIndex);
    const { drawPile, hand } = initDrawPile();
    set({
      phase: "playing",
      score: 0,
      target: blind.target,
      handsLeft: STARTING_HANDS,
      discardsLeft: STARTING_DISCARDS,
      drawPile,
      hand,
      discardPile: [],
      selectedIds: [],
      lastScore: null,
    });
  },

  // ── Toggle card selection ────────────────────────────────
  toggleSelect: (id) => {
    const { selectedIds } = get();
    const isSelected = selectedIds.includes(id);
    if (!isSelected && selectedIds.length >= 5) return; // max 5 cards
    set({
      selectedIds: isSelected
        ? selectedIds.filter((s) => s !== id)
        : [...selectedIds, id],
    });
  },

  // ── Play selected cards ──────────────────────────────────
  playHand: () => {
    const { hand, selectedIds, jokers, score, target, handsLeft } = get();
    if (selectedIds.length === 0 || selectedIds.length > 5) return;

    const played = hand.filter((c) => selectedIds.includes(c.id));
    const kept   = hand.filter((c) => !selectedIds.includes(c.id));

    const result: HandResult = detectHand(played);
    const { baseChips, baseMult } = result.config;

    // Card chips
    let chips = baseChips + result.scoredCards.reduce((sum, c) => sum + c.chips, 0);
    let mult  = baseMult;

    // Apply jokers
    for (const joker of jokers) {
      const effect = joker.apply(result, jokers);
      chips += effect.chips;
      mult  += effect.mult;
    }

    const gained = Math.floor(chips * mult);
    const newScore = score + gained;
    const newHands = handsLeft - 1;

    const scoreEvent: ScoreEvent = {
      chips,
      mult,
      total: gained,
      handName: result.config.name,
    };

    // Draw replacement cards
    const { drawPile, discardPile } = get();
    const needed = Math.min(played.length, drawPile.length);
    const drawn  = drawPile.slice(0, needed);
    const newDraw = drawPile.slice(needed);
    const newDiscard = [...discardPile, ...played];

    const newHand = [...kept, ...drawn];

    // Check win/loss
    let phase: Phase = "playing";
    if (newScore >= target) {
      phase = "scoring"; // will transition to shop
    } else if (newHands <= 0) {
      phase = "game_over";
    }

    set({
      hand: newHand,
      drawPile: newDraw,
      discardPile: newDiscard,
      selectedIds: [],
      score: newScore,
      handsLeft: newHands,
      lastScore: scoreEvent,
      phase,
    });
  },

  // ── Discard selected cards ───────────────────────────────
  discard: () => {
    const { hand, selectedIds, discardsLeft, drawPile, discardPile } = get();
    if (selectedIds.length === 0 || discardsLeft <= 0) return;

    const discarded = hand.filter((c) => selectedIds.includes(c.id));
    const kept      = hand.filter((c) => !selectedIds.includes(c.id));
    const needed    = Math.min(discarded.length, drawPile.length);
    const drawn     = drawPile.slice(0, needed);

    set({
      hand: [...kept, ...drawn],
      drawPile: drawPile.slice(needed),
      discardPile: [...discardPile, ...discarded],
      selectedIds: [],
      discardsLeft: discardsLeft - 1,
    });
  },

  // ── Move to shop ─────────────────────────────────────────
  goToShop: () => {
    const { ante, blindIndex, jokers, money } = get();
    const blind = currentBlind(ante, blindIndex);
    const shop = getShopJokers(jokers.map((j) => j.id));
    set({
      phase: "shop",
      money: money + blind.reward,
      shopJokers: shop,
    });
  },

  // ── Buy joker from shop ──────────────────────────────────
  buyJoker: (joker) => {
    const { money, jokers } = get();
    if (money < joker.cost || jokers.length >= MAX_JOKERS) return;
    set({
      money: money - joker.cost,
      jokers: [...jokers, joker],
      shopJokers: get().shopJokers.filter((j) => j.id !== joker.id),
    });
  },

  // ── Advance to next blind ────────────────────────────────
  nextBlind: () => {
    const { ante, blindIndex } = get();
    const nextBI = blindIndex + 1;

    if (nextBI >= BLINDS[ante].length) {
      // Next ante
      const nextAnte = ante + 1;
      if (nextAnte >= BLINDS.length) {
        set({ phase: "victory" });
      } else {
        set({ phase: "blind_select", ante: nextAnte, blindIndex: 0 });
      }
    } else {
      set({ phase: "blind_select", ante, blindIndex: nextBI });
    }
  },

  goToMenu: () => set({ phase: "menu" }),
}));
