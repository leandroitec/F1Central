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
          <li className="text-zinc-400 hover:text-white cursor-pointer transition-colors">Temporada 2026</li>
          <li className="text-zinc-400 hover:text-white cursor-pointer transition-colors">Superlicencia</li>
          <li className="text-zinc-400 hover:text-white cursor-pointer transition-colors">Transferencias</li>

          {/* --- agregue enlance para Dream Team --- */}
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

      {/* Aqui renderiza /pilotos y descendentes*/}
      <section className="flex-1 bg-black">
        {children}
      </section>
    </div>
  );
}