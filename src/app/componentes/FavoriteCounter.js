"use client";

import React, { useContext } from 'react';
import { FavoritesContext } from '@/app/favorites/FavoritesContext';
import Link from 'next/link';

export default function FavoriteCounter() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Link href="/favoritos" className="cursor-pointer block hover:opacity-80 transition-opacity">
      <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-mono">
        <span className={favorites.length > 0 ? 'text-amber-400' : 'text-zinc-600'}>
          ★
        </span>
        <span className="text-zinc-400">Favoritos:</span>
        <span className={`font-bold ${favorites.length > 0 ? 'text-white' : 'text-zinc-500'}`}>
          {favorites.length}
        </span>
      </div>
    </Link>
  );
}