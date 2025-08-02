import { createContext } from 'react';

export type User = {
  id: string;
  name: string;
  email: string;
  // add more as needed
};

export type AuthContextType = {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
