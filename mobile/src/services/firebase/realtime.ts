import { dbRefs } from './config';

export const subscribeToSession = (sessionId: string, callback: (data: any) => void) => {
};

export const subscribeToPuzzleState = (sessionId: string, callback: (state: any) => void) => {
};

export const subscribeToParticipants = (sessionId: string, callback: (participants: any[]) => void) => {
};

export const updatePuzzlePiecePosition = async (sessionId: string, pieceId: string, position: any) => {
};

export const getConnectionStatus = () => {
};
