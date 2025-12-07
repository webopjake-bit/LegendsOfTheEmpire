import React from 'react';

export default function GlassInput({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-[10px] uppercase tracking-wider text-white/40 font-bold ml-1">{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-black/40 transition-all font-mono text-sm"
      />
    </div>
  );
}
