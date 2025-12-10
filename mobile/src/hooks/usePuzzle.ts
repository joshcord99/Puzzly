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

    // Load puzzle data
    loadPuzzle(puzzleId).then(setPuzzle).catch(setError);
  }, [puzzleId]);

  useEffect(() => {
    if (!sessionId) return;

    // Load puzzle state from database
    getPuzzleState(sessionId).then((state) => {
      setPuzzleState(state);
      setProgress(calculatePuzzleProgress(state));
    });
  }, [sessionId]);

  const movePiece = async (pieceId: string, position: { x: number; y: number }) => {
    if (!puzzleState || !sessionId) return;

    // Update piece position locally
    const updatedState = updatePiecePosition(puzzleState, pieceId, position);
    setPuzzleState(updatedState);
    setProgress(calculatePuzzleProgress(updatedState));

    // Sync to database
    await updatePuzzleState(sessionId, updatedState);
  };

  const placePiece = async (pieceId: string, position: { x: number; y: number }) => {
    if (!puzzleState) return;

    // Validate placement
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
