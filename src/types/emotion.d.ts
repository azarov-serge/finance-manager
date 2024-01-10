import '@emotion/react';

declare module '@emotion/react' {
	type Color = string;
	type FontFamily = string;

	type ThemeName = 'light' | 'dark';

	interface TextTheme {
		color: Color;
		fontFamily: FontFamily;
	}

	interface TitleTheme {
		color: Color;
		fontFamily: FontFamily;
		fontSize: FontFamily;
	}

	export interface Theme {
		defaultPadding: string;
		borderRadius: number;
		size: {
			mobileWidth: number;
			tabletWidth: number;
			desktopWidth: number;
		};
		colors: {
			primary: Color;
			secondary: Color;
			background: Color;
			surface: Color;
			danger: Color;
			border: Color;
			text: Color;
			input: Color;
			modal: Color;
		};
		typography: {
			text: TextTheme;
			title1: TitleTheme;
			title2: TitleTheme;
			title3: TitleTheme;
			title4: TitleTheme;
			title5: TitleTheme;
		};
		appHeader: {
			menuHeight: number;
			background: string;
			height: number;
		};
		appFooter: {
			height: number;
		};
		button: {
			primary: Color;
			secondary: Color;
			danger: Color;
			caption: {
				primary: Color;
				secondary: Color;
				danger: Color;
			};
		};
	}
}
