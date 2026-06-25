import Link from 'next/link';
import React from 'react';

export default function LeyendasPage() {
  const leyendas = [
    { nombre: "Ayrton Senna", titulos: 3, pais: "Brasil", años: "1984 - 1994", nro: "12 1 27" },
    { nombre: "Michael Schumacher", titulos: 7, pais: "Alemania", años: "1991 - 2012" , nro: "5 1 3 7"},
    { nombre: "Juan Manuel Fangio", titulos: 5, pais: "Argentina", años: "1950 - 1958" , nro: "22 23 54"},
    { nombre: "Niki Lauda", titulos: 3, pais: "Austria", años: "1971 - 1985" , nro: "12 1 11 8"},
  ];

  return (
    <div className="min-h-screen bg-black p-8 md:p-16">
      
      {/* Boton para volver */}
      <Link
        href="/pilotos"
        className="text-red-600 font-bold hover:text-white transition-colors mb-8 inline-block"
      >
        &larr; VOLVER A LA GRILLA DE PILOTOS
      </Link>
      
      {/* HEADER */}
      <header className="mb-16 border-b border-amber-500/30 pb-8 flex justify-between items-end">
        <div>
          <h1 className="text-5xl md:text-7xl font-black italic text-amber-500 tracking-tighter uppercase leading-none">
            Hall of <br />
            <span className="text-white">Fame</span>
          </h1>
          <p className="text-amber-500/60 font-mono text-sm mt-4 tracking-[0.3em] uppercase">
            Inmortalizando a los mejores
          </p>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-6xl font-black text-zinc-900">76+</span>
          <p className="text-xs text-zinc-600 font-bold uppercase">Años de historia</p>
        </div>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {leyendas.map((leyenda, index) => (
          <div 
            key={index}
            className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-tr-3xl transition-all hover:border-amber-500/50 hover:bg-zinc-900"
          >
            {/* aca es para que se vea el nro de fondo */}
            <span className="absolute top-4 right-8 text-6xl font-black text-zinc-800/30 group-hover:text-amber-500/10 transition-colors">
              {leyenda.nro}
            </span>

            <h2 className="text-2xl font-black italic uppercase text-white mb-1 group-hover:text-amber-400 transition-colors">
              {leyenda.nombre}
            </h2>
            <p className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-6">
              {leyenda.titulos} Títulos Mundiales
            </p>

            <div className="flex gap-6 text-sm text-zinc-500">
              <div>
                <p className="text-[10px] uppercase font-bold text-zinc-700">Nacionalidad</p>
                <p>{leyenda.pais}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-zinc-700">Actividad</p>
                <p>{leyenda.años}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}