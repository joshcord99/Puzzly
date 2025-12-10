import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { AddUserModal } from '../components/User/AddUserModal';
import { useCollaboration } from '../hooks/useCollaboration';

interface CollaborationScreenProps {
  navigation: any;
}

export const CollaborationScreen: React.FC<CollaborationScreenProps> = ({ navigation }) => {
  const [sessionIdInput, setSessionIdInput] = useState('');
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const { createSession, joinSession, participants } = useCollaboration();

  const handleCreateSession = async () => {
    // Create new collaboration session
    // Navigate to puzzle screen with sessionId
  };

  const handleJoinSession = async () => {
    if (!sessionIdInput.trim()) return;
    // Join session by ID
    // Navigate to puzzle screen
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Create Session</Text>
        <Button
          title="Create New Puzzle Session"
          onPress={handleCreateSession}
          style={styles.button}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Join Session</Text>
        <Input
          placeholder="Enter session ID"
          value={sessionIdInput}
          onChangeText={setSessionIdInput}
          style={styles.input}
        />
        <Button
          title="Join"
          onPress={handleJoinSession}
          variant="secondary"
          style={styles.button}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Collaborators</Text>
        <Button
          title="Add Collaborator"
          onPress={() => setShowAddUserModal(true)}
          variant="secondary"
          style={styles.button}
        />
        {/* Display participants list */}
      </View>

      <AddUserModal
        visible={showAddUserModal}
        onClose={() => setShowAddUserModal(false)}
        onAddUser={(userId) => {
          // Add user to session
        }}
      />
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
  input: {
    marginBottom: 12,
  },
  button: {
    marginBottom: 12,
  },
});
