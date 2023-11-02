const START_YEAR = 2023;

export const useAppFooter = (): { year: string } => {
	const currentFooter = new Date().getFullYear();

	return {
		year:
			currentFooter <= START_YEAR
				? `${START_YEAR}`
				: `${START_YEAR}-${currentFooter}`,
	};
};
