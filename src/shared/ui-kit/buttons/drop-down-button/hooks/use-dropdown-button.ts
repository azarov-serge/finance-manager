import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent, RefObject } from 'react';

export const useDropdownButton = (): {
	isOpened: boolean;
	toggle: (evt: MouseEvent) => void;
	buttonWrapperRef: RefObject<HTMLDivElement>;
	contentWrapperRef: RefObject<HTMLDivElement>;
	contentStyle: Required<Pick<CSSProperties, 'top' | 'left'>>;
} => {
	const [isOpened, setIsOpened] = useState(false);
	const buttonWrapperRef = useRef<HTMLDivElement>(null);
	const contentWrapperRef = useRef<HTMLDivElement>(null);

	const [contentStyle, setContentStyle] = useState<
		Required<Pick<CSSProperties, 'top' | 'left'>>
	>({
		top: 0,
		left: 0,
	});

	useEffect(() => {
		if (
			buttonWrapperRef.current !== null &&
			contentWrapperRef.current !== null
		) {
			const {
				top: buttonWrapperTop = 0,
				bottom: buttonWrapperBottom = 0,
				left: buttonWrapperLeft = 0,
				right: buttonWrapperRight = 0,
			} = buttonWrapperRef.current.getBoundingClientRect();

			const {
				width: contentWrapperWidth = 0,
				height: contentWrapperHeight = 0,
			} = contentWrapperRef.current.getBoundingClientRect();

			let top = buttonWrapperBottom + 2;
			let left = buttonWrapperLeft;

			if (
				buttonWrapperLeft + contentWrapperWidth >
				document.body.offsetWidth
			) {
				left = buttonWrapperRight - contentWrapperWidth;
			}

			if (
				buttonWrapperBottom + contentWrapperHeight >
				document.body.offsetHeight
			) {
				top = buttonWrapperTop - contentWrapperHeight - 2;
			}

			setContentStyle({
				top,
				left,
			});
		}
	}, [buttonWrapperRef.current, contentWrapperRef.current, isOpened]);

	const toggle = (evt: MouseEvent): void => {
		evt.stopPropagation();
		if (isOpened) {
			setIsOpened(!isOpened);
		} else if (!isOpened) {
			setIsOpened(!isOpened);
		}
	};

	return {
		isOpened,
		toggle,
		buttonWrapperRef,
		contentWrapperRef,
		contentStyle,
	};
};
