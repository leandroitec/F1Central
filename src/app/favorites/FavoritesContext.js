"use client";

import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('f1_favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (error) {
        console.error("Error al leer localStorage", error);
      }
    }
  }, []);

  // agrega o quita un piloto de la lista y actualiza el localstorage
  const toggleFavorite = (pilotId) => {
    let updated;
    if (favorites.includes(pilotId)) {
      // Si ya existe, lo sacamos
      updated = favorites.filter(id => id !== pilotId);
    } else {
      // Si no existe, lo sumamos
      updated = [...favorites, pilotId];
    }
    
    setFavorites(updated);
    localStorage.setItem('f1_favorites', JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}