import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in MONETA GLOBAL FOUNDATION application:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-[#FFFFFF] flex items-center justify-center p-6 select-none font-sans">
          <div className="max-w-md w-full bg-[#15171A] border border-[#202328] rounded-2xl p-8 shadow-2xl text-center space-y-6">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#202328] border border-[#A7ADB5]/30 flex items-center justify-center text-[#FFFFFF]">
              <AlertCircle className="w-6 h-6 text-[#A7ADB5]" />
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A7ADB5] block mb-1">
                SYSTEM RECOVERY
              </span>
              <h2 className="text-xl font-bold font-display text-white mb-2">
                Application Interruption
              </h2>
              <p className="text-xs text-[#A7ADB5] leading-relaxed">
                An unexpected condition was encountered. The Foundation security barrier prevented cascading system errors.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-[#050505] p-3 rounded-lg border border-[#202328] text-left overflow-x-auto text-[11px] font-mono text-[#A7ADB5]">
                {this.state.error.message || 'Unknown runtime condition'}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#202328] hover:bg-[#15171A] text-[#FFFFFF] text-xs font-semibold tracking-wider border border-[#202328] hover:border-[#A7ADB5] transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>

              <button
                type="button"
                onClick={this.handleReset}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#A7ADB5] text-[#050505] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Return Home</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
