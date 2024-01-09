import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { type FormikProps, useFormik } from 'formik';
import { useSignIn } from '@hooks';
import { getError } from '@utils/error';
import { MIN_PASSWORD_LENGTH } from '../constants';
import { type SignInData } from '../types';

interface AudthData {
	login: string;
	password: string;
}
interface UseSignIn {
	isLoading: boolean;
	error: string;
	formik: FormikProps<SignInData>;
}

export const useSignInPage = (): UseSignIn => {
	const { t } = useTranslation();
	const { isLoading, error, signIn } = useSignIn();

	const validate = (values: AudthData): Record<string, string> => {
		const errors: Record<string, string> = {};

		if (values.password.length < MIN_PASSWORD_LENGTH) {
			errors.password = `${t('password')} < ${MIN_PASSWORD_LENGTH}`;
		}

		return errors;
	};

	const onSubmit = (data: SignInData): void => {
		signIn(data);
	};

	const formik: FormikProps<SignInData> = useFormik<SignInData>({
		initialValues: {
			login: '',
			password: '',
		},
		validate,
		onSubmit,
	});

	useEffect(() => {
		return () => {
			formik.resetForm();
		};
	}, []);

	return {
		isLoading,
		formik,
		error: getError(error),
	};
};
