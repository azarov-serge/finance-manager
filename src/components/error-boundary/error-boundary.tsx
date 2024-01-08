import React, { type ErrorInfo, type ReactNode } from 'react';

interface Props {
	children?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render(): ReactNode {
		if (!this.state.hasError) {
			return this.props.children;
		}
		return <h1>Sorry.. there was an error</h1>;
	}
}

export default ErrorBoundary;
