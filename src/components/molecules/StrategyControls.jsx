import React, { useState } from 'react';
import GlassInput from '../atoms/GlassInput';
import NeonSlider from '../atoms/NeonSlider';

export default function StrategyControls({ theme = 'emerald' }) {
  const [leverage, setLeverage] = useState(10);
  const [size, setSize] = useState(1000);
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
      <div className="flex gap-2 items-center mb-1">
         <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
         <span className="text-xs font-bold text-white/50 uppercase">Execution Params</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <GlassInput label="Entry Price" placeholder="Market" />
        <GlassInput label="Stop Loss" placeholder="NONE" />
      </div>

      <NeonSlider 
        label="Leverage (x)" 
        value={leverage} 
        min={1} 
        max={100} 
        onChange={(e) => setLeverage(e.target.value)} 
        color={theme === 'cyber' ? 'pink' : theme === 'emerald' ? 'emerald' : 'cyan'} 
      />

      <GlassInput 
        label="Position Size (USD)" 
        value={size} 
        onChange={(e) => setSize(e.target.value)} 
        type="number" 
      />
    </div>
  );
}
