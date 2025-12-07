import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { t: '00:00', v: 4500 }, { t: '04:00', v: 4800 }, { t: '08:00', v: 4700 },
  { t: '12:00', v: 5200 }, { t: '16:00', v: 5100 }, { t: '20:00', v: 5600 },
  { t: 'NOW', v: 5840.25 },
];

export default function RealTimePnL({ theme = 'emerald' }) {
  const isCyber = theme === 'cyber' || theme === 'pink';
  const color = isCyber ? '#c084fc' : '#34d399';

  return (
    <div className="w-full h-full p-6 rounded-3xl empire-glass flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      <div className="flex justify-between items-start mb-2 z-10">
        <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Total Equity</h2>
            <div className="text-4xl font-bold mt-1 text-white">,840<span className="text-xl text-white/60">.25</span></div>
        </div>
        <div className="px-2 py-1 bg-green-500/20 rounded text-green-400 text-xs font-bold border border-green-500/30">
            +12.5%
        </div>
      </div>

      <div className="flex-1 min-h-0 w-full -ml-2">
        <ResponsiveContainer width="105%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPnL" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke={color} strokeWidth={3} fillOpacity={1} fill="url(#colorPnL)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
