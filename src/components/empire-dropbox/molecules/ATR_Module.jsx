import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

/**
 * Codex Molecule
 * Average True Range (ATR) period controller.
 * Mirrors calculate_atr(period=14).
 */
const ATR_Module = ({ initialPeriod = 14, onUpdate }) => {
  const [period, setPeriod] = useState(initialPeriod);

  const handleChange = (val) => {
    setPeriod(val);
    onUpdate?.({ period: val });
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.9)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">
          ATR VOLATILITY
        </h3>
      </div>

      <NeonSlider
        label="Period"
        value={period}
        min={5}
        max={50}
        step={1}
        onChange={handleChange}
      />
    </div>
  );
};

export default ATR_Module;

