import React, { useState } from 'react';
import NeonSlider from '../atoms/NeonSlider';
import ToggleChip from '../atoms/ToggleChip';

/**
 * Codex Molecule
 * ADX controller for trend strength: exposes period + enable toggle.
 * Maps loosely to calculate_adx(period=14).
 */
const ADX_Module = ({ initialPeriod = 14, initialEnabled = true, onUpdate }) => {
  const [period, setPeriod] = useState(initialPeriod);
  const [enabled, setEnabled] = useState(initialEnabled);

  const emit = (next = {}) => {
    const payload = {
      enabled,
      period,
      ...next,
    };
    onUpdate?.(payload);
  };

  const handlePeriod = (val) => {
    setPeriod(val);
    emit({ period: val });
  };

  const handleToggle = (next) => {
    setEnabled(next);
    emit({ enabled: next });
  };

  return (
    <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
          <h3 className="text-[11px] font-bold text-white tracking-widest">
            ADX TREND STRENGTH
          </h3>
        </div>
        <ToggleChip label="Live" active={enabled} onToggle={handleToggle} tone="emerald" />
      </div>

      <NeonSlider
        label="Period"
        value={period}
        min={5}
        max={50}
        step={1}
        onChange={handlePeriod}
      />
    </div>
  );
};

export default ADX_Module;

