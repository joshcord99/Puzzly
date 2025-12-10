import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from '../components/common/Button';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <Button
          title="Create New Puzzle"
          onPress={() => navigation.navigate('Collaboration')}
          style={styles.button}
        />
        <Button
          title="Join Session"
          onPress={() => navigation.navigate('Collaboration')}
          variant="secondary"
          style={styles.button}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Puzzles</Text>
        {/* List of recent puzzles */}
        <Text style={styles.emptyText}>No recent puzzles</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Sessions</Text>
        {/* List of active collaboration sessions */}
        <Text style={styles.emptyText}>No active sessions</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginBottom: 12,
  },
  emptyText: {
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 20,
  },
});
