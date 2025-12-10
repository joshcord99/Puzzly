import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { PuzzlePiece } from './PuzzlePiece';
import { PuzzleState } from '../../services/puzzle/puzzleState';

interface CollaborativeCanvasProps {
  puzzleState: PuzzleState | null;
  puzzleImage: string;
  sessionId?: string;
  onPieceMove?: (pieceId: string, position: { x: number; y: number }) => void;
}

export const CollaborativeCanvas: React.FC<CollaborativeCanvasProps> = ({
  puzzleState,
  puzzleImage,
  sessionId,
  onPieceMove,
}) => {
  const { width, height } = Dimensions.get('window');

  if (!puzzleState) {
    return (
      <View style={styles.container}>
        {/* Loading state */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Background puzzle image */}
      <View style={styles.backgroundImage} />

      {/* Render all puzzle pieces */}
      {Object.values(puzzleState.pieces).map((piece) => (
        <PuzzlePiece
          key={piece.id}
          piece={piece}
          onMove={(position) => onPieceMove?.(piece.id, position)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
});
