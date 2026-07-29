import { createContext, useState,useEffect, type ReactNode } from "react";
import type { AuthContextType, User } from "@/types/Auth";

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
    
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    const parsedUser: User = JSON.parse(savedUser);

    setUser(parsedUser);
  }
}, []);
  const isAuthenticated = user !== null;

  

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
