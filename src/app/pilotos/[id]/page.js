import Link from "next/link";
import { infoPilotos } from "@/data/informacion";

export default async function PilotoDetalle({ params }) {

  const { id } = await params; 
  const slug = id; 

  let pilotoAPI = null;

  try {
    const res = await fetch(
      "https://api.openf1.org/v1/drivers?session_key=latest",
      {
        cache: "no-store",
      }
    );

    const dataCruda = await res.json();

    const pilotos = dataCruda.map((p) => ({
      full_name: p.full_name,
      driver_number: p.driver_number,
      team_name: p.team_name,
    }));

    pilotoAPI = pilotos.find((p) => {
      const pilotoSlug = p.full_name
        .toLowerCase()
        .replaceAll(" ", "-");

      return pilotoSlug === slug;
    });

  } catch (error) {
    console.error("Error cargando piloto:", error);
  }

  const infoLocal = infoPilotos[slug];

  if (!pilotoAPI || !infoLocal) {
    return (
      <div className="p-10 text-center text-white">
        <h1 className="text-3xl font-bold">
          Piloto no encontrado
        </h1>

        <Link
          href="/pilotos"
          className="text-red-600 mt-4 inline-block"
        >
          Volver
        </Link>
      </div>
    );
  }

  const fechaNacimiento = new Date(infoLocal.birthday);
  const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();

  return (
    <div className="p-8 md:p-16 min-h-screen bg-black text-white">

      <Link
        href="/pilotos"
        className="text-red-600 font-bold hover:text-white transition-colors mb-8 inline-block"
      >
        ⮐ VOLVER A LA GRILLA DE PILOTOS
      </Link>

      <header className="border-b-4 border-red-600 pb-6 mb-10">
        <p className="text-zinc-500 font-mono uppercase tracking-widest text-sm mb-2">
          Ficha Técnica Oficial
        </p>

        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
          {pilotoAPI.full_name}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Columna Izquierda: Estadísticas */}
        <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-2xl flex flex-col justify-center">

          <h2 className="text-red-600 font-bold text-xl mb-8 uppercase tracking-wider">
            Estadísticas
          </h2>

          <div className="space-y-6">

            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Número:</span>
              <span className="font-bold text-lg">
                #{pilotoAPI.driver_number}
              </span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Escudería:</span>
              <span className="font-bold text-lg">
                {pilotoAPI.team_name}
              </span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">País:</span>
              <span className="font-bold text-lg">
                {infoLocal.country}
              </span>
            </div>

            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Edad:</span>
              <span className="font-bold text-lg">
                {edad} años
              </span>
            </div>

          </div>
        </div>

        {/* Columna Derecha: Foto y Descripción */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">

          {/* Contenedor "Máscara" (Círculo) */}
          {infoLocal.photo && (
            <div className="w-full max-w-sm mx-auto self-center mb-8 overflow-hidden h-[350px] flex items-start justify-center bg-[#1a0000] p-4 rounded-lg border border-red-600">
                <img
                  src={infoLocal.photo}
                  alt={pilotoAPI.full_name}
                  // w-full estira la imagen, object-cover y object-top fuerzan el recorte superior/torso
                  className="w-full h-auto object-cover object-top"
                />
            </div>
          )}

          <p className="text-zinc-400 leading-relaxed text-xl italic">
            "{pilotoAPI.full_name} compite actualmente para
            {` ${pilotoAPI.team_name} `} y forma parte de la
            parrilla actual de Formula 1."
          </p>

          <div className="mt-8 h-1 w-20 bg-red-600 mx-auto md:mx-0"></div>

        </div>

      </div>

    </div>
  );
}