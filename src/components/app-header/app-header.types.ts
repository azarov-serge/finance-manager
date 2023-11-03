import type { ThemeName } from '@emotion/react';
import type { PropsWithChildren, ReactElement, MouseEvent } from 'react';

export type AppHeaderProps = PropsWithChildren<{
	themeName: ThemeName;
	onThemeNameClick: (evt: MouseEvent<HTMLLIElement>) => void;
}>;
export interface MenuItem {
	path: string;
	name: string;
	icon: ReactElement;
}
