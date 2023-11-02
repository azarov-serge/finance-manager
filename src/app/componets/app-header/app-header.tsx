import React from 'react';
import { useTranslation } from 'react-i18next';

import {
	THEME_NAMES,
	themeNameToTitle,
	themeNameToIcon,
} from '@constants/themes';
import { LANGUAGES, languageToTitle } from '@constants/languages';
import LogoIcon from '@assets/logo.inline.svg';
import BurgerMenuIcon from '@assets/burger-menu.inline.svg';

import { Styled } from './app-header.styled';
import { useAppHeader } from './hooks/use-app-header';
import { menuItems } from './app-header.constants';
import type { AppHeaderProps } from './app-header.types';

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
	const { themeName, onThemeClick } = props;
	const {
		isMenuOpenend,
		currentPath,
		language,
		handleMenuClick,
		handleToogleLanguageClick,
	} = useAppHeader();
	const { t } = useTranslation();

	return (
		<Styled.Wrapper>
			<Styled.TitleWrapper>
				<LogoIcon width={32} height={32} />
				<Styled.HeaderTitle symantic level={1} align="center">
					Title
				</Styled.HeaderTitle>
			</Styled.TitleWrapper>
			<Styled.ControlsWrapper>
				<Styled.MenuWrapper isMenuOpenend={isMenuOpenend}>
					<Styled.Menu>
						{menuItems.map(({ path, name, icon }) => {
							const isActive =
								currentPath.replace('/', '') ===
								path.replace('/', '');

							return (
								<Styled.MenuItem key={path} isActive={isActive}>
									<Styled.MenuLink href={path}>
										{icon}
										<span>{t(name)}</span>
									</Styled.MenuLink>
								</Styled.MenuItem>
							);
						})}
					</Styled.Menu>

					<Styled.Menu mt="auto">
						<Styled.MenuItem align="space-between">
							<span>{t('theme')}</span>
							<Styled.ThemePicker
								menu={
									<Styled.Menu key={'theme'} height="auto">
										{THEME_NAMES.map((name) => {
											return (
												<Styled.MenuItem
													key={`theme-${name}`}
													isActive={
														name === themeName
													}
													data-theme={name}
													onClick={onThemeClick}
												>
													{themeNameToIcon[name]}
													<Styled.ThemeName>
														{themeNameToTitle[name]}
													</Styled.ThemeName>
												</Styled.MenuItem>
											);
										})}
									</Styled.Menu>
								}
							>
								<span>{themeNameToIcon[themeName]}</span>
							</Styled.ThemePicker>
						</Styled.MenuItem>
						<Styled.MenuItem align="space-between">
							<span>{t('language')}</span>
							<Styled.LanguagePicker
								menu={
									<Styled.Menu key={'language'} height="auto">
										{LANGUAGES.map((lang) => {
											return (
												<Styled.MenuItem
													key={`language-${lang}`}
													isActive={lang === language}
													data-lang={lang}
													onClick={
														handleToogleLanguageClick
													}
												>
													{languageToTitle[lang]}
												</Styled.MenuItem>
											);
										})}
									</Styled.Menu>
								}
							>
								{language}
							</Styled.LanguagePicker>
						</Styled.MenuItem>
					</Styled.Menu>
				</Styled.MenuWrapper>

				<Styled.BurgerMenuButton
					kind="ghost"
					isMenuOpenend={isMenuOpenend}
					onClick={handleMenuClick}
				>
					<BurgerMenuIcon width="16px" height="16px" />
				</Styled.BurgerMenuButton>
			</Styled.ControlsWrapper>
		</Styled.Wrapper>
	);
};
