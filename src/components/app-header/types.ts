import type { PropsWithChildren, ReactElement } from 'react';

export type AppHeaderProps = PropsWithChildren<{ isAuth: boolean }>;
export interface MenuItem {
	path: string;
	name: string;
	icon: ReactElement;
}
