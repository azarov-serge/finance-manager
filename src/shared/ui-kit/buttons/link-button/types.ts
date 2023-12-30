import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum ButtonKind {
	primary = 'primary',
	secondary = 'secondary',
	ghost = 'ghost',
	danger = 'danger',
}

export interface LinkButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> {
	/** тип кнопки */
	kind?: keyof typeof ButtonKind;

	/**
	 * если true компонент ведет себя как block и занимает всю ширину контейнера
	 * если false ведет себя как inline
	 */
	wide?: boolean;

	/** внешний отступ снизу */
	mb?: number;
}

export type StyledLinkButtonProps = Omit<LinkButtonProps, 'children'>;
