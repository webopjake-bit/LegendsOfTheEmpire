import React from 'react';
import ServerStatus from '../organisms/ServerStatus';
import MarketSentinel from '../organisms/MarketSentinel';
import DataStream from '../organisms/DataStream';
import TradeHistory from '../organisms/TradeHistory';
import LiveChart from '../organisms/LiveChart';
import ErrorBoundary from '../atoms/ErrorBoundary';
import LegionGrid from '../organisms/LegionGrid';

const CommandCenter = () => {
    return (
        <div className="flex flex-col gap-6 w-full animate-fade-in pb-20">

            {/* --- SECTOR 1: THE LEGION GRID --- */}
            {/* Draggable, Resizable, Alive */}
            <LegionGrid />

            {/* --- SECTOR 2: THEATER OF WAR (Charts & Sentinel) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
                <div className="lg:col-span-3 min-h-[500px] border border-white/5 rounded-lg bg-black/20 overflow-hidden">
                    <ErrorBoundary>
                        <LiveChart />
                    </ErrorBoundary>
                </div>
                <div className="flex flex-col gap-4">
                    <MarketSentinel />
                    <ServerStatus />
                </div>
            </div>

            {/* --- SECTOR 3: ARCHIVES & STREAMS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-96">
                    <TradeHistory />
                </div>
                <div className="h-96">
                    <DataStream />
                </div>
            </div>
        </div>
    );
};

export default CommandCenter;
