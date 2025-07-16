export interface ILoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IAuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  lastLogin?: Date;
}

export type UserRole = 'admin' | 'user' | 'guest';

export interface IAuthState {
  user: IAuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ILoginResponse {
  user: IAuthUser;
  token: string;
  refreshToken: string;
}