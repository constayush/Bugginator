import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import AuthContext, { AuthContextType } from "./authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:1234/user/profile", {
          withCredentials: true,
        });
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } catch (err) {
        console.error("Error fetching user:", err);
        setUser(null);
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = useCallback(async () => {
    try {
      await axios.post("http://localhost:1234/user/logout", null, {
        withCredentials: true,
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }
    setUser(null);
    localStorage.removeItem("user");
  }, []);

  const contextValue: AuthContextType = {
    user,
    setUser,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
