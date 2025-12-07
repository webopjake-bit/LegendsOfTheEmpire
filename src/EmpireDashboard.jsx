import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { masterSquares } from './master-config';
import Header from './components/organisms/Header';

const themes = {
  dark: { name: 'Titanium', class: 'empire-theme-dark bg-zinc-950' },
  emerald: { name: 'Matrix', class: 'empire-theme-emerald bg-emerald-950' },
  cyber: { name: 'Neon', class: 'empire-theme-cyber bg-indigo-950' },
  void: { name: 'Abyss', class: 'empire-theme-void bg-black' },
};

export default function EmpireDashboard() {
  const [themeKey, setThemeKey] = useState('dark');
  const [layout, setLayout] = useState([
    { i: 'pnl', x: 0, y: 0, w: 6, h: 4 },
    { i: 'control', x: 6, y: 0, w: 3, h: 4 },
    { i: 'orderEntry', x: 9, y: 0, w: 3, h: 6 },
    { i: 'strategyParams', x: 0, y: 4, w: 3, h: 4 },
    { i: 'leaderboard', x: 0, y: 4, w: 9, h: 3 },
    { i: 'fantasy', x: 0, y: 7, w: 6, h: 6 },
    { i: 'backtest', x: 6, y: 7, w: 6, h: 5 },
    { i: 'logs', x: 0, y: 12, w: 6, h: 4 },
    { i: 'community', x: 6, y: 12, w: 6, h: 4 },
    { i: 'terminal', x: 0, y: 16, w: 12, h: 8 },
  ]);

  // Effect to ensure new components appear in the layout even if state is preserved
  React.useEffect(() => {
    setLayout(prev => {
      const existingKeys = new Set(prev.map(p => p.i));
      const missingItems = Object.keys(masterSquares).filter(k => !existingKeys.has(k)).map(k => {
        // Default positions for new items (stacking at bottom)
        const y = Math.max(...prev.map(p => p.y + p.h), 0);
        const itemConfig = masterSquares[k].metadata || {};
        return {
          i: k,
          x: 0,
          y: y,
          w: (itemConfig.minSize ? itemConfig.minSize[0] : 6),
          h: (itemConfig.minSize ? itemConfig.minSize[1] : 4)
        };
      });

      if (missingItems.length > 0) {
        return [...prev, ...missingItems];
      }
      return prev;
    });
  }, []);

  const currentTheme = themes[themeKey];

  return (
    <div className={`min-h-screen transition-colors duration-700 ${currentTheme.class}`}>
      <Header />

      {/* Theme Switcher Bar */}
      <div className="w-full flex justify-center mb-6">
        <div className="flex gap-2 bg-black/30 p-1.5 rounded-2xl backdrop-blur-md border border-white/5">
          {Object.entries(themes).map(([key, t]) => (
            <button
              key={key}
              onClick={() => setThemeKey(key)}
              className={`px-6 py-2 rounded-xl font-bold uppercase text-xs tracking-widest transition-all duration-300 ${key === themeKey
                ? 'bg-white text-black shadow-lg scale-105'
                : 'text-white/40 hover:text-white hover:bg-white/10'
                }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={setLayout}
        cols={12}
        rowHeight={60}
        width={window.innerWidth}
        margin={[24, 24]}
        isDraggable={true}
        isResizable={true}
      >
        {layout.map(item => {
          const ItemConfig = masterSquares[item.i];
          if (!ItemConfig) return null;

          return (
            <div key={item.i} className="relative group h-full">
              <ItemConfig.component theme={themeKey} />
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
}
