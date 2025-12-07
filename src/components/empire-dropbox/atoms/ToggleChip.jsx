import React from 'react';

/**
 * Codex Atom
 * Small on/off pill used across organisms for toggling indicators or strategy flags.
 */
const ToggleChip = ({ label, active = false, onToggle, tone = 'emerald' }) => {
  const activeBg =
    tone === 'ruby'
      ? 'bg-red-500 text-black shadow-[0_0_18px_rgba(248,113,113,0.6)]'
      : tone === 'void'
        ? 'bg-slate-200 text-black shadow-[0_0_18px_rgba(148,163,184,0.6)]'
        : 'bg-emerald-400 text-black shadow-[0_0_18px_rgba(52,211,153,0.6)]';

  const idleBorder =
    tone === 'ruby'
      ? 'border-red-500/40 text-red-300'
      : tone === 'void'
        ? 'border-slate-500/50 text-slate-300'
        : 'border-emerald-500/40 text-emerald-300';

  return (
    <button
      type="button"
      onClick={() => onToggle?.(!active)}
      className={[
        'inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase',
        'border transition-all duration-150',
        active ? activeBg : `bg-black/30 ${idleBorder}`,
      ].join(' ')}
    >
      <span className="mr-1 text-[8px]">{active ? '●' : '○'}</span>
      {label}
    </button>
  );
};

export default ToggleChip;

