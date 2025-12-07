import React, { useState, useEffect } from 'react';

const GameArena = () => {
    const [selectedFighter, setSelectedFighter] = useState(null);
    const [gameState, setGameState] = useState('IDLE'); // IDLE, FIGHTING, RESULT
    const [timer, setTimer] = useState(30);
    const [playerScore, setPlayerScore] = useState(1000);

    // Mock fighters
    const fighters = [
        { id: 'btc', name: 'Bitcoin Behemoth', color: 'from-orange-500 to-yellow-500', icon: '₿' },
        { id: 'eth', name: 'Ethereum Ether', color: 'from-blue-500 to-indigo-500', icon: 'Ξ' },
        { id: 'sol', name: 'Solana Speedster', color: 'from-purple-500 to-pink-500', icon: '◎' },
        { id: 'doge', name: 'Doge Destroyer', color: 'from-yellow-400 to-orange-400', icon: 'Ð' }
    ];

    const [battleData, setBattleData] = useState({ p1: 50, p2: 50 });

    const startGame = (fighter) => {
        setSelectedFighter(fighter);
        setGameState('FIGHTING');
        setTimer(15);
    };

    useEffect(() => {
        if (gameState === 'FIGHTING') {
            const interval = setInterval(() => {
                setTimer(prev => {
                    if (prev <= 1) {
                        setGameState('RESULT');
                        clearInterval(interval);
                        // Mock result logic
                        const win = Math.random() > 0.5;
                        if (win) setPlayerScore(s => s + 200);
                        else setPlayerScore(s => s - 100);
                        return 0;
                    }
                    // Randomize battle progress
                    setBattleData({
                        p1: Math.min(100, Math.max(0, 50 + (Math.random() * 40 - 20))),
                        p2: Math.min(100, Math.max(0, 50 + (Math.random() * 40 - 20)))
                    })
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [gameState]);

    const resetGame = () => {
        setGameState('IDLE');
        setSelectedFighter(null);
    };

    return (
        <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
            {/* Header / Stats */}
            <div className="flex justify-between items-center bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">
                <div>
                    <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 italic tracking-tighter">
                        CRYPTO COLOSSEUM
                    </h2>
                    <p className="text-gray-400 font-mono text-sm">PVP ARENA // SEASON 1</p>
                </div>
                <div className="text-right">
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">Player Balance</div>
                    <div className="text-2xl font-mono font-bold text-emerald-400 shadow-glow">${playerScore.toLocaleString()}</div>
                </div>
            </div>

            {/* Main Arena Area */}
            <div className="min-h-[500px] relative bg-slate-900/50 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center p-8">
                {/* Background Grid */}
                <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

                {gameState === 'IDLE' && (
                    <div className="w-full text-center z-10">
                        <h3 className="text-2xl font-bold text-white mb-8">CHOOSE YOUR CHAMPION</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {fighters.map(fighter => (
                                <button
                                    key={fighter.id}
                                    onClick={() => startGame(fighter)}
                                    className={`relative group overflow-hidden rounded-xl p-1 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${fighter.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                    <div className="relative bg-slate-900/90 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full flex flex-col items-center gap-4">
                                        <div className={`text-6xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>{fighter.icon}</div>
                                        <div className="font-bold text-lg tracking-wider">{fighter.name}</div>
                                        <div className="text-xs font-mono text-gray-400 bg-black/50 px-3 py-1 rounded-full">
                                            ODDS: {(Math.random() * 2 + 1).toFixed(2)}x
                                        </div>
                                    </div>
                                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all`}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {gameState === 'FIGHTING' && selectedFighter && (
                    <div className="w-full flex flex-col items-center gap-8 z-10 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-red-500/5 animate-pulse rounded-3xl pointer-events-none"></div>

                        <div className="text-6xl font-black text-white animate-bounce shadow-xl font-mono">
                            00:{timer.toString().padStart(2, '0')}
                        </div>

                        <div className="flex items-center justify-between w-full max-w-4xl px-12">
                            {/* Player Fighter */}
                            <div className="text-center transform transition-all duration-500" style={{ transform: `scale(${battleData.p1 > 50 ? 1.1 : 0.9})` }}>
                                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${selectedFighter.color} flex items-center justify-center text-6xl shadow-[0_0_50px_currentColor] mb-4`}>
                                    {selectedFighter.icon}
                                </div>
                                <div className="font-bold text-xl">{selectedFighter.name}</div>
                                <div className="h-4 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                                    <div className={`h-full bg-gradient-to-r ${selectedFighter.color}`} style={{ width: `${battleData.p1}%` }}></div>
                                </div>
                            </div>

                            <div className="text-4xl font-black text-red-500 italic">VS</div>

                            {/* Opponent (Random) */}
                            <div className="text-center transform transition-all duration-500" style={{ transform: `scale(${battleData.p2 > 50 ? 1.1 : 0.9})` }}>
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-6xl shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-4">
                                    ?
                                </div>
                                <div className="font-bold text-xl text-gray-400">Market Forces</div>
                                <div className="h-4 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-gray-500" style={{ width: `${battleData.p2}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {gameState === 'RESULT' && (
                    <div className="text-center z-10 animate-fade-in-up">
                        <h2 className="text-5xl font-black text-white mb-4">
                            {battleData.p1 > battleData.p2 ? 'VICTORY!' : 'DEFEAT'}
                        </h2>
                        <div className={`text-2xl font-mono mb-8 ${battleData.p1 > battleData.p2 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {battleData.p1 > battleData.p2 ? '+ $200.00' : '- $100.00'}
                        </div>
                        <button
                            onClick={resetGame}
                            className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        >
                            PLAY AGAIN
                        </button>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* Mini Leaderboard or Chat could go here */}
                <div className="col-span-3 bg-black/20 rounded-xl p-4 border border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
                    <span>LIVE FEED: User "CryptoKing" just won 500 DOGE</span>
                    <span>ACTIVE PLAYERS: 1,402</span>
                </div>
            </div>
        </div>
    );
};

export default GameArena;
