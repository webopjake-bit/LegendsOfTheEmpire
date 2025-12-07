import React, { useState } from 'react';
import Versus_Card from '../molecules/Versus_Card';
import SmackTalk_Chat from '../molecules/SmackTalk_Chat';
import NeonSlider from '../atoms/NeonSlider';

const Challenge_Arena = ({ theme = 'dark' }) => {
  const [wager, setWager] = useState(500);

  return (
    <div className="w-full h-full flex flex-col p-1 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden relative group">
       {/* Background Grid Effect */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
       
       {/* Top Bar */}
       <div className="flex justify-between items-center p-4 border-b border-white/5 relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center text-xl shadow-lg shadow-yellow-500/20">🏆</div>
             <div>
                <h2 className="text-lg font-bold text-white tracking-widest uppercase">The Arena</h2>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>
                    <span className="text-[10px] text-red-400 font-mono">LIVE BATTLE</span>
                </div>
             </div>
          </div>
          <div className="text-right">
             <div className="text-[10px] text-white/40 uppercase">Prize Pool</div>
             <div className="text-xl font-mono font-bold text-yellow-400 text-shadow-glow">$25,000</div>
          </div>
       </div>

       {/* Main Content Grid */}
       <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 h-full overflow-hidden relative z-10">
          
          {/* Left: Versus Display */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-center relative">
             {/* VS text */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] font-black text-white/5 pointer-events-none select-none italic">
                VS
             </div>

             <div className="flex justify-between items-center gap-4">
                <Versus_Card 
                    name="YOU" 
                    role="Human" 
                    stats={{ winRate: '64%', pnl: '+$4.2k' }} 
                />
                <Versus_Card 
                    name="ALPHABOT" 
                    role="AI" 
                    avatar="🤖"
                    isEnemy={true}
                    stats={{ winRate: '99%', pnl: '+$8.9M' }} 
                />
             </div>

             {/* Wager Control */}
             <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/5 backdrop-blur-md">
                <div className="text-center mb-2 text-xs font-bold text-yellow-500 uppercase tracking-widest">Place Your Wager</div>
                <NeonSlider value={wager} min={100} max={5000} step={100} unit="$" onChange={setWager} />
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-black font-black uppercase tracking-[0.2em] rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:scale-[1.02]">
                    FIGHT
                </button>
             </div>
          </div>

          {/* Right: Smack Talk */}
          <div className="lg:col-span-5 border-l border-white/5 p-4 bg-black/20">
             <SmackTalk_Chat />
          </div>

       </div>
    </div>
  );
};

export default Challenge_Arena;
