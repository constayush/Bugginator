import { createContext } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
