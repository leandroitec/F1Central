"use client";

import React, { useContext } from 'react';
import { FavoritesContext } from '@/app/favorites/FavoritesContext';

export default function FavoriteButton({ pilotId }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  
  const isFavorite = favorites.includes(pilotId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // evita que al hacer click se dispare el link de la tarjeta
        toggleFavorite(pilotId);
      }}
      className={`px-4 py-2 rounded text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer border ${
        isFavorite 
          ? 'bg-amber-500 text-black border-amber-500 hover:bg-amber-400' 
          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
      }`}
    >
      {isFavorite ? '★ En Favoritos' : '☆ Agregar a Favoritos'}
    </button>
  );
}