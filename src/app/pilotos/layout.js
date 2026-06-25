import Link from "next/link";

export default function PilotosLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar de pilotos */}
      <aside className="w-full md:w-64 bg-zinc-900 p-8 border-r border-zinc-800">
        <h3 className="text-red-600 font-black text-xs tracking-widest uppercase mb-6">
          Sección Pilotos
        </h3>
        <ul className="space-y-4 font-bold text-sm">
          
          {/* Enlaces Externos Oficiales */}
          <li>
            <a 
              href="https://www.fia.com/events/fia-formula-one-world-championship/season-2026/formula-one"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors block"
            >
              Temporada 2026
            </a>
          </li>

          <li>
            <a 
              href="https://lat.motorsport.com/f1/news/puntos-penalizacion-formula-1-sanciones/6627725/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors block"
            >
              Superlicencia
            </a>
          </li>

          <li>
            <a 
              href="https://www.f1-fansite.com/es/tag/f1-rumours/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors block"
            >
              Transferencias
            </a>
          </li>

          {/* Enlace Interno para el Dream Team */}
          <li className="border-t border-zinc-800 pt-4">
            <Link 
              href="/favoritos" 
              className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              ⭐ Mi Dream Team
            </Link>
          </li>

        </ul>
      </aside>

      {/* Renderiza /pilotos y descendientes */}
      <section className="flex-1 bg-black">
        {children}
      </section>
    </div>
  );
}