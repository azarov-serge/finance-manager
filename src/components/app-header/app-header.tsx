import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import LogoIcon from '@assets/icons/logo.inline.svg';
import BurgerMenuIcon from '@assets/icons/burger-menu.inline.svg';
import { paths } from '@router/router';

import { Styled } from './app-header.styled';
import { useAppHeader } from './hooks/use-app-header';
import { menuItems } from './app-header.constants';
import type { AppHeaderProps } from './app-header.types';

export const AppHeader: React.FC<AppHeaderProps> = () => {
	const {
		isMenuOpenend,
		currentPath,
		title,
		handleMenuClick,
		handleMenuItemClick,
	} = useAppHeader();
	const { t } = useTranslation();

	return (
		<Styled.Wrapper>
			<Styled.TitleWrapper>
				<Link to={paths.home}>
					<LogoIcon width={32} height={32} />
				</Link>
				<Styled.HeaderTitle>{t(title)}</Styled.HeaderTitle>
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
