declare module '*.svg' {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}

// this file is conditionally added/removed to next-env.d.ts
// if the static image import handling is enabled

interface StaticImageData {
	src: string;
	height: number;
	width: number;
	placeholder?: string;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.jpeg' {
	const content: string;
	export default content;
}

declare module '*.gif' {
	const content: string;
	export default content;
}

declare module '*.webp' {
	const content: string;
	export default content;
}

declare module '*.ico' {
	const content: string;
	export default content;
}

declare module '*.bmp' {
	const content: string;
	export default content;
}
