import { firebaseAuth } from './config';

export const signUp = async (email: string, password: string) => {
  // Create user account with email/password
  // Return user object or throw error
};

export const signIn = async (email: string, password: string) => {
  // Sign in existing user
  // Return user object or throw error
};

export const signOut = async () => {
  // Sign out current user
  // Clear local auth state
};

export const getCurrentUser = () => {
  // Get currently authenticated user
  // Return user object or null
};

export const resetPassword = async (email: string) => {
  // Send password reset email
  // Return success status
};

export const updateProfile = async (displayName?: string, photoURL?: string) => {
  // Update user profile information
  // Return updated user object
};

export const onAuthStateChanged = (callback: (user: any) => void) => {
  // Subscribe to auth state changes
  // Return unsubscribe function
};
