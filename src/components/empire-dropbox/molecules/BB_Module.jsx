import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

const BB_Module = ({ initialPeriod = 20, initialStdDev = 2, onUpdate }) => {
  const [period, setPeriod] = useState(initialPeriod);
  const [stdDev, setStdDev] = useState(initialStdDev);

  const handleChange = (key, val) => {
    if (key === 'period') setPeriod(val);
    if (key === 'stdDev') setStdDev(val);
    
    if (onUpdate) {
        onUpdate({ 
            period: key === 'period' ? val : period,
            stdDev: key === 'stdDev' ? val : stdDev
        });
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">BOLLINGER BANDS</h3>
      </div>
      
      <NeonSlider label="Period" value={period} min={5} max={50} onChange={(v) => handleChange('period', v)} />
      <NeonSlider label="Std Deviation" value={stdDev} min={0.1} max={5} step={0.1} onChange={(v) => handleChange('stdDev', v)} />
    </div>
  );
};

export default BB_Module;
