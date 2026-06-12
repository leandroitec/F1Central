import Link from "next/link";
import FavoriteButton from "@/app/componentes/FavoriteButton";

export default async function PilotosPage() {
  let pilotos = [];
  let errorAPI = false;

  try {
    const res = await fetch(
      "https://api.openf1.org/v1/drivers?session_key=latest",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Error en la respuesta de la API");

    const dataCruda = await res.json();

    // Filtramos para guardar en memoria los datos requeridos + la foto oficial
    pilotos = dataCruda.map((p) => ({
      full_name: p.full_name,
      driver_number: p.driver_number,
      team_name: p.team_name,
      photo: p.headshot_url, 
    }));

    // Elimina duplicados por número de piloto
    pilotos = pilotos.filter(
      (piloto, index, self) =>
        index ===
        self.findIndex(
          (p) => p.driver_number === piloto.driver_number
        )
    );

  } catch (error) {
    console.error("Error cargando OpenF1:", error);
    errorAPI = true;
  }

  if (errorAPI) {
    return (
      <div className="p-10 text-center text-zinc-400 min-h-screen bg-black">
        <p>
          ⚠️ No pudimos conectar con OpenF1. Intentá nuevamente más tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10 bg-black min-h-screen">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic text-white uppercase tracking-tighter">
          Grilla de <span className="text-red-600">Pilotos</span>
        </h1>

        <p className="text-zinc-500 mt-2">
          Datos consumidos desde OpenF1
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pilotos.map((piloto) => {

          const slug = piloto.full_name
            .toLowerCase()
            .replaceAll(" ", "-");

          return (
            <div
              key={piloto.driver_number}
              className="bg-zinc-900 p-6 rounded border-l-4 border-red-600 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm font-mono text-zinc-500 block mb-1">
                  #{piloto.driver_number}
                </span>

                <h3 className="text-xl font-bold text-white uppercase">
                  {piloto.full_name}
                </h3>

                <p className="text-red-600 text-xs font-bold uppercase mt-1">
                  {piloto.team_name}
                </p>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Link
                  href={`/pilotos/${slug}`}
                  className="text-zinc-400 text-xs font-bold underline hover:text-white transition-colors"
                >
                  VER PERFIL ⮑
                </Link>

                <FavoriteButton pilotId={slug} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}