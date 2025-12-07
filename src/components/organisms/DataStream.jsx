import React, { useState, useEffect, useRef } from 'react';

const DataStream = () => {
    const [logs, setLogs] = useState([]);
    const endRef = useRef(null);

    useEffect(() => {
        // Mocking a WebSocket/SSE stream for now since the backend Redis might be quiet
        const mockStream = setInterval(() => {
            const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
            const events = [
                `[${timestamp}] WARN: High latency detected on node Delta-9`,
                `[${timestamp}] INFO: Bitcoin support level tested at $98,200`,
                `[${timestamp}] TRADE: Executing LIMIT BUY | SOL/USD | $144.50`,
                `[${timestamp}] METRICS: Portfolio rebalance complete. Delta: +0.4%`,
                `[${timestamp}] SYSTEM: Garbage collection initiated...`,
                `[${timestamp}] NET: Incoming packet stream (12mb/s)...`
            ];
            const randomEvent = events[Math.floor(Math.random() * events.length)];

            setLogs(prev => {
                const newLogs = [...prev, randomEvent];
                if (newLogs.length > 20) newLogs.shift(); // Keep last 20
                return newLogs;
            });
        }, 800);

        return () => clearInterval(mockStream);
    }, []);

    // useEffect(() => {
    //     endRef.current?.scrollIntoView({ behavior: "smooth" });
    // }, [logs]);

    return (
        <div className="p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-xl shadow-2xl text-white w-full max-w-2xl mt-6 font-mono text-xs h-64 flex flex-col hover:border-blue-400/30 transition-all duration-300">
            <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <h3 className="font-bold text-blue-400 tracking-wider">LIVE DATA STREAM</h3>
                </div>
                <div className="text-gray-500">CH01 // ENCRYPTED</div>
            </div>

            <div className="overflow-y-hidden flex-1 flex flex-col justify-end space-y-1 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-black/80 pointer-events-none"></div>
                {logs.map((log, i) => (
                    <div key={i} className="text-blue-100/80 border-l-2 border-blue-500/20 pl-2">
                        <span className="opacity-50 mr-2">{log.split(']')[0]}]</span>
                        <span className={log.includes('WARN') ? 'text-yellow-400' : log.includes('TRADE') ? 'text-emerald-400' : 'text-gray-300'}>
                            {log.split(']')[1]}
                        </span>
                    </div>
                ))}
                <div ref={endRef} />
            </div>
        </div>
    );
};

export default DataStream;
