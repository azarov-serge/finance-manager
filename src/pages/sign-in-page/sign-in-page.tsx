import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from '@ui-kit/buttons/button/button';
import { Title } from '@ui-kit/typography/title/title';
import { Text } from '@ui-kit/typography/text/text';
import { LinkButton } from '@ui-kit/buttons/link-button/link-button';
import LogoIcon from '@assets/icons/logo.inline.svg';
import { authPaths } from '@router/router';

import { useSignInPage } from './hooks/use-sign-in-page';
import { Styled } from './styled';

export const SignInPage: React.FC = () => {
	const { t } = useTranslation();
	const { isLoading, formik, error } = useSignInPage();
	const navigate = useNavigate();

	return (
		<Styled.Page>
			<Styled.Form onSubmit={formik.handleSubmit}>
				<LogoIcon width={48} height={48} />
				<Title align="center">{`${t('signInTo')} FM`}</Title>

				<input
					name="login"
					required
					placeholder={t('login')}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.login}
					autoComplete="off"
				/>

				<Styled.Row>
					<input
						required
						type="password"
						name="password"
						placeholder={t('password')}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						autoComplete="off"
					/>
					<Text kind="danger" size="small">
						{formik.errors.password &&
							formik.touched.password &&
							formik.errors.password}
					</Text>
				</Styled.Row>
				<Button type="submit" kind="primary" disabled={isLoading}>
					{isLoading ? t('sending') : t('signIn')}
				</Button>
			</Styled.Form>

			{isLoading ? null : (
				<Styled.Form>
					<LinkButton
						kind="primary"
						onClick={() => {
							navigate(authPaths.signUp);
						}}
					>
						{t('signUp')}
					</LinkButton>
				</Styled.Form>
			)}
			<Text kind="danger">{error}</Text>
		</Styled.Page>
	);
};
