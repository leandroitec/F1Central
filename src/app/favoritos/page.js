"use client";
//Prueba con datos locales **USAR API**

import React, { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "@/app/favorites/FavoritesContext";
import PilotCard from "@/app/componentes/PilotCard";
import Link from "next/link";
import LoadingSpinner from "@/app/componentes/LoadingSpinner";

export default function FavoritosPage() {
  const { favorites } = useContext(FavoritesContext);
  const [pilotosAPI, setPilotosAPI] = useState([]);
  //cargando pagina prueba
  const [cargando, setCargando] = useState(true);


  //llamo a la API
  useEffect(() => {
    async function cargarPilotos() {
      try {
        const res = await fetch("https://api.openf1.org/v1/drivers?session_key=latest");
        const dataCruda = await res.json();

        // soluicion a los duplicados
        const pilotosLimpios = dataCruda.filter(
          (piloto, index, self) =>
            index === self.findIndex((p) => p.driver_number === piloto.driver_number)
        );

        setPilotosAPI(pilotosLimpios);
      } catch (error) {
        console.error("Error al traer pilotos de la API en favoritos:", error);
      } finally {
        setCargando(false);
      }
    }
    cargarPilotos();
  }, []);

  // funcion filtrar x lista de fav
  const misPilotosFavoritos = pilotosAPI.filter((p) => {
    const slugPilotoAPI = p.full_name.toLowerCase().replaceAll(" ", "-");
    return favorites.includes(slugPilotoAPI);
  });

  //texto de carga
  if (cargando) {
    return <LoadingSpinner mensaje="Cargando tu escudería..." />;
  }

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Mi <span className="text-amber-500">Dream Team</span>
          </h1>
          <p className="text-zinc-500 mt-2">Datos en tiempo real desde OpenF1</p>
        </div>
        <Link href="/pilotos" className="bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded hover:bg-zinc-800 hover:text-red-500 transition-colors">
          &larr; Volver a la Grilla
        </Link>
      </header>

      {misPilotosFavoritos.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900/30 border border-zinc-800 border-dashed rounded-lg">
          <p className="text-zinc-500 italic mb-6">Todavia no elegiste a ningun piloto favorito.</p>
          <Link href="/pilotos" className="bg-red-600 text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-red-700 transition-transform inline-block">
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