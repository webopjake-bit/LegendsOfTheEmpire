import React from 'react';

const Versus_Card = ({ name, avatar, role, stats, isEnemy = false }) => {
  return (
    <div className={`relative p-4 rounded-xl border backdrop-blur-md flex flex-col items-center gap-3 transition-all duration-500
      ${isEnemy 
        ? 'bg-gradient-to-b from-red-950/40 to-black/60 border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]' 
        : 'bg-gradient-to-b from-cyan-950/40 to-black/60 border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]'
      }`}>
      
      {/* Role Badge */}
      <div className={`absolute top-2 right-2 text-[9px] font-black uppercase px-1.5 py-0.5 rounded
        ${isEnemy ? 'bg-red-500 text-black' : 'bg-cyan-500 text-black'}`}>
        {role}
      </div>

      {/* Avatar Ring */}
      <div className={`w-16 h-16 rounded-full p-0.5 relative group
         ${isEnemy ? 'bg-gradient-to-tr from-red-500 to-orange-600' : 'bg-gradient-to-tr from-cyan-500 to-blue-600'}`}>
         <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
            <span className={`text-2xl font-bold ${isEnemy ? 'text-red-500' : 'text-cyan-500'}`}>
                {avatar || name[0]}
            </span>
         </div>
         {/* Glow Effect */}
         <div className={`absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity
            ${isEnemy ? 'bg-red-500' : 'bg-cyan-500'}`} />
      </div>

      {/* Name & Title */}
      <div className="text-center">
        <h3 className="text-sm font-bold text-white tracking-wider">{name}</h3>
        <p className="text-[10px] text-white/40 uppercase font-mono">{isEnemy ? 'AI Overlord' : 'Challenger'}</p>
      </div>

      {/* Stats Grid */}
      <div className="w-full grid grid-cols-2 gap-2 mt-1">
        {Object.entries(stats).map(([key, val]) => (
            <div key={key} className="bg-white/5 rounded p-1.5 text-center">
                <div className="text-[9px] text-white/30 uppercase">{key}</div>
                <div className={`text-xs font-mono font-bold ${isEnemy ? 'text-red-400' : 'text-cyan-400'}`}>{val}</div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Versus_Card;
