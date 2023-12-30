import { store } from '@store';
import { useTranslation } from 'react-i18next';

import { type Status } from '@store/core/fetch-resource';
import { useCallback, useEffect } from 'react';
import { MIN_PASSWORD_LENGTH } from '../constants';
import { useNavigate } from 'react-router-dom';

interface AudthData {
	login: string;
	password: string;
}
interface UseSignIn extends Status {
	validate: (authData: AudthData) => void;
	handleSubmitted: (authData: AudthData) => void;
}

export const useSignIn = (): UseSignIn => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { authStore } = store;

	useEffect(() => {
		if (authStore.isAuth) {
			navigate('/');
		}
	}, [authStore.isAuth]);

	const validate = useCallback(
		(values: AudthData): Record<string, string> => {
			const errors: Record<string, string> = {};

			if (values.password.length < MIN_PASSWORD_LENGTH) {
				errors.password = `${t('password')} < ${MIN_PASSWORD_LENGTH}`;
			}

			return errors;
		},
		[],
	);

	const handleSubmitted = useCallback(
		({ login, password }: { login: string; password: string }) => {
			authStore.signIn(login, password);
		},
		[],
	);

	return { ...authStore.signInStatus, validate, handleSubmitted };
};
