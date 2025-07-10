import { useUserStore, UserRole } from '../stores/userStore';

const PERMISSIONS = {
  VIEW_DASHBOARD: ['admin', 'user'],
  MANAGE_USERS: ['admin'],
  VIEW_REPORTS: ['admin', 'user'],
};

export const useRBAC = () => {
  const user = useUserStore((state) => state.user);
  const hasPermission = (permission: keyof typeof PERMISSIONS) => {
    if (!user) return false;
    return PERMISSIONS[permission].includes(user.role);
  };
  return { user, hasPermission };
};

export { PERMISSIONS }; 