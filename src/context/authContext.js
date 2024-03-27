import { createContext, useState, useCallback } from "react";

const MY_AUTH_APP = "MY_AUTH_APP";

export const AuthContext = createContext();

export function AuthContextrovider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(MY_AUTH_APP)
  );

  const login = useCallback(function () {
    localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  });
}
