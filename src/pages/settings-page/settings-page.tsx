import React from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';

import { Page } from '@ui-kit/page/page';
import { Title } from '@ui-kit/typography/title/title';

import {
	THEME_NAMES,
	themeNameToTitle,
	themeNameToIcon,
} from '@constants/themes';
import { LANGUAGES, languageToTitle } from '@constants/languages';
import { useSettingPage } from './hooks/use-settings-page';
import { Styled } from './settings-page.styled';

export const SettingsPage: React.FC = observer(() => {
	const { t } = useTranslation();
	const { themeName, language, handleThemeClick, handleToogleLanguageClick } =
		useSettingPage();

	return (
		<Page>
			<Title level={1} symantic>
				{t('settings')}
			</Title>
			<Styled.Menu mt="auto">
				<Styled.MenuItem>
					<Styled.MenuLabel>{t('theme')}</Styled.MenuLabel>
					<Styled.ThemePicker
						menu={
							<Styled.Menu key={'theme'} height="auto">
								{THEME_NAMES.map((name) => {
									return (
										<Styled.MenuItem
											key={`theme-${name}`}
											isActive={name === themeName}
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
				<Styled.MenuItem>
					<Styled.MenuLabel>{t('language')}</Styled.MenuLabel>
					<Styled.LanguagePicker
						menu={
							<Styled.Menu key={'language'} height="auto">
								{LANGUAGES.map((lang) => {
									return (
										<Styled.MenuItem
											key={`language-${lang}`}
											isActive={lang === language}
											data-lang={lang}
											onClick={handleToogleLanguageClick}
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
		</Page>
	);
});
