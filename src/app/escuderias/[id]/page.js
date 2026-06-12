import { infoEscuderias, infoPilotos } from '@/data/informacion';
import Link from 'next/link';
import React from 'react';

export default async function EscuderiaDetalle({ params }) {

  const { id } = await params;
  
  // buscar la escudería por su nombre
  const escuderia = infoEscuderias[id.toLowerCase()];

  if (!escuderia) {
    return (
      <div className="p-10 bg-black min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-black italic uppercase">Box, Box!</h1>
        <p className="text-zinc-500 mt-2">Escudería no encontrada en los registros.</p>
        <Link href="/escuderias" className="text-red-600 underline mt-8">Regresar al Paddock</Link>
      </div>
    );
  }
  // todo lo siguiente para conseguir que dos pilotos sean del mismo equipo
  // filtramos los pilotos comparando strings en minúsculas para evitar errores
const pilotosDelEquipo = Object.entries(infoPilotos).filter(([pilotId, p]) => {
    const nombreEscuderia = escuderia.nombre.toLowerCase();
    
    // Si el piloto no tiene equipo, usamos un string vacío para que no rompa el .toLowerCase()
    const equipoPiloto = p.equipo ? p.equipo.toLowerCase() : "";
    
    return nombreEscuderia.includes(equipoPiloto) || equipoPiloto.includes(nombreEscuderia);
  });

  return (
    <div className="p-8 md:p-20 bg-zinc-950 min-h-screen text-white font-sans">
      
      <Link href="/escuderias" className="group flex items-center gap-2 text-zinc-500 hover:text-white mb-12 transition-colors uppercase text-xs font-bold tracking-widest">
        <span className="group-hover:-translate-x-1 transition-transform">⮐</span> 
        Volver a Constructores
      </Link>

      <div className="max-w-6xl mx-auto">
        <header className="relative border-b-8 border-red-600 pb-8 mb-16">
          <span className="text-red-600 font-mono text-sm tracking-[0.4em] uppercase">World Championship 2026</span>
          <h1 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mt-2">
            {escuderia.nombre}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* COLUMNA PRINCIPAL: HISTORIA Y PILOTOS */}
          <div className="lg:col-span-2">
            <section className="mb-16">
              <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs mb-6">Historia de la Escudería</h2>
              <p className="text-2xl text-zinc-300 leading-relaxed font-light italic">
                "{escuderia.historia}"
              </p>
            </section>

            {/* SECCION DE PILOTOS */}
            <section>
              <h2 className="text-white font-black text-3xl uppercase italic mb-8 flex items-center gap-4">
                Lineup <span className="text-red-600">2026</span>
                <span className="h-px flex-1 bg-zinc-800"></span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {pilotosDelEquipo.length > 0 ? (
                  pilotosDelEquipo.map(([pilotId, p]) => (
                    <Link key={pilotId} href={`/pilotos/${pilotId}`}>
                      <div className="group bg-zinc-900/50 p-8 rounded-sm border border-zinc-800 hover:border-red-600 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl font-black text-zinc-800 group-hover:text-red-600/20 transition-colors">{p.nro}</span>
                          <span className="bg-red-600 text-[10px] px-2 py-1 font-bold italic uppercase">Pro</span>
                        </div>
                        <h3 className="text-2xl font-black uppercase group-hover:text-red-600 transition-colors">{p.nombre}</h3>
                        <p className="text-zinc-500 text-xs font-bold uppercase mt-1 tracking-widest">{p.country}</p>
                        <p className="text-white text-[10px] font-bold mt-6 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Ver Perfil ⮑</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-zinc-600 italic">No se encontraron pilotos asignados a este equipo.</p>
                )}
              </div>
            </section>
          </div>

          {/* COLUMNA LATERAL: DATOS TECNICOS */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 border-l-4 border-red-600">
              <h3 className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-4">Director / Dueño</h3>
              <p className="text-xl font-black uppercase italic">{escuderia.dueno}</p>
            </div>
            
            <div className="bg-zinc-900/30 p-8 border border-zinc-800">
              <h3 className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-4">Información de Motor</h3>
              <p className="text-sm font-bold text-zinc-300">Configuración 2026: V6 Turbo Híbrido</p>
              <div className="mt-4 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-green-500 uppercase">Sistema Activo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}