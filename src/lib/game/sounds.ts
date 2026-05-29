"use client";

// ── Web Audio API synthesized sounds — no external files needed ───────────────
let ctx: AudioContext | null = null;

function audio(): AudioContext {
  if (!ctx) {
    ctx = new (
      window.AudioContext ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitAudioContext
    )();
  }
  return ctx;
}

function tone(
  freq: number,
  duration: number,
  volume = 0.07,
  type: OscillatorType = "sine",
  delay = 0
) {
  try {
    const c = audio();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime + delay);
    const s = c.currentTime + delay;
    gain.gain.setValueAtTime(0, s);
    gain.gain.linearRampToValueAtTime(volume, s + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, s + duration);
    osc.start(s);
    osc.stop(s + duration + 0.02);
  } catch {
    // Audio context blocked or unavailable — silently ignore
  }
}

export const sounds = {
  /** Soft click when selecting a card */
  cardSelect() {
    tone(700, 0.08, 0.05, "sine");
  },

  /** Lower click when deselecting */
  cardDeselect() {
    tone(450, 0.08, 0.04, "sine");
  },

  /** Two-note chord when submitting a hand */
  playHand() {
    tone(440, 0.15, 0.07, "triangle");
    tone(550, 0.15, 0.06, "triangle", 0.04);
  },

  /** Whoosh-like drop when discarding */
  discard() {
    tone(350, 0.18, 0.06, "sawtooth");
    tone(250, 0.18, 0.05, "sawtooth", 0.04);
  },

  /** Tiny tick used for chip/mult counter animation */
  tick() {
    tone(900, 0.05, 0.04, "sine");
  },

  /** Ascending arpeggio when a blind is completed */
  blindComplete() {
    [523, 659, 784, 1047, 1319].forEach((f, i) =>
      tone(f, 0.22, 0.10, "sine", i * 0.07)
    );
  },

  /** Full fanfare for victory */
  victory() {
    [523, 659, 784, 1047, 1319, 1568].forEach((f, i) =>
      tone(f, 0.3, 0.12, "sine", i * 0.06)
    );
  },

  /** Descending tones for game over */
  gameOver() {
    [400, 320, 240, 180].forEach((f, i) =>
      tone(f, 0.3, 0.09, "sawtooth", i * 0.12)
    );
  },

  /** Coin pop for buying a joker */
  buy() {
    tone(660, 0.08, 0.07, "sine");
    tone(990, 0.12, 0.07, "sine", 0.06);
  },
};
