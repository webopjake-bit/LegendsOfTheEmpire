import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

const MACD_Module = ({ initialFast = 12, initialSlow = 26, initialSignal = 9, onUpdate }) => {
  const [fast, setFast] = useState(initialFast);
  const [slow, setSlow] = useState(initialSlow);
  const [signal, setSignal] = useState(initialSignal);

  const handleChange = (key, val) => {
    if (key === 'fast') setFast(val);
    if (key === 'slow') setSlow(val);
    if (key === 'signal') setSignal(val);
    
    if (onUpdate) {
        onUpdate({ 
            fast: key === 'fast' ? val : fast,
            slow: key === 'slow' ? val : slow,
            signal: key === 'signal' ? val : signal 
        });
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">MACD CONFIG</h3>
      </div>
      
      <NeonSlider label="Fast EMA" value={fast} min={2} max={50} onChange={(v) => handleChange('fast', v)} />
      <NeonSlider label="Slow EMA" value={slow} min={10} max={100} onChange={(v) => handleChange('slow', v)} />
      <NeonSlider label="Signal" value={signal} min={2} max={30} onChange={(v) => handleChange('signal', v)} />
    </div>
  );
};

export default MACD_Module;
