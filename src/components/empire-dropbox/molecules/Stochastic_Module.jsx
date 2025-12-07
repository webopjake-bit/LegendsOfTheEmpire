import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

/**
 * Codex Molecule
 * Stochastic oscillator controls: k_period and d_period.
 * Mirrors calculate_stochastic(k_period=14, d_period=3).
 */
const Stochastic_Module = ({
  initialK = 14,
  initialD = 3,
  onUpdate,
}) => {
  const [kPeriod, setKPeriod] = useState(initialK);
  const [dPeriod, setDPeriod] = useState(initialD);

  const emit = (next = {}) => {
    onUpdate?.({
      k_period: next.k_period ?? kPeriod,
      d_period: next.d_period ?? dPeriod,
    });
  };

  const handleK = (val) => {
    setKPeriod(val);
    emit({ k_period: val });
  };

  const handleD = (val) => {
    setDPeriod(val);
    emit({ d_period: val });
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">
          STOCHASTIC OSCILLATOR
        </h3>
      </div>

      <NeonSlider
        label="%K Period"
        value={kPeriod}
        min={5}
        max={50}
        step={1}
        onChange={handleK}
      />
      <NeonSlider
        label="%D Period"
        value={dPeriod}
        min={2}
        max={20}
        step={1}
        onChange={handleD}
      />
    </div>
  );
};

export default Stochastic_Module;

