import RealTimePnL from './components/organisms/RealTimePnL';
import BotControl from './components/organisms/BotControl';
import TradeEntry from './components/organisms/TradeEntry';
import StrategyParameters from './components/organisms/StrategyParameters';
import OrderEntry from './components/organisms/OrderEntry';
import Strategy_Alpha_Box from './components/empire-dropbox/organisms/Strategy_Alpha_Box';
import OrderEntry_Box from './components/empire-dropbox/organisms/OrderEntry_Box';
import Challenge_Arena from './components/empire-dropbox/organisms/Challenge_Arena';
import FantasyFinanceBox from './components/organisms/FantasyFinanceBox';
import GenericTile from './components/organisms/GenericTile';
import GrokTerminal from './components/organisms/GrokTerminal';
import Grid2000 from './components/organisms/Grid2000';
import BacktestStrategyParameters from './components/organisms/BacktestStrategyParameters';
import BacktestPerformance from './components/organisms/BacktestPerformance';
import BacktestKeyMetrics from './components/organisms/BacktestKeyMetrics';
import BacktestAllocation from './components/organisms/BacktestAllocation';
import BacktestRecentTrades from './components/organisms/BacktestRecentTrades';

export const masterSquares = {
  strategyAlpha: {
    component: Strategy_Alpha_Box,
    metadata: {
      category: 'lab',
      shape: 'rectangle',
      minSize: [4, 6],
      description: 'Alpha Strategy Configuration Unit'
    }
  },
  entryBox: {
    component: OrderEntry_Box,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [3, 5],
      description: 'Manual Trade Execution Unit'
    }
  },
  fantasy: {
    component: FantasyFinanceBox,
    metadata: {
      category: 'game',
      shape: 'rectangle',
      minSize: [6, 6], // Needs space for the draft room
      description: 'Crypto Blitz League Arena'
    }
  },
  grid2000: {
    component: Grid2000,
    metadata: {
      category: 'data',
      shape: 'rectangle',
      minSize: [12, 6], // Full width, tall
      description: 'Visual Matrix of 2000 Active Units'
    }
  },
  terminal: {
    component: GrokTerminal,
    metadata: {
      category: 'social', // or 'utility'
      shape: 'rectangle',
      minSize: [3, 4],
      description: 'Grok AI Terminal Interface'
    }
  },
  pnl: {
    component: RealTimePnL,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [2, 2],
      description: 'Live Equity Curve and Total PnL'
    }
  },
  control: {
    component: BotControl,
    metadata: {
      category: 'control',
      shape: 'rectangle',
      minSize: [2, 2],
      description: 'Swarm Activation and Halt Controls'
    }
  },
  trade: {
    component: TradeEntry,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      description: 'Manual Trade Execution Panel'
    }
  },
  strategyParams: {
    component: StrategyParameters,
    metadata: {
      category: 'lab',
      shape: 'rectangle',
      minSize: [3, 4],
      description: 'Strategy configuration sliders (BB/RSI/AI)'
    }
  },
  orderEntry: {
    component: OrderEntry,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [3, 4],
      description: 'Your Decision panel for live orders'
    }
  },
  leaderboard: {
    component: (props) => <GenericTile title="LEADERBOARD" {...props} />,
    metadata: { category: 'social', shape: 'rectangle' }
  },
  backtest: {
    component: (props) => <GenericTile title="BACKTEST LAB" {...props} />,
    metadata: { category: 'lab', shape: 'rectangle' }
  },
  logs: {
    component: (props) => <GenericTile title="DATA LOGS" {...props} />,
    metadata: { category: 'data', shape: 'rectangle' }
  },
  community: {
    component: (props) => <GenericTile title="COMMUNITY HUB" {...props} />,
    metadata: { category: 'social', shape: 'rectangle' }
  },
  backtestParams: {
    component: BacktestStrategyParameters,
    metadata: {
      category: 'lab',
      shape: 'rectangle',
      minSize: [4, 8],
      description: 'Backtest strategy parameter panel'
    }
  },
  backtestPerformance: {
    component: BacktestPerformance,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [5, 8],
      description: 'Historical PnL performance chart for backtests'
    }
  },
  backtestMetrics: {
    component: BacktestKeyMetrics,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [3, 6],
      description: 'Key performance metrics for the simulation'
    }
  },
  backtestAllocation: {
    component: BacktestAllocation,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [6, 4],
      description: 'End-of-period asset allocation breakdown'
    }
  },
  backtestRecentTrades: {
    component: BacktestRecentTrades,
    metadata: {
      category: 'finance',
      shape: 'rectangle',
      minSize: [6, 4],
      description: 'Recent simulated trades feed'
    }
  }
};
