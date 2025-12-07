import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-6 backdrop-blur-md bg-red-900/20 border border-red-500/30 rounded-xl text-red-200 w-full h-[300px] flex flex-col items-center justify-center font-mono">
                    <div className="text-xl font-bold mb-2">⚠ SYSTEM FAILURE</div>
                    <div className="text-xs max-w-sm text-center opacity-80">
                        {this.state.error?.toString()}
                    </div>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="mt-4 px-4 py-1 bg-red-500/20 hover:bg-red-500/40 rounded border border-red-500/50 text-xs transition-colors"
                    >
                        ATTEMPT REBOOT
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
