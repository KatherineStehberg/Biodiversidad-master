import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [token, setToken] = useState(localStorage.getItem('token') || null); 

  useEffect(() => {
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, [token]);

  const fetchUserProfile = async (token) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); 
      } else {
        console.error('Error al obtener el perfil del usuario');
        localStorage.removeItem('token');
        setToken(null);
      }
    } catch (error) {
      console.error('Error al cargar el perfil del usuario:', error);
      setToken(null);
    }
    setLoading(false);
  };

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token); 
        localStorage.setItem('token', data.token); 
        setUser(data.user);
      } else {
        throw new Error(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const signup = async (email, password, name) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token); 
        localStorage.setItem('token', data.token); 
        setUser(data.user);
      } else {
        throw new Error(data.message || 'Error al registrarse');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null); 
    localStorage.removeItem('token'); 
  };

  return (
    <UserContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
};