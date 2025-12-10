import React, { useState, useEffect } from 'react';
import { subscribeToPuzzleState, subscribeToParticipants } from '../services/firebase/realtime';
import { PuzzleState } from '../services/puzzle/puzzleState';

export const useRealtimeSync = (sessionId: string) => {
  const [puzzleState, setPuzzleState] = useState<PuzzleState | null>(null);
  const [participants, setParticipants] = useState<any[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!sessionId) return;

    // Subscribe to puzzle state changes
    const unsubscribeState = subscribeToPuzzleState(sessionId, (state) => {
      setPuzzleState(state);
    });

    // Subscribe to participants changes
    const unsubscribeParticipants = subscribeToParticipants(sessionId, (participantsList) => {
      setParticipants(participantsList);
    });

    // Check connection status
    setIsConnected(true);

    return () => {
      unsubscribeState();
      unsubscribeParticipants();
    };
  }, [sessionId]);

  const handleRemoteUpdate = (remoteState: PuzzleState) => {
    // Merge remote state with local state
    // Handle conflicts (use timestamp or last-write-wins)
    // Update local state
    setPuzzleState(remoteState);
  };

  return {
    puzzleState,
    participants,
    isConnected,
    handleRemoteUpdate,
  };
};
