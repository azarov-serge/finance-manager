import React from 'react';
import { Global, useTheme } from '@emotion/react';

export const GlobalStyle: React.FC = () => {
	const theme = useTheme();

	return (
		<Global
			styles={`
				html,
				body {
					margin: 0;
					padding: 0;
					font-family: ${theme.typography.text.fontFamily};
					font-size: 12px;
					line-height: 14px;
					color: ${theme.typography.text.color};
					background: ${theme.colors.background};
				}

				a {
					cursor: pointer;
					text-decoration: none;
					color: ${theme.colors.primary};
				}

				button {
					font-size: 12px;

					cursor: pointer;
					padding: 4px 8px;
					background: ${theme.colors.secondary};
					border-radius: ${theme.borderRadius}px;
				}

				input {
					height: 30px;
					padding: 4px 8px;
					background: ${theme.colors.input};
					border: 1px solid ${theme.colors.border};
					border-radius: ${theme.borderRadius}px;
					color: ${theme.colors.text};
				}

				h1,
				h2,
				h3,
				h4,
				h5 {
					margin-block-start: 1em;
					margin-block-end: 1em;
					margin-inline-start: 0px;
					margin-inline-end: 0px;
					line-height: 1.2;
				}

				h1 {
					font-family: ${theme.typography.title1.fontFamily};
					font-size: ${theme.typography.title1.fontSize};
					font-weight: 700;
					color: ${theme.typography.title1.color};
				}

				h2 {
					font-family: ${theme.typography.title2.fontFamily};
					font-size: ${theme.typography.title2.fontSize};
					font-weight: 700;
					color: ${theme.typography.title2.color};
				}

				h3 {
					font-family: ${theme.typography.title3.fontFamily};
					font-size: ${theme.typography.title3.fontSize};
					font-weight: 700;
					color: ${theme.typography.title3.color};
				}

				h4 {
					font-family: ${theme.typography.title4.fontFamily};
					font-size: ${theme.typography.title4.fontSize};
					font-weight: 700;
					color: ${theme.typography.title4.color};
				}

				h5 {
					font-family: ${theme.typography.title5.fontFamily};
					font-size: ${theme.typography.title5.fontSize};
					font-weight: 700;
					color: ${theme.typography.title5.color};
				}

				p {
					line-height: 1.2;
				}

				* {
					box-sizing: border-box;
					font-family: ${theme.typography.text.fontFamily};
				}
			`}
		/>
	);
};
