import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '@ui-kit/buttons/button/button';

import { Styled } from './styled';

export const SignUpPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Styled.Page>
			<Formik
				initialValues={{ login: '', password: '' }}
				validate={(values) => {
					const errors: Record<string, string> = {};

					if (!values.login) {
						errors.login = 'Required';
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
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
						<input
							name="login"
							required
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.login}
						/>
						{errors.login}
						<input
							required
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password && errors.password}
						<Button
							type="submit"
							kind="primary"
							disabled={isSubmitting}
						>
							Submit
						</Button>
					</Styled.Form>
				)}
			</Formik>
		</Styled.Page>
	);
};
