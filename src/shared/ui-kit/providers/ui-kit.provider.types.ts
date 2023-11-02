import type { PropsWithChildren } from 'react';
import type { Theme } from '@emotion/react';

export interface UiKitContextProps {
	theme: Theme;
}

export type UiKitProviderProps = PropsWithChildren<UiKitContextProps>;
