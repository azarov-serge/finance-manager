import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { type FormikProps, useFormik } from 'formik';
import { useSignUp } from '@hooks';
import { getError } from '@utils/error';

import { type SignUpData } from '../types';
import { MIN_PASSWORD_LENGTH } from '../constants';

interface AudthData {
	login: string;
	password: string;
}
interface UseSignUp {
	isLoading: boolean;
	error: string;
	formik: FormikProps<SignUpData>;
}

export const useSignUpPage = (): UseSignUp => {
	const { t } = useTranslation();
	const { isLoading, error, signUp } = useSignUp();

	const validate = (values: AudthData): Record<string, string> => {
		const errors: Record<string, string> = {};

		if (values.password.length < MIN_PASSWORD_LENGTH) {
			errors.password = `${t('password')} < ${MIN_PASSWORD_LENGTH}`;
		}

		return errors;
	};

	const onSubmit = (data: SignUpData): void => {
		signUp(data);
	};

	const formik: FormikProps<SignUpData> = useFormik<SignUpData>({
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
