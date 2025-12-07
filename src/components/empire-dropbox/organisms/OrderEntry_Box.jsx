import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

const OrderEntry_Box = ({ theme = 'dark' }) => {
  const [side, setSide] = useState('long');
  const [leverage, setLeverage] = useState(1);
  const [size, setSize] = useState(100);

  return (
    <div className="w-full h-full flex flex-col p-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
          <span className="text-pink-400">///</span> ORDER ENTRY
        </h2>
        <div className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-400 text-[10px] font-mono border border-pink-500/30">
          MANUAL
        </div>
      </div>

      <div className="flex-1 space-y-4">
        {/* Side Selector */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-lg">
            <button 
                onClick={() => setSide('long')}
                className={`py-2 rounded-md font-bold text-xs tracking-widest transition-all ${side === 'long' ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : 'text-white/40 hover:bg-white/5'}`}
            >
                LONG
            </button>
            <button 
                onClick={() => setSide('short')}
                className={`py-2 rounded-md font-bold text-xs tracking-widest transition-all ${side === 'short' ? 'bg-red-500 text-black shadow-lg shadow-red-500/20' : 'text-white/40 hover:bg-white/5'}`}
            >
                SHORT
            </button>
        </div>

        {/* Inputs */}
        <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-3">
             <NeonSlider label="Leverage" value={leverage} min={1} max={100} unit="x" onChange={setLeverage} />
             <NeonSlider label="Position Size" value={size} min={10} max={1000} step={10} unit="$" onChange={setSize} />
        </div>

        {/* Big Button */}
        <button className={`w-full py-4 mt-2 rounded-xl font-bold text-sm tracking-[0.2em] transition-all shadow-lg uppercase
            ${side === 'long' 
                ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-500/30' 
                : 'bg-red-600 hover:bg-red-500 text-white shadow-red-500/30'
            }`}>
          Submit {side.toUpperCase()}
        </button>
      </div>
    </div>
  );
};

export default OrderEntry_Box;
