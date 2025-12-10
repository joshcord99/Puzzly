import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '../common/Button';

interface UserProfileProps {
  displayName: string;
  email: string;
  uniqueId: string;
  puzzlesCompleted?: number;
  activeSessions?: number;
  onEdit?: () => void;
  onShareId?: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  displayName,
  email,
  uniqueId,
  puzzlesCompleted = 0,
  activeSessions = 0,
  onEdit,
  onShareId,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
        <Text style={styles.displayName}>{displayName}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Unique ID</Text>
        <View style={styles.idContainer}>
          <Text style={styles.value}>{uniqueId}</Text>
          {onShareId && (
            <TouchableOpacity onPress={onShareId} style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{puzzlesCompleted}</Text>
          <Text style={styles.statLabel}>Puzzles Completed</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{activeSessions}</Text>
          <Text style={styles.statLabel}>Active Sessions</Text>
        </View>
      </View>

      {onEdit && (
        <Button title="Edit Profile" onPress={onEdit} variant="secondary" style={styles.editButton} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc',
    marginBottom: 12,
  },
  displayName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoSection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  idContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareButton: {
    padding: 8,
  },
  shareButtonText: {
    color: '#007AFF',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  editButton: {
    marginTop: 8,
  },
});
