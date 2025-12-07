import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { masterSquares } from '../../master-config';

const BacktestMode = () => {
  const [layout, setLayout] = useState([
    { i: 'backtestParams', x: 0, y: 0, w: 4, h: 8 },
    { i: 'backtestPerformance', x: 4, y: 0, w: 5, h: 8 },
    { i: 'backtestMetrics', x: 9, y: 0, w: 3, h: 8 },
    { i: 'backtestAllocation', x: 4, y: 8, w: 5, h: 4 },
    { i: 'backtestRecentTrades', x: 9, y: 8, w: 3, h: 4 },
  ]);

  useEffect(() => {
    // Ensure the layout always has entries for our keys
    const keys = ['backtestParams', 'backtestPerformance', 'backtestMetrics', 'backtestAllocation', 'backtestRecentTrades'];
    setLayout((prev) => {
      const existing = new Set(prev.map((p) => p.i));
      const missing = keys.filter((k) => !existing.has(k));
      if (missing.length === 0) return prev;
      const yBase = Math.max(...prev.map((p) => p.y + p.h), 0);
      const extra = missing.map((k, idx) => ({
        i: k,
        x: 0,
        y: yBase + idx * 4,
        w: 4,
        h: 4,
      }));
      return [...prev, ...extra];
    });
  }, []);

  const width = typeof window !== 'undefined' ? window.innerWidth - 64 : 1200;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-extrabold tracking-[0.25em] text-sky-400 uppercase">
            Backtest Mode
          </h2>
          <p className="text-[11px] text-white/40 font-mono">
            Configure strategies, run simulations, and inspect PnL history.
          </p>
        </div>
        <div className="text-[10px] text-white/40 font-mono">
          GRID // draggable & resizable
        </div>
      </div>

      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={setLayout}
        cols={12}
        rowHeight={40}
        width={width}
        margin={[16, 16]}
        isDraggable
        isResizable
      >
        {layout.map((item) => {
          const cfg = masterSquares[item.i];
          if (!cfg) return null;
          const Component = cfg.component;
          return (
            <div key={item.i} className="h-full w-full">
              <Component theme="emerald" />
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default BacktestMode;

