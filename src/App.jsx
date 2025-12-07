import React, { useState } from 'react';
import NavBar from './components/organisms/NavBar';
import CommandCenter from './components/pages/CommandCenter';
import GameArena from './components/pages/GameArena';
import BacktestMode from './components/pages/BacktestMode';

function App() {
  const [view, setView] = useState('command');

  return (
    <div className="bg-slate-900 min-h-screen text-white p-6 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Global Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 tracking-tighter inline-block">
          EMPIRE // {view.toUpperCase()}
        </h1>
      </div>

      {/* Navigation */}
      <NavBar currentView={view} setView={setView} />

      {/* Dynamic Content */}
      <div className="w-full max-w-7xl mx-auto">
        {view === 'command' && <CommandCenter />}
        {view === 'arena' && <GameArena />}
        {view === 'backtest' && <BacktestMode />}
        {view === 'intel' && (
          <div className="flex flex-col items-center justify-center h-96 text-gray-500 font-mono animate-pulse">
            <div className="text-4xl mb-4">👁️</div>
            <div>CLASSIFIED INTELLIGENCE</div>
            <div className="text-xs mt-2">ACCESS LEVEL: CLEARANCE PENDING</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
