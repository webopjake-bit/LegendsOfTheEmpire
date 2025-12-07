import React, { useState } from 'react';
import RSI_Module from '../molecules/RSI_Module';
import NeonSlider from '../atoms/NeonSlider';

const Strategy_Alpha_Box = ({ theme = 'dark' }) => {
  const [config, setConfig] = useState({
    rsi: { period: 14, threshold: 30 },
    takeProfit: 1.5,
    stopLoss: 0.5
  });

  const handleRsiUpdate = (newRsi) => {
    setConfig(prev => ({ ...prev, rsi: newRsi }));
  };

  const handleRiskUpdate = (key, val) => {
    setConfig(prev => ({ ...prev, [key]: val }));
  };

  return (
    <div className="w-full h-full flex flex-col p-4 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden relative">
      {/* Decorative Header */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
          <span className="text-cyan-400">///</span> STRATEGY ALPHA
        </h2>
        <div className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-mono border border-cyan-500/30">
          ACTIVE
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
        {/* Module 1: Indicators */}
        <section>
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 ml-1">Signal Logic</div>
          <RSI_Module 
            initialPeriod={config.rsi.period} 
            initialThreshold={config.rsi.threshold} 
            onUpdate={handleRsiUpdate} 
          />
        </section>

        {/* Module 2: Risk Management */}
        <section>
          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 ml-1">Risk Parameters</div>
          <div className="flex flex-col gap-2 p-3 bg-white/5 rounded-xl border border-white/5">
             <NeonSlider 
                label="Take Profit (%)" 
                value={config.takeProfit} 
                min={0.1} 
                max={10.0} 
                step={0.1}
                unit="%"
                onChange={(v) => handleRiskUpdate('takeProfit', v)} 
              />
              <NeonSlider 
                label="Stop Loss (%)" 
                value={config.stopLoss} 
                min={0.1} 
                max={5.0} 
                step={0.1}
                unit="%"
                onChange={(v) => handleRiskUpdate('stopLoss', v)} 
              />
          </div>
        </section>

        {/* Action Button */}
        <button className="w-full py-3 mt-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs tracking-widest transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] uppercase">
          Deploy Configuration
        </button>
      </div>
    </div>
  );
};

export default Strategy_Alpha_Box;
