import { UserProfile as UserProfileType } from '@/utils/types';

interface UserProfileProps {
  user: UserProfileType;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function UserProfile({ user, onEdit, onDelete }: UserProfileProps) {
  return null
}
