export interface User {
  id: string;
  displayName: string;
  email: string;
  uniqueId: string;
  avatar?: string;
  createdAt: number;
}

export interface UserProfile extends User {
  puzzlesCompleted: number;
  activeSessions: number;
}

export interface PuzzlePiece {
  id: string;
  position: { x: number; y: number };
  targetPosition: { x: number; y: number };
  rotation: number;
  isPlaced: boolean;
  placedBy?: string;
  placedAt?: number;
}

export interface Puzzle {
  id: string;
  imageUrl: string;
  difficulty: 'easy' | 'medium' | 'hard';
  pieceCount: number;
  createdAt: number;
  createdBy: string;
}

export interface PuzzleState {
  pieces: Record<string, PuzzlePiece>;
  completedPieces: string[];
  progress: number;
  lastUpdated: number;
}

export interface Participant {
  userId: string;
  displayName: string;
  joinedAt: number;
  isOnline: boolean;
  isActive: boolean;
}

export interface Session {
  id: string;
  hostId: string;
  puzzleId: string;
  participants: Participant[];
  status: 'active' | 'ended';
  createdAt: number;
  puzzleState?: PuzzleState;
}
