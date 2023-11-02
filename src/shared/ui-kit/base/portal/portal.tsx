import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

const container = (window.document && document.body) || null;

export const Portal: FC<PropsWithChildren> = (props) => {
	const { children } = props;
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);

		return () => {
			setMounted(false);
		};
	}, []);

	return mounted ? createPortal(children, container) : null;
};
