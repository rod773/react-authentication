import { createContext, useState, useCallback, useMemo } from "react";

const MY_AUTH_APP = "MY_AUTH_APP";

export const AuthContext = createContext();

export function AuthContextrovider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP)
  );

  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(() => ({
    login,
    logout,
    isAuthenticated,
  }));
}
