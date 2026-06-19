import React from 'react';

export default function BadgeTeam({ teamName }) {
  return (
    <span className="inline-block bg-red-600/10 text-red-500 border border-red-600/30 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest shadow-[0_0_10px_rgba(220,38,38,0.2)]">
      {teamName}
    </span>
  );
}
