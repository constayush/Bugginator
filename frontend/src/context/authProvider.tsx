import { useState, useEffect } from 'react';
import { AuthContext, User } from './authContext';

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  const login = async () => {
    // Trigger backend login, backend sets cookie
    const res = await fetch('http://localhost:1234/auth/login', {
      method: 'POST',
      credentials: 'include',
    });

    if (res.ok) {
      const userData = await res.json();
      setUser(userData);
    }
  };

  const logout = async () => {
    await fetch('http://localhost:1234/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
  };

  useEffect(() => {
    // On mount, try to get the user info from backend
    fetch('http://localhost:1234/auth/me', {
      method: 'GET',
      credentials: 'include',
    })
      .then(async (res) => {
        if (res.ok) {
          const userData = await res.json();
          setUser(userData.user);// backend se sccuess ka flag bhi ata toh user explicitly set kardiya 
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>; // optional spinner

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
