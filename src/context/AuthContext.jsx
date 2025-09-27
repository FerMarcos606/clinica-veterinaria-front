import React, { createContext, useState, useContext } from 'react';
import authService from '../services/auth/AuthService';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email, password) => {
    const userData = await authService.loginUser({ email, password });
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await authService.logoutUser();
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
