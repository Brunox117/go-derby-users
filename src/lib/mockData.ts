export interface Rooster {
  id: string;
  name: string;
  weight: number;
  wins: number;
  losses: number;
  color: string;
}

export interface Fight {
  id: string;
  rooster1: Rooster;
  rooster2: Rooster;
  odds1: number;
  odds2: number;
  status: "upcoming" | "live" | "terminada";
  startTime: string;
  duration?: number;
  winner?: string;
  score1?: number;
  score2?: number;
}

export interface BettingHistory {
  id: string;
  fightId: string;
  roosterName: string;
  betAmount: number;
  odds: number;
  result: "pending" | "won" | "lost";
  timestamp: string;
}

export interface Statistics {
  totalFights: number;
  totalBets: number;
  winRate: number;
  averageOdds: number;
}

export const mockRoosters: Rooster[] = [
  {
    id: "1",
    name: "Thunder Strike",
    weight: 2.3,
    wins: 15,
    losses: 3,
    color: "#a73434",
  },
  {
    id: "2",
    name: "Golden Feather",
    weight: 2.1,
    wins: 12,
    losses: 5,
    color: "#c89116",
  },
  {
    id: "3",
    name: "Midnight Warrior",
    weight: 2.4,
    wins: 18,
    losses: 2,
    color: "#1d6240",
  },
  {
    id: "4",
    name: "Red Storm",
    weight: 2.2,
    wins: 10,
    losses: 7,
    color: "#cf8482",
  },
  {
    id: "5",
    name: "Emerald King",
    weight: 2.0,
    wins: 14,
    losses: 4,
    color: "#5fa07a",
  },
];

export const mockFights: Fight[] = [
  {
    id: "1",
    rooster1: mockRoosters[0],
    rooster2: mockRoosters[1],
    odds1: 1.85,
    odds2: 1.95,
    status: "live",
    startTime: "2024-01-15T20:30:00Z",
    duration: 180,
    score1: 2,
    score2: 1,
  },
  {
    id: "2",
    rooster1: mockRoosters[2],
    rooster2: mockRoosters[3],
    odds1: 1.65,
    odds2: 2.25,
    status: "upcoming",
    startTime: "2024-01-15T21:00:00Z",
  },
  {
    id: "3",
    rooster1: mockRoosters[1],
    rooster2: mockRoosters[4],
    odds1: 2.1,
    odds2: 1.75,
    status: "upcoming",
    startTime: "2024-01-15T21:30:00Z",
  },
  {
    id: "4",
    rooster1: mockRoosters[0],
    rooster2: mockRoosters[2],
    odds1: 2.35,
    odds2: 1.6,
    status: "terminada",
    startTime: "2024-01-15T19:30:00Z",
    duration: 210,
    winner: "Thunder Strike",
    score1: 3,
    score2: 2,
  },
];

export const mockBettingHistory: BettingHistory[] = [
  {
    id: "1",
    fightId: "1",
    roosterName: "Thunder Strike",
    betAmount: 100,
    odds: 1.85,
    result: "pending",
    timestamp: "2024-01-15T20:25:00Z",
  },
  {
    id: "2",
    fightId: "4",
    roosterName: "Thunder Strike",
    betAmount: 50,
    odds: 2.35,
    result: "won",
    timestamp: "2024-01-15T19:20:00Z",
  },
  {
    id: "3",
    fightId: "4",
    roosterName: "Midnight Warrior",
    betAmount: 75,
    odds: 1.6,
    result: "lost",
    timestamp: "2024-01-15T19:15:00Z",
  },
];

export const mockStatistics: Statistics = {
  totalFights: 156,
  totalBets: 2847,
  winRate: 68.5,
  averageOdds: 1.92,
};

export const getCurrentFight = (): Fight | null => {
  return mockFights.find((fight) => fight.status === "live") || null;
};

export const getUpcomingFights = (): Fight[] => {
  return mockFights.filter((fight) => fight.status === "upcoming");
};

export const getRecentFights = (): Fight[] => {
  return mockFights.filter((fight) => fight.status === "terminada").slice(0, 5);
};
