import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

const RSI_Module = ({ initialPeriod = 14, initialThreshold = 30, onUpdate }) => {
  const [period, setPeriod] = useState(initialPeriod);
  const [threshold, setThreshold] = useState(initialThreshold);

  const handleChange = (key, val) => {
    if (key === 'period') setPeriod(val);
    if (key === 'threshold') setThreshold(val);
    if (onUpdate) onUpdate({ period: key === 'period' ? val : period, threshold: key === 'threshold' ? val : threshold });
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">RSI CONTROLLER</h3>
      </div>
      
      <NeonSlider 
        label="Lookback Period" 
        value={period} 
        min={2} 
        max={50} 
        onChange={(v) => handleChange('period', v)} 
      />
      
      <NeonSlider 
        label="Oversold Thresh" 
        value={threshold} 
        min={10} 
        max={45} 
        onChange={(v) => handleChange('threshold', v)} 
      />
    </div>
  );
};

export default RSI_Module;
