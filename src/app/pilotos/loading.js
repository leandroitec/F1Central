import React from "react";
import LoadingSpinner from "@/app/componentes/LoadingSpinner";

// Prueba spinner(pantalla carga) usando sistema de carga Loading de Next.js
export default function FavoritosLoading() {
  // aca traido el componente spinner
  return <LoadingSpinner mensaje="Preparando la grilla de partida..." />;
}