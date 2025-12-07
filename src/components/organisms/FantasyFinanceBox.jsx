import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Legend, ComposedChart
} from 'recharts';
import {
    Activity, Settings, BarChart2, Zap, Play, Pause,
    TrendingUp, TrendingDown, AlertTriangle, DollarSign,
    Cpu, Shield, ChevronRight, Lock, Unlock, Eye, Share2, Trophy, Users, Layers, Plus, Save,
    Globe, MessageSquare, Copy, ArrowUpRight, ArrowDownRight, Wallet, Bell, CheckCircle,
    Sword, Crosshair, UserPlus, LogOut, Clock, Calendar, Crown, Sparkles, Search, AlertOctagon
} from 'lucide-react';
import EmpireBox from './EmpireBox';

// --- 5. LEAGUE & GAME COMPONENTS ---

const Card = ({ children, className = "" }) => (
    <div className={`bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-md overflow-hidden shadow-xl shadow-black/20 ${className}`}>
        {children}
    </div>
);

const Badge = ({ children, color = "blue", className = "", icon: Icon }) => {
    const colors = {
        blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        red: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        gold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
        platinum: "bg-slate-200/10 text-slate-200 border-slate-200/20",
    };
    return (
        <span className={`px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded border flex items-center gap-1 ${colors[color]} ${className}`}>
            {Icon && <Icon size={10} />}
            {children}
        </span>
    );
};

const LeagueOnboarding = ({ onComplete }) => {
    const [teamName, setTeamName] = useState("");
    const [division, setDivision] = useState("Crypto Kings");

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 animate-in fade-in duration-500">
            <Card className="w-full max-w-md p-8 border-t-4 border-t-orange-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Crown size={120} />
                </div>
                <div className="text-center mb-8 relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-orange-500/30">
                        <Trophy size={40} />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Crypto Blitz</h1>
                    <Badge color="platinum" className="inline-flex mb-4">Official League</Badge>
                    <p className="text-slate-400 text-sm">Unrestricted Markets. 24/7 Trading. No PDT Rules.</p>
                </div>

                <div className="space-y-5 relative z-10">
                    <div>
                        <label className="text-xs uppercase font-bold text-slate-500 mb-1 block">Franchise Name</label>
                        <input
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder="e.g. Moon Base Alpha"
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                    <div>
                        <label className="text-xs uppercase font-bold text-slate-500 mb-2 block">Select Division</label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Crypto Kings', 'DeFi Degens', 'NFT Barons', 'Metaverse Titans'].map(div => (
                                <button
                                    key={div}
                                    onClick={() => setDivision(div)}
                                    className={`p-3 text-xs font-bold rounded-lg border transition-all flex items-center justify-center text-center h-12 ${division === div
                                            ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.2)]'
                                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                                        }`}
                                >
                                    {div}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => teamName && onComplete(teamName, division)}
                        disabled={!teamName}
                        className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm uppercase tracking-wide rounded-lg transition-all shadow-lg shadow-orange-900/20 mt-2"
                    >
                        Enter The Arena
                    </button>
                </div>
            </Card>
        </div>
    );
};

const DraftRoom = ({ onLockLineup }) => {
    const [roster, setRoster] = useState({
        offense: [null, null, null], // 3 slots
        defense: [null, null]        // 2 slots
    });

    // SWITCHED TO CRYPTO ASSETS PER REQUEST
    const assets = [
        { symbol: "BTC", name: "Bitcoin", type: "Offense", sector: "L1", beta: 1.0 },
        { symbol: "ETH", name: "Ethereum", type: "Offense", sector: "L1", beta: 1.2 },
        { symbol: "SOL", name: "Solana", type: "Offense", sector: "L1", beta: 1.5 },
        { symbol: "DOGE", name: "Dogecoin", type: "Offense", sector: "Meme", beta: 2.5 },
        { symbol: "PEPE", name: "Pepe", type: "Offense", sector: "Meme", beta: 3.0 },
        { symbol: "USDT", name: "Tether", type: "Defense", sector: "Stable", beta: 0.01 },
        { symbol: "BTC-DOWN", name: "BTC Short", type: "Defense", sector: "Hedge", beta: -2.0 },
        { symbol: "ETH-BEAR", name: "ETH Short", type: "Defense", sector: "Hedge", beta: -2.5 },
    ];

    const addToRoster = (asset) => {
        const typeKey = asset.type.toLowerCase();
        const emptyIndex = roster[typeKey].indexOf(null);
        if (emptyIndex !== -1) {
            const newRoster = { ...roster };
            newRoster[typeKey][emptyIndex] = asset;
            setRoster(newRoster);
        }
    };

    const removeFromRoster = (type, index) => {
        const newRoster = { ...roster };
        newRoster[type][index] = null;
        setRoster(newRoster);
    };

    const isFull = !roster.offense.includes(null) && !roster.defense.includes(null);

    return (
        <div className="h-full flex flex-col lg:flex-row gap-6 p-1">
            <Card className="flex-1 p-5 flex flex-col relative overflow-hidden">
                {/* PDT WARNING BANNER */}
                <div className="absolute top-0 left-0 w-full bg-rose-900/90 border-b border-rose-500/50 p-2 flex items-center justify-center gap-2 z-10 backdrop-blur-md animate-in slide-in-from-top duration-500">
                    <AlertOctagon size={14} className="text-rose-400" />
                    <span className="text-[10px] font-bold text-rose-100 uppercase tracking-wide">
                        PDT RULE ENFORCED ($25k Min). EQUITIES LOCKED. CRYPTO MARKETS: <span className="text-emerald-400">ACTIVE</span>.
                    </span>
                </div>

                <div className="mb-4 mt-8 flex justify-between items-center">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <Users size={18} className="text-cyan-400" /> Asset Pool
                    </h3>
                    <div className="text-xs text-slate-400 flex gap-2">
                        <span className="px-2 py-1 bg-slate-800 rounded text-emerald-400 border border-emerald-500/20">24/7 Market</span>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    {assets.map((asset) => (
                        <div key={asset.symbol} className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 transition-colors group">
                            <div>
                                <div className="font-bold text-white">{asset.symbol}</div>
                                <div className="text-xs text-slate-400 flex items-center gap-2">
                                    {asset.name}
                                    <span className="text-[10px] bg-slate-700 px-1 rounded text-slate-300" title="Fair Play Multiplier applied based on Beta">β{asset.beta}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge color={asset.type === "Offense" ? "blue" : "purple"}>{asset.type}</Badge>
                                <button onClick={() => addToRoster(asset)} className="p-1.5 bg-slate-700 hover:bg-emerald-600 text-white rounded transition-colors"><Plus size={14} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* MY ROSTER */}
            <Card className="flex-1 p-5 flex flex-col bg-gradient-to-br from-slate-900 to-slate-900 border-l-4 border-l-orange-500">
                <div className="mb-6 flex justify-between items-center">
                    <h3 className="font-bold text-white flex items-center gap-2">
                        <Trophy size={18} className="text-orange-400" /> Starting Lineup
                    </h3>
                    <Badge color={isFull ? "green" : "orange"}>{isFull ? "Ready" : "Incomplete"}</Badge>
                </div>

                {/* OFFENSE */}
                <div className="mb-6">
                    <label className="text-xs uppercase font-bold text-blue-400 mb-2 block flex items-center gap-1"><Sword size={12} /> Offense (Longs)</label>
                    <div className="space-y-2">
                        {roster.offense.map((slot, i) => (
                            <div key={`off-${i}`} className={`h-14 rounded-lg border border-dashed flex items-center px-4 transition-all ${slot ? 'bg-slate-800 border-slate-700' : 'bg-slate-900/50 border-slate-800'}`}>
                                {slot ? (
                                    <div className="flex-1 flex justify-between items-center animate-in fade-in">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-sm">{slot.symbol}</span>
                                            <span className="text-[10px] text-slate-500">{slot.name}</span>
                                        </div>
                                        <button onClick={() => removeFromRoster('offense', i)} className="text-slate-500 hover:text-rose-400"><LogOut size={14} /></button>
                                    </div>
                                ) : <span className="text-xs text-slate-600 flex items-center gap-2"><Plus size={10} /> Draft Asset</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* DEFENSE */}
                <div className="flex-1">
                    <label className="text-xs uppercase font-bold text-purple-400 mb-2 block flex items-center gap-1"><Shield size={12} /> Defense (Shorts/Hedges)</label>
                    <div className="space-y-2">
                        {roster.defense.map((slot, i) => (
                            <div key={`def-${i}`} className={`h-14 rounded-lg border border-dashed flex items-center px-4 transition-all ${slot ? 'bg-slate-800 border-slate-700' : 'bg-slate-900/50 border-slate-800'}`}>
                                {slot ? (
                                    <div className="flex-1 flex justify-between items-center animate-in fade-in">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-white text-sm">{slot.symbol}</span>
                                            <span className="text-[10px] text-slate-500">{slot.name}</span>
                                        </div>
                                        <button onClick={() => removeFromRoster('defense', i)} className="text-slate-500 hover:text-rose-400"><LogOut size={14} /></button>
                                    </div>
                                ) : <span className="text-xs text-slate-600 flex items-center gap-2"><Plus size={10} /> Draft Asset</span>}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={onLockLineup}
                    disabled={!isFull}
                    className="w-full py-3 mt-4 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2"
                >
                    <Lock size={16} /> Lock Lineup
                </button>
            </Card>
        </div>
    );
};

const RivalryCard = ({ teamA, teamB, spread, onPick }) => (
    <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 p-4 mb-4 group hover:border-slate-600 transition-all">
        <div className="absolute top-0 left-0 w-1/2 h-1 bg-blue-500/50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1 bg-red-500/50"></div>
        <div className="flex justify-between items-center mb-4 relative z-10">
            <div className="text-center">
                <div className="text-2xl font-black text-white">{teamA}</div>
                <button onClick={() => onPick(teamA)} className="mt-2 px-4 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded text-[10px] font-bold hover:bg-blue-600 hover:text-white transition-colors uppercase tracking-wider">Pick</button>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">VS</span>
                <span className="text-lg font-mono text-slate-300 my-1">{spread}</span>
                <Badge color="orange" icon={Sparkles}>Rivalry</Badge>
            </div>
            <div className="text-center">
                <div className="text-2xl font-black text-white">{teamB}</div>
                <button onClick={() => onPick(teamB)} className="mt-2 px-4 py-1 bg-red-600/20 text-red-400 border border-red-600/30 rounded text-[10px] font-bold hover:bg-red-600 hover:text-white transition-colors uppercase tracking-wider">Pick</button>
            </div>
        </div>
    </div>
);

export const FantasyFinanceBox = React.forwardRef((props, ref) => {
    const [teamData, setTeamData] = useState(null);
    const [marketStatus, setMarketStatus] = useState("closed");
    const [myScore, setMyScore] = useState(1240);
    const [oppScore, setOppScore] = useState(1150);
    const [roster, setRoster] = useState(null);
    const [toast, setToast] = useState(null);

    const showToast = (msg, type) => {
        // Basic simple alert or could be a state
        console.log(msg);
    };

    // Updated Opponent Roster to Crypto
    const [oppRoster] = useState([
        { name: "SOL", role: "Striker", type: "Offense", change: 3.2, points: 320 },
        { name: "ADA", role: "Flex", type: "Offense", change: 1.5, points: 150 },
        { name: "SHIB", role: "Wildcard", type: "Offense", change: 5.1, points: 510 },
        { name: "USDT", role: "Shield", type: "Defense", change: 0.01, points: 1 },
        { name: "ETH-BEAR", role: "Safety", type: "Defense", change: -2.4, points: -240 },
    ]);

    useEffect(() => {
        if (marketStatus === 'open' && roster) {
            const interval = setInterval(() => {
                const deltaMe = Math.floor(Math.random() * 30) - 10;
                const deltaOpp = Math.floor(Math.random() * 30) - 10;
                setMyScore(s => s + deltaMe);
                setOppScore(s => s + deltaOpp);
            }, 1500);
            return () => clearInterval(interval);
        }
    }, [marketStatus, roster]);

    const handleLockLineup = () => {
        setMarketStatus('open');
        setRoster([
            { name: "BTC", role: "Striker", type: "Offense", change: 0.0, points: 0 },
            { name: "ETH", role: "Flex", type: "Offense", change: 0.0, points: 0 },
            { name: "DOGE", role: "Wildcard", type: "Offense", change: 0.0, points: 0 },
            { name: "USDT", role: "Shield", type: "Defense", change: 0.0, points: 0 },
            { name: "BTC-DOWN", role: "Safety", type: "Defense", change: 0.0, points: 0 },
        ]);
        showToast("Lineup Locked! Crypto Markets are Live...", "success");
    };

    const momentum = 50 + ((myScore - oppScore) / 50);

    return (
        <EmpireBox title="FANTASY ARENA" {...props} ref={ref}>
            <div className="h-full overflow-y-auto pb-20 animate-in fade-in duration-500 custom-scrollbar p-2">
                {!teamData ? (
                    <LeagueOnboarding onComplete={(name, div) => {
                        setTeamData({ name, division: div });
                        showToast(`Welcome to the ${div}, ${name}!`, "success");
                    }} />
                ) : (
                    <>
                        <div className="mb-4 flex justify-between items-end">
                            <div>
                                <h1 className="text-sm font-bold text-white">{teamData.name} <span className="text-slate-500 font-normal">vs.</span> Jules_Trader</h1>
                            </div>
                        </div>

                        {marketStatus === 'closed' ? (
                            <div className="flex flex-col gap-4">
                                <DraftRoom onLockLineup={handleLockLineup} />
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                <div className="relative overflow-hidden border border-orange-500/30 rounded-lg p-4 bg-slate-900/80">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
                                        <div className="h-full bg-gradient-to-r from-emerald-500 to-orange-500 transition-all duration-1000 ease-in-out" style={{ width: `${Math.max(20, Math.min(80, momentum))}%` }} />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-emerald-400 font-mono text-2xl font-bold">{myScore}</span>
                                        <span className="text-xs uppercase font-bold text-slate-500">LIVE</span>
                                        <span className="text-orange-400 font-mono text-2xl font-bold">{oppScore}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase">My Roster</h3>
                                    {roster && roster.map((player, i) => (
                                        <div key={i} className="flex justify-between items-center text-xs p-2 bg-slate-800/50 rounded">
                                            <span className="text-white">{player.name}</span>
                                            <span className="text-slate-400">{player.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </EmpireBox>
    );
});

export default FantasyFinanceBox;
