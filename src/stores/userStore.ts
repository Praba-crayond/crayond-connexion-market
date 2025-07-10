import create from 'zustand';

export type UserRole = 'admin' | 'user' | 'guest';

export interface IUser {
  id: string;
  name: string;
  role: UserRole;
}

interface IUserStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
})); 