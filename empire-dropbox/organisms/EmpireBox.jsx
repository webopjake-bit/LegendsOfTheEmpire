import React, { useState } from 'react';

// Empire Design System Themes
const THEMES = {
    emerald: 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] bg-black/80 text-emerald-100',
    ruby: 'border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.2)] bg-black/80 text-rose-100',
    void: 'border-slate-700 shadow-[0_0_15px_rgba(148,163,184,0.1)] bg-gray-950/90 text-slate-300',
    gold: 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] bg-black/80 text-amber-100',
    cyan: 'border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)] bg-black/80 text-cyan-100',
};

const EmpireBox = ({
    children,
    title,
    theme = 'void',
    width = 'w-64',
    height = 'h-64',
    className = ''
}) => {
    const themeClasses = THEMES[theme] || THEMES.void;

    return (
        <div className={`relative flex flex-col rounded-lg border ${themeClasses} ${width} ${height} backdrop-blur-md overflow-hidden transition-all duration-300 hover:scale-[1.02] ${className}`}>
            {/* Header / Title Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-inherit bg-white/5">
                <span className="text-xs font-bold tracking-widest uppercase opacity-80">{title}</span>
                <div className="flex gap-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${theme === 'emerald' ? 'bg-emerald-400' : 'bg-current opacity-50'}`} />
                    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto scrollbar-hide">
                {children}
            </div>

            {/* Resize Handle (Visual) */}
            <div className="absolute bottom-1 right-1 opacity-20 cursor-se-resize">
                <svg w="8" h="8" viewBox="0 0 10 10" fill="currentColor" className="w-3 h-3">
                    <path d="M10 10L10 0L0 10Z" />
                </svg>
            </div>
        </div>
    );
};

export default EmpireBox;
