import React from 'react';

const NavBar = ({ currentView, setView }) => {
    const navItems = [
        { id: 'command', label: 'COMMAND', icon: '⚡' },
        { id: 'arena', label: 'ARENA', icon: '⚔️' },
        { id: 'backtest', label: 'BACKTEST', icon: '🧪' },
        { id: 'intel', label: 'INTEL', icon: '👁️' }, // Placeholder for future
    ];

    return (
        <div className="flex justify-center mb-8">
            <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-2 flex gap-2 shadow-2xl">
                {navItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => setView(item.id)}
                        className={`px-6 py-2 rounded-full font-bold text-xs tracking-widest transition-all duration-300 flex items-center gap-2 ${currentView === item.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NavBar;
