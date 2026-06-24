"use client";

import React, { useContext } from "react";
import { FavoritesContext } from "@/context/FavoritesContext";
import PilotCard from "@/app/componentes/PilotCard";
import Link from "next/link";

export default function VistaFavoritos({ pilotosDesdeLaAPI, errorAPI }) {
  const { favorites } = useContext(FavoritesContext);

  // crtel error
  if (errorAPI) {
    return (
      <div className="p-10 text-center text-zinc-400 min-h-screen bg-black flex flex-col items-center justify-center">
        <p> No pudimos conectar con el servidor de OpenF1. Intenta nuevamente mas tarde.</p>
        <Link href="/pilotos" className="text-red-500 underline mt-4 text-sm font-mono">
          Volver a Intentar
        </Link>
      </div>
    );
  }

  // funcion filtrar x lista de fav
  const misPilotosFavoritos = pilotosDesdeLaAPI.filter((p) => {
    const slugPilotoAPI = p.full_name.toLowerCase().replaceAll(" ", "-");
    return favorites.includes(slugPilotoAPI);
  });

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Mi <span className="text-amber-500">Dream Team</span>
          </h1>
          <p className="text-zinc-500 mt-2">
            Estrategia híbrida: Datos de OpenF1 filtrados por tu navegador.
          </p>
        </div>
        <Link
          href="/pilotos"
          className="bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded hover:bg-zinc-800 hover:text-red-500 transition-colors"
        >
          &larr; Volver a la Grilla
        </Link>
      </header>

      {misPilotosFavoritos.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/30 border border-zinc-800 border-dashed rounded-lg">
          <p className="text-zinc-500 italic mb-6">
            Todavía no elegiste a ningún piloto favorito.
          </p>
          <Link
            href="/pilotos"
            className="bg-red-600 text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-transform inline-block"
          >
            Explorar Pilotos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {misPilotosFavoritos.map((piloto) => {
            const slug = piloto.full_name.toLowerCase().replaceAll(" ", "-");
            return (
              <PilotCard 
                key={piloto.driver_number} 
                piloto={piloto} 
                slug={slug} 
              />
            );
          })}
        </div>
      )}
    </div>
  );
}