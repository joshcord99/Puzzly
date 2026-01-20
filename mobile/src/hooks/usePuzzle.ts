import React, { useState, useEffect } from 'react';
import { loadPuzzle, calculatePuzzleProgress } from '../services/puzzle/puzzleService';
import { getPuzzleState, updatePuzzleState } from '../services/firebase/database';
import { PuzzleState, updatePiecePosition, validatePiecePlacement } from '../services/puzzle/puzzleState';

export const usePuzzle = (puzzleId: string, sessionId?: string) => {
  const [puzzle, setPuzzle] = useState<any>(null);
  const [puzzleState, setPuzzleState] = useState<PuzzleState | null>(null);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!puzzleId) return;

    loadPuzzle(puzzleId).then(setPuzzle).catch(setError);
  }, [puzzleId]);

  useEffect(() => {
    if (!sessionId) return;

    getPuzzleState(sessionId).then((state) => {
      setPuzzleState(state);
      setProgress(calculatePuzzleProgress(state));
    });
  }, [sessionId]);

  const movePiece = async (pieceId: string, position: { x: number; y: number }) => {
    if (!puzzleState || !sessionId) return;

    const updatedState = updatePiecePosition(puzzleState, pieceId, position);
    setPuzzleState(updatedState);
    setProgress(calculatePuzzleProgress(updatedState));

    await updatePuzzleState(sessionId, updatedState);
  };

  const placePiece = async (pieceId: string, position: { x: number; y: number }) => {
    if (!puzzleState) return;

    const piece = puzzleState.pieces[pieceId];
    if (validatePiecePlacement({ ...piece, position })) {
      await movePiece(pieceId, piece.targetPosition);
    }
  };

  return {
    puzzle,
    puzzleState,
    progress,
    isLoading,
    error,
    movePiece,
    placePiece,
  };
};
