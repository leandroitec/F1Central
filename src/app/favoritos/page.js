import React from "react";
import VistaFavoritos from "@/app/componentes/VistaFavoritos";

export default async function FavoritosPage() {
  let pilotos = [];
  let errorAPI = false;

  try {
    //llamo a la API
    const res = await fetch(
      "https://api.openf1.org/v1/drivers?session_key=latest",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Error en la respuesta de la API");

    const dataCruda = await res.json();

    // mapeo
    pilotos = dataCruda.map((p) => ({
      full_name: p.full_name,
      driver_number: p.driver_number,
      team_name: p.team_name,
      photo: p.headshot_url, 
    }));

    // por las dudas elimino duplicado
    pilotos = pilotos.filter(
      (piloto, index, self) =>
        index === self.findIndex((p) => p.driver_number === piloto.driver_number)
    );

  } catch (error) {
    console.error("Error cargando OpenF1 en favoritos:", error);
    errorAPI = true;
  }

  // si falla
  return <VistaFavoritos pilotosDesdeLaAPI={pilotos} errorAPI={errorAPI} />;
}