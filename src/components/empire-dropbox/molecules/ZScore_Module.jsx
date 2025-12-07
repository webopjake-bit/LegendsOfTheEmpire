import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

/**
 * Codex Molecule
 * Z-Score mean reversion window controller.
 * Mirrors calculate_zscore(period=20).
 */
const ZScore_Module = ({ initialPeriod = 20, onUpdate }) => {
  const [period, setPeriod] = useState(initialPeriod);

  const handleChange = (val) => {
    setPeriod(val);
    onUpdate?.({ period: val });
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(244,114,182,0.9)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">
          Z-SCORE WINDOW
        </h3>
      </div>

      <NeonSlider
        label="Lookback Period"
        value={period}
        min={10}
        max={100}
        step={1}
        onChange={handleChange}
      />
    </div>
  );
};

export default ZScore_Module;

