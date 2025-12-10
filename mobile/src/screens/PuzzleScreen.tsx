import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CollaborativeCanvas } from '../components/Canvas/CollaborativeCanvas';
import { UserList } from '../components/User/UserList';
import { usePuzzle } from '../hooks/usePuzzle';
import { useRealtimeSync } from '../hooks/useRealtimeSync';

interface PuzzleScreenProps {
  route: any;
  navigation: any;
}

export const PuzzleScreen: React.FC<PuzzleScreenProps> = ({ route, navigation }) => {
  const { puzzleId, sessionId } = route.params || {};
  const { puzzle, puzzleState, progress } = usePuzzle(puzzleId, sessionId);
  const { participants } = useRealtimeSync(sessionId || '');

  if (!puzzle) {
    return (
      <View style={styles.container}>
        <Text>Loading puzzle...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.progressText}>Progress: {progress}%</Text>
      </View>

      <View style={styles.canvasContainer}>
        <CollaborativeCanvas
          puzzleState={puzzleState}
          puzzleImage={puzzle.imageUrl}
          sessionId={sessionId}
        />
      </View>

      <View style={styles.sidebar}>
        <UserList users={participants} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 10,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
  },
  canvasContainer: {
    flex: 1,
  },
  sidebar: {
    width: 200,
    backgroundColor: '#f5f5f5',
  },
});
