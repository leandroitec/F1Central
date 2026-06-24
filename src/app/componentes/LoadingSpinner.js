import React from "react";

export default function LoadingSpinner({ mensaje = "Conectando con boxes..." }) {
  return (
    <div className="p-10 min-h-screen bg-black flex flex-col items-center justify-center gap-4">
      {/* Spinner aanimado prueba */}
      <div className="w-12 h-12 border-4 border-zinc-800 border-t-red-600 rounded-full animate-spin"></div>
      
      {/* texto personalizado variable mensaje="" */}
      <p className="text-zinc-400 font-mono text-xs uppercase tracking-[0.2em] animate-pulse">
        {mensaje}
      </p>
    </div>
  );
}