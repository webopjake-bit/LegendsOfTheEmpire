import React, { useState } from 'react';
import { getApiUrl } from '../../config/api';

const StrategyLab = () => {
    const [config, setConfig] = useState({
        bot_id: 'new-unit',
        risk_level: 5.0,
        leverage: 1,
        strategy_type: 'Mean Reversion',
        status: 'RUNNING'
    });
    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setConfig(prev => ({ ...prev, [name]: value }));
    };

    const handleDeploy = async () => {
        setMsg('DEPLOYING...');
        try {
            const res = await fetch(getApiUrl('/api/control/update'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
            if (!res.ok) throw new Error('Failed');
            const data = await res.json();
            setMsg('COMMAND CONFIRMED');
            setTimeout(() => setMsg(''), 3000);
        } catch (e) {
            setMsg('ERROR: LINK FAILURE');
        }
    };

    return (
        <div className="p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl shadow-2xl text-white w-full max-w-lg mt-6 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-2">
                <h3 className="text-lg font-bold text-pink-400 tracking-wider">STRATEGY LAB</h3>
                <div className="text-[10px] font-mono text-gray-500">AUTH: ADMIN</div>
            </div>

            <div className="space-y-5">
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Strategy Protocol</label>
                    <select
                        name="strategy_type"
                        value={config.strategy_type}
                        onChange={handleChange}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-sm focus:border-pink-500 focus:outline-none transition-colors"
                    >
                        <option>Mean Reversion</option>
                        <option>Grid Trading</option>
                        <option>Scalping (High Freq)</option>
                        <option>Sentiment Isotope</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Risk per Trade (%)</label>
                        <input
                            type="number"
                            name="risk_level"
                            value={config.risk_level}
                            onChange={handleChange}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-sm focus:border-pink-500 focus:outline-none font-mono"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Leverage (x)</label>
                        <input
                            type="number"
                            name="leverage"
                            value={config.leverage}
                            onChange={handleChange}
                            className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-sm focus:border-pink-500 focus:outline-none font-mono"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Target Unit ID</label>
                    <input
                        type="text"
                        name="bot_id"
                        value={config.bot_id}
                        onChange={handleChange}
                        placeholder="e.g. bot-alpha"
                        className="w-full bg-slate-900/50 border border-slate-700 rounded p-2 text-sm focus:border-pink-500 focus:outline-none font-mono"
                    />
                </div>

                <div className="pt-2">
                    <button
                        onClick={handleDeploy}
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg transform hover:-translate-y-0.5 transition-all text-sm tracking-widest uppercase flex justify-center items-center gap-2"
                    >
                        <span>Initiate Deployment</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </button>
                    {msg && (
                        <div className={`text-center text-[10px] font-mono mt-2 ${msg.includes('ERROR') ? 'text-red-400' : 'text-emerald-400 animate-pulse'}`}>
                            {msg}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StrategyLab;
