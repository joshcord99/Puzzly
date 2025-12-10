import { getApps, FirebaseApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBAUUFdjDEgqQK4aYhMp4Ab2a6hjxhiv2M',
  authDomain: 'puzzly-551d6.firebaseapp.com',
  databaseURL: 'https://puzzly-551d6-default-rtdb.firebaseio.com',
  projectId: 'puzzly-551d6',
  storageBucket: 'puzzly-551d6.firebasestorage.app',
  messagingSenderId: '272805012016',
  appId: '1:272805012016:ios:7eea357fe484ca633a43f5',
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
