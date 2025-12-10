import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../common/Button';

interface CanvasControlsProps {
  onReset?: () => void;
  onPause?: () => void;
  onComplete?: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  showGrid?: boolean;
  onToggleGrid?: () => void;
}

export const CanvasControls: React.FC<CanvasControlsProps> = ({
  onReset,
  onPause,
  onComplete,
  onZoomIn,
  onZoomOut,
  showGrid,
  onToggleGrid,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="Reset" onPress={onReset || (() => {})} variant="secondary" style={styles.button} />
        <Button title="Pause" onPress={onPause || (() => {})} variant="secondary" style={styles.button} />
        <Button title="Complete" onPress={onComplete || (() => {})} style={styles.button} />
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={onZoomOut} style={styles.zoomButton}>
          <Text style={styles.zoomText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onZoomIn} style={styles.zoomButton}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggleGrid} style={styles.gridButton}>
          <Text style={styles.gridText}>{showGrid ? 'Hide Grid' : 'Show Grid'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 4,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  zoomButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  zoomText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gridButton: {
    padding: 8,
    backgroundColor: '#6c757d',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  gridText: {
    color: '#fff',
    fontSize: 12,
  },
});
