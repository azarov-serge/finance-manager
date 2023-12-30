import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Button } from '@ui-kit/buttons/button/button';
import { Title } from '@ui-kit/typography/title/title';
import { Text } from '@ui-kit/typography/text/text';
import { LinkButton } from '@ui-kit/buttons/link-button/link-button';
import LogoIcon from '@assets/icons/logo.inline.svg';

import { useSignIn } from './hooks/use-sign-in';
import { Styled } from './styled';

export const SignInPage: React.FC = () => {
	const { t } = useTranslation();
	const { isFetching, validate, handleSubmitted } = useSignIn();

	return (
		<Styled.Page>
			<Formik
				initialValues={{ login: '', password: '' }}
				validate={validate}
				onSubmit={handleSubmitted}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<Styled.Form onSubmit={handleSubmit}>
						<LogoIcon width={48} height={48} />
						<Title align="center">{`${t('signInTo')} FM`}</Title>

						<input
							name="login"
							required
							placeholder={t('login')}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.login}
						/>

						<Styled.Row>
							<input
								required
								type="password"
								name="password"
								placeholder={t('password')}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							<Text kind="danger" size="small">
								{errors.password &&
									touched.password &&
									errors.password}
							</Text>
						</Styled.Row>
						<Button
							type="submit"
							kind="primary"
							disabled={isFetching}
						>
							{isFetching ? t('sending') : t('signIn')}
						</Button>
					</Styled.Form>
				)}
			</Formik>

			{isFetching ? null : (
				<Styled.Form>
					<LinkButton kind="primary">{t('signUp')}</LinkButton>
				</Styled.Form>
			)}
		</Styled.Page>
	);
};
