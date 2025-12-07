import React from 'react';
// import { useTheme } from '../hooks/useTheme'; // Removed unused broken import

const NeonSlider = ({ label, value, min = 0, max = 100, step = 1, onChange, unit = '' }) => {
  return (
    <div className="flex flex-col gap-1 w-full p-2 bg-black/20 rounded-lg backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors">
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-white/60 tracking-wider uppercase">{label}</span>
        <span className="text-xs font-mono text-cyan-400">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(6,182,212,0.8)] hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
      />
    </div>
  );
};

export default NeonSlider;
