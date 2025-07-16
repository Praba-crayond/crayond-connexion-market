import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthUser, IAuthState, UserRole } from '../types/auth';

interface IAuthStore extends IAuthState {
  setUser: (user: IAuthUser) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  login: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user: IAuthUser) => {
        set({
          user,
          isAuthenticated: true,
          error: null,
        });
      },

      clearUser: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      setError: (error: string | null) => {
        set({ error, isLoading: false });
      },

      login: async (email: string, password: string, rememberMe: boolean) => {
        set({ isLoading: true, error: null });
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful login
          const mockUser: IAuthUser = {
            id: '1',
            email,
            name: 'John Doe',
            role: 'user' as UserRole,
            lastLogin: new Date(),
          };
          
          get().setUser(mockUser);
        } catch (error) {
          get().setError('Invalid email or password');
        } finally {
          set({ isLoading: false });
        }
      },

      logout: () => {
        get().clearUser();
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);