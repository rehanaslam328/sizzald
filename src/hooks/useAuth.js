import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If a token is found in local storage, consider the user to be authenticated
      setUser(true);
    } else {
      // If no token is found, consider the user to be unauthenticated
      setUser(false);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setUser(false);
  }

  return { user, login, logout };
}
