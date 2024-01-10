import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import { createPortal } from 'react-dom';

const defaultContainer = document.getElementById('portal') as HTMLElement;

export const Portal: FC<PropsWithChildren<{ id?: string }>> = (props) => {
	const { children, id } = props;
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);

		return () => {
			setMounted(false);
		};
	}, []);

	const container = id
		? (document.getElementById(id) as HTMLElement)
		: defaultContainer;

	return mounted ? createPortal(children, container) : null;
};
