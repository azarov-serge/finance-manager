import { useContext } from 'react';

import { MobXProviderContext } from 'mobx-react';
import type { store } from '../index';

export const useStores = (): typeof store => {
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	return useContext(MobXProviderContext) as typeof store;
};
