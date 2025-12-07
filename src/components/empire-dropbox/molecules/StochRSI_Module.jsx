import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';

/**
 * Codex Molecule
 * Stochastic RSI control block.
 * Mirrors calculate_stoch_rsi(rsi_period, stoch_period, d_period).
 */
const StochRSI_Module = ({
  initialRsiPeriod = 14,
  initialStochPeriod = 14,
  initialDPeriod = 3,
  onUpdate,
}) => {
  const [rsiPeriod, setRsiPeriod] = useState(initialRsiPeriod);
  const [stochPeriod, setStochPeriod] = useState(initialStochPeriod);
  const [dPeriod, setDPeriod] = useState(initialDPeriod);

  const emit = (next = {}) => {
    onUpdate?.({
      rsi_period: next.rsi_period ?? rsiPeriod,
      stoch_period: next.stoch_period ?? stochPeriod,
      d_period: next.d_period ?? dPeriod,
    });
  };

  const handleRsi = (val) => {
    setRsiPeriod(val);
    emit({ rsi_period: val });
  };

  const handleStoch = (val) => {
    setStochPeriod(val);
    emit({ stoch_period: val });
  };

  const handleD = (val) => {
    setDPeriod(val);
    emit({ d_period: val });
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)]" />
        <h3 className="text-xs font-bold text-white tracking-widest">
          STOCHASTIC RSI
        </h3>
      </div>

      <NeonSlider
        label="RSI Period"
        value={rsiPeriod}
        min={5}
        max={50}
        step={1}
        onChange={handleRsi}
      />
      <NeonSlider
        label="Stoch Window"
        value={stochPeriod}
        min={5}
        max={50}
        step={1}
        onChange={handleStoch}
      />
      <NeonSlider
        label="%D Smoothing"
        value={dPeriod}
        min={2}
        max={20}
        step={1}
        onChange={handleD}
      />
    </div>
  );
};

export default StochRSI_Module;

