import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LogoIcon from '@assets/icons/logo.inline.svg';
import BurgerMenuIcon from '@assets/icons/burger-menu.inline.svg';
import SignOutIcon from '@assets/icons/sign-out.inline.svg';
import { Button } from '@ui-kit/buttons/button/button';
import { useSignOut } from '@hooks';
import { paths } from '@router/router';
import {
	THEME_NAMES,
	themeNameToTitle,
	themeNameToIcon,
} from '@constants/themes';
import { LANGUAGES, languageToTitle } from '@constants/languages';

import { Styled } from './styled';
import { useAppHeader } from './hooks/use-app-header';
import { menuItems } from './constants';
import type { AppHeaderProps } from './types';

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
	const {
		isMenuOpenend,
		currentPath,
		title,
		handleMenuClick,
		handleMenuItemClick,
		themeName,
		language,
		handleThemeClick,
		handleToogleLanguageClick,
	} = useAppHeader(props);
	const { t } = useTranslation();
	const { signOut } = useSignOut();

	return (
		<Styled.Wrapper>
			<Styled.TitleWrapper>
				<Link to={paths.home}>
					<LogoIcon width={32} height={32} />
				</Link>
				<Styled.HeaderTitle level={1} symantic>
					{t(title)}
				</Styled.HeaderTitle>
			</Styled.TitleWrapper>
			<Styled.ControlsWrapper>
				<Styled.MenuWrapper isMenuOpenend={isMenuOpenend}>
					{props.isAuth && (
						<Styled.Menu>
							{menuItems.map(({ path, name, icon }) => {
								const isActive =
									currentPath.replace('/', '') ===
									path.replace('/', '');

								return (
									<Styled.MenuItem
										key={path}
										isActive={isActive}
									>
										<Styled.MenuLink
											to={path}
											onClick={handleMenuItemClick}
										>
											{icon}
											<span>{t(name)}</span>
										</Styled.MenuLink>
									</Styled.MenuItem>
								);
							})}
							<Styled.MenuItem>
								<Button
									onClick={() => {
										signOut();
									}}
								>
									<SignOutIcon
										width={16}
										height={16}
										style={{ marginRight: '4px' }}
									/>
									{t('signOut')}
								</Button>
							</Styled.MenuItem>
						</Styled.Menu>
					)}

					<Styled.Menu isTop={!props.isAuth} height="auto">
						<Styled.MenuItem
							align="space-between"
							width="100%"
							isTop={!props.isAuth}
						>
							<Styled.MenuLabel isTop={!props.isAuth}>
								{t('theme')}
							</Styled.MenuLabel>
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
													onClick={handleThemeClick}
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
								<Styled.Label>
									{themeNameToIcon[themeName]}
									<Styled.ThemeName>
										{themeNameToTitle[themeName]}
									</Styled.ThemeName>
								</Styled.Label>
							</Styled.ThemePicker>
						</Styled.MenuItem>
						<Styled.MenuItem
							align="space-between"
							width="100%"
							isTop={!props.isAuth}
						>
							<Styled.MenuLabel isTop={!props.isAuth}>
								{t('language')}
							</Styled.MenuLabel>
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
								<Styled.Label>
									{
										languageToTitle[
											language as (typeof LANGUAGES)[number]
										]
									}
								</Styled.Label>
							</Styled.LanguagePicker>
						</Styled.MenuItem>
					</Styled.Menu>
				</Styled.MenuWrapper>

				<Styled.BurgerMenuButton
					isMenuOpenend={isMenuOpenend}
					onClick={handleMenuClick}
				>
					<BurgerMenuIcon width="16px" height="16px" />
				</Styled.BurgerMenuButton>
			</Styled.ControlsWrapper>
		</Styled.Wrapper>
	);
};
