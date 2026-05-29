export interface Blind {
  name: string;
  description: string;
  target: number;
  reward: number; // $ earned on win
  isBoss: boolean;
}

export const BLINDS: Blind[][] = [
  // Ante 1
  [
    { name: "Junior Dev",    description: "Primeiro dia de trabalho",      target: 300,   reward: 3,  isBoss: false },
    { name: "Code Bootcamp", description: "Pressão do prazo final",        target: 450,   reward: 4,  isBoss: false },
    { name: "🐛 O Bug",     description: "NullPointerException em prod",   target: 600,   reward: 5,  isBoss: true  },
  ],
  // Ante 2
  [
    { name: "Mid-level Dev", description: "Pull request aguardando review", target: 900,   reward: 6,  isBoss: false },
    { name: "Sprint Review", description: "O cliente quer mudanças",        target: 1350,  reward: 7,  isBoss: false },
    { name: "💀 Deploy",    description: "Deploy na sexta às 17h",         target: 1800,  reward: 8,  isBoss: true  },
  ],
  // Ante 3
  [
    { name: "Senior Dev",    description: "Reescrever o legado",           target: 2700,  reward: 10, isBoss: false },
    { name: "Tech Lead",     description: "Reunião com o CTO",             target: 4050,  reward: 11, isBoss: false },
    { name: "🔥 O CTO",     description: "Refatorar tudo em produção",     target: 5400,  reward: 12, isBoss: true  },
  ],
];

export const STARTING_MONEY = 4;
export const STARTING_HANDS = 4;
export const STARTING_DISCARDS = 3;
export const HAND_SIZE = 7;
export const MAX_JOKERS = 5;
