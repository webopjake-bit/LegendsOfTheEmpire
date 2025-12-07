import React from 'react';

export default function NeonSlider({ label, value, min, max, onChange, color = "emerald" }) {
  // Simple color mapping for the accent
  const accentClass = color === 'pink' ? 'accent-pink-500' : color === 'cyan' ? 'accent-cyan-500' : 'accent-emerald-500';
  const textClass = color === 'pink' ? 'text-pink-400' : color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400';

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between ml-1">
        <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold">{label}</label>
        <span className={`text-[10px] font-bold font-mono ${textClass}`}>{value}</span>
      </div>
      <input 
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className={`w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer ${accentClass}`}
      />
    </div>
  );
}
