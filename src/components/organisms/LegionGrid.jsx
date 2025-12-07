import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { StrategyParametersBox, RiskManagementBox, BotControlBox } from './Gemini_Strategies';
import { LiveDecisionBox } from './wired/LiveDecisionBox';
import { DbStatsBox } from './wired/DbStatsBox';
import FantasyFinanceBox from './FantasyFinanceBox';

// Import RGL styles if not globally imported
// Assuming user might need these injected or they are in index.css. 
// We will inject a style tag just in case or rely on project css.
// Ideally, we import them:
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const LegionGrid = () => {
    // Initial Layout Definition
    // 12 Column Grid
    const initialLayouts = {
        lg: [
            { i: 'control', x: 0, y: 0, w: 3, h: 4 },
            { i: 'decision', x: 3, y: 0, w: 3, h: 4 },
            { i: 'stats', x: 6, y: 0, w: 3, h: 2 },
            { i: 'risk', x: 9, y: 0, w: 3, h: 6 },
            { i: 'strat', x: 0, y: 4, w: 6, h: 6 },
            { i: 'fantasy', x: 6, y: 4, w: 6, h: 8 },
        ],
        md: [
            { i: 'control', x: 0, y: 0, w: 6, h: 4 },
            { i: 'decision', x: 6, y: 0, w: 6, h: 4 },
            { i: 'stats', x: 0, y: 4, w: 6, h: 2 },
            { i: 'risk', x: 6, y: 4, w: 6, h: 6 },
            { i: 'strat', x: 0, y: 10, w: 12, h: 6 },
            { i: 'fantasy', x: 0, y: 16, w: 12, h: 8 },
        ]
    };

    const [layouts, setLayouts] = useState(initialLayouts);

    const onLayoutChange = (currentLayout, allLayouts) => {
        setLayouts(allLayouts);
        // Save to local storage or DB in real app
    };

    return (
        <div className="w-full mb-8">
            <h2 className="text-xs font-bold text-emerald-500/50 uppercase tracking-[0.2em] mb-4 ml-1">
                {'>'} Legion Vanguard [Alpha Batch]
            </h2>
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={30}
                margin={[16, 16]}
                isDraggable={true}
                isResizable={true}
                onLayoutChange={onLayoutChange}
                draggableCancel=".no-drag" // Add class to inputs if needed
            >
                <div key="control">
                    <BotControlBox className="h-full w-full" />
                </div>
                <div key="decision">
                    <LiveDecisionBox className="h-full w-full" />
                </div>
                <div key="stats">
                    <DbStatsBox className="h-full w-full" />
                </div>
                <div key="risk">
                    <RiskManagementBox className="h-full w-full" />
                </div>
                <div key="strat">
                    <StrategyParametersBox className="h-full w-full" />
                </div>
                <div key="fantasy">
                    <FantasyFinanceBox className="h-full w-full" />
                </div>
            </ResponsiveGridLayout>
        </div>
    );
};

export default LegionGrid;
