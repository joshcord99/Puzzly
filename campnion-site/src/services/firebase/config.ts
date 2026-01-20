import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getDatabase, Database } from 'firebase/database';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

const app: FirebaseApp = getApps()[0] || initializeApp(firebaseConfig);

export const firebaseAuth: Auth = getAuth(app);
export const firebaseDatabase: Database = getDatabase(app);
export const firebaseStorage: FirebaseStorage = getStorage(app);

export const dbRefs = {
  users: () => `users`,
  user: (userId: string) => `users/${userId}`,
  sessions: () => `sessions`,
  session: (sessionId: string) => `sessions/${sessionId}`,
  puzzles: () => `puzzles`,
  puzzle: (puzzleId: string) => `puzzles/${puzzleId}`,
  puzzleState: (sessionId: string) => `sessions/${sessionId}/puzzleState`,
};

export const storageRefs = {
  puzzleImages: () => `puzzle-images`,
  puzzleImage: (puzzleId: string) => `puzzle-images/${puzzleId}`,
  puzzlePieces: (puzzleId: string) => `puzzle-pieces/${puzzleId}`,
  puzzlePiece: (puzzleId: string, pieceId: string) => `puzzle-pieces/${puzzleId}/${pieceId}`,
  userAvatars: () => `user-avatars`,
  userAvatar: (userId: string) => `user-avatars/${userId}`,
};

export default app;
