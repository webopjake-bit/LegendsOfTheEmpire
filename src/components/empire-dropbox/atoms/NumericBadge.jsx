import React from 'react';

/**
 * Codex Atom
 * Compact numeric badge used to show current indicator values or risk metrics.
 */
const NumericBadge = ({ label, value, suffix = '', tone = 'emerald' }) => {
  const accent =
    tone === 'ruby'
      ? 'text-red-400 border-red-500/40'
      : tone === 'void'
        ? 'text-slate-300 border-slate-500/60'
        : 'text-emerald-300 border-emerald-500/40';

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
        {label}
      </span>
      <div
        className={`inline-flex items-center px-2 py-1 rounded-md bg-black/40 border ${accent} font-mono text-[11px]`}
      >
        {value}
        {suffix && <span className="ml-1 text-white/30 text-[9px]">{suffix}</span>}
      </div>
    </div>
  );
};

export default NumericBadge;

