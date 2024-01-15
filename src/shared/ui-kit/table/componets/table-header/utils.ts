const regex = /[A-Z]/;

export const createHeader = (field: string): string => {
	if (!field.length) {
		return field;
	}

	if (field.length === 1) {
		return field[0].toUpperCase();
	}

	let header = field[0].toUpperCase();

	for (let index = 1; index < field.length; index++) {
		const char = field[index];

		if (regex.test(char)) {
			header += ` ${char.toLowerCase()}`;
		} else {
			header += char;
		}
	}

	return header;
};
