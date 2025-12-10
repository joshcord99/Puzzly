import React from 'react';
import { View, StyleSheet } from 'react-native';
import { UserProfile } from '../components/User/UserProfile';
import { Button } from '../components/common/Button';
import { getCurrentUser, signOut } from '../services/firebase/auth';

interface ProfileScreenProps {
  navigation: any;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const user = getCurrentUser();

  const handleEdit = () => {
    // Navigate to edit profile screen
  };

  const handleShareId = () => {
    // Share unique ID functionality
    // Copy to clipboard or share via native share
  };

  const handleLogout = async () => {
    await signOut();
    // Navigate to login screen or reset navigation
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Button title="Sign In" onPress={() => {}} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <UserProfile
        displayName={user.displayName || 'User'}
        email={user.email || ''}
        uniqueId={user.uniqueId || ''}
        onEdit={handleEdit}
        onShareId={handleShareId}
      />
      <Button
        title="Logout"
        onPress={handleLogout}
        variant="danger"
        style={styles.logoutButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoutButton: {
    margin: 20,
  },
});
