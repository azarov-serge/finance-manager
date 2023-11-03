import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@ui-kit/page/page';
import { Title } from '@ui-kit/typography/title/title';

export const StatsPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Page>
			<Title level={1} symantic>
				{t(`stats`)}
			</Title>
			{/* <Styled.Menu mt="auto">
				<Styled.MenuItem align="space-between">
					<span>{t('theme')}</span>
					<Styled.ThemePicker
						menu={
							<Styled.Menu key={'theme'} height="auto">
								{THEME_NAMES.map((name) => {
									return (
										<Styled.MenuItem
											key={`theme-${name}`}
											isActive={name === themeName}
											data-theme={name}
											onClick={onThemeNameClick}
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
											onClick={handleToogleLanguageClick}
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
			</Styled.Menu> */}
		</Page>
	);
};
