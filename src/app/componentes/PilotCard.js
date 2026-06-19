import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import BadgeTeam from "./BadgeTeam";

export default function PilotCard({ piloto, slug }) {
  return (
    <div className="group bg-zinc-900 p-6 rounded-md border-l-4 border-zinc-800 hover:border-red-600 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:-translate-y-1">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-3xl font-black text-zinc-800 group-hover:text-red-600/20 transition-colors">
            #{piloto.driver_number}
          </span>
          {/* badge escudería */}
          <BadgeTeam teamName={piloto.team_name} />
        </div>

        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
          {piloto.full_name}
        </h3>
      </div>

      <div className="flex justify-between items-center mt-8 pt-4 border-t border-zinc-800/50">
        <Link
          href={`/pilotos/${slug}`}
          className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1"
        >
          Ver Perfil <span className="text-red-600 group-hover:translate-x-1 transition-transform">⮑</span>
        </Link>

        {/* botón favorito */}
        <FavoriteButton pilotId={slug} />
      </div>
    </div>
  );
}
