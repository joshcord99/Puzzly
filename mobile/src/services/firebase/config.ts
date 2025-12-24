import { getApps, FirebaseApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import Config from 'react-native-config';

const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY || '',
  authDomain: Config.FIREBASE_AUTH_DOMAIN || '',
  databaseURL: Config.FIREBASE_DATABASE_URL || '',
  projectId: Config.FIREBASE_PROJECT_ID || '',
  storageBucket: Config.FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID || '',
  appId: Config.FIREBASE_APP_ID || '',
};

const app = getApps()[0] || null;

export const firebaseAuth = auth();
export const firebaseDatabase = database();
export const firebaseStorage = storage();

export const dbRefs = {
  users: () => firebaseDatabase.ref('/users'),
  user: (userId: string) => firebaseDatabase.ref(`/users/${userId}`),
  sessions: () => firebaseDatabase.ref('/sessions'),
  session: (sessionId: string) => firebaseDatabase.ref(`/sessions/${sessionId}`),
  puzzles: () => firebaseDatabase.ref('/puzzles'),
  puzzle: (puzzleId: string) => firebaseDatabase.ref(`/puzzles/${puzzleId}`),
  puzzleState: (sessionId: string) => firebaseDatabase.ref(`/sessions/${sessionId}/puzzleState`),
};

export const storageRefs = {
  puzzleImages: () => firebaseStorage.ref('/puzzle-images'),
  puzzleImage: (puzzleId: string) => firebaseStorage.ref(`/puzzle-images/${puzzleId}`),
  puzzlePieces: (puzzleId: string) => firebaseStorage.ref(`/puzzle-pieces/${puzzleId}`),
  puzzlePiece: (puzzleId: string, pieceId: string) => 
    firebaseStorage.ref(`/puzzle-pieces/${puzzleId}/${pieceId}`),
  userAvatars: () => firebaseStorage.ref('/user-avatars'),
  userAvatar: (userId: string) => firebaseStorage.ref(`/user-avatars/${userId}`),
};

export default app;
