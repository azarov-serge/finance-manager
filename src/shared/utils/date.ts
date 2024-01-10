export type DateFormat =
	| 'dd.mm.yyyy'
	| 'dd.mm.yyyy hh:mm'
	| 'dd.mm.yyyy hh:mm:ss'
	| 'dd.mm.yy'
	| 'dd.mm.yy hh:mm'
	| 'dd.mm.yy hh:mm:ss';

export const formatDate = (
	date: Date,
	format: DateFormat = 'dd.mm.yyyy hh:mm',
): string => {
	switch (format) {
		case 'dd.mm.yyyy': {
			const dateFormater = new Intl.DateTimeFormat('ru-Ru', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			});

			const formatedDate = dateFormater.format(date);

			return formatedDate;
		}

		case 'dd.mm.yyyy hh:mm': {
			const dateFormater = new Intl.DateTimeFormat('ru-Ru', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			});

			const timeFormater = new Intl.DateTimeFormat('ru-Ru', {
				hour: '2-digit',
				minute: '2-digit',
			});

			const formatedDate = dateFormater.format(date);
			const fromatedTime = timeFormater.format(date);

			return `${formatedDate} ${fromatedTime}`;
		}

		case 'dd.mm.yyyy hh:mm:ss': {
			const dateFormater = new Intl.DateTimeFormat('ru-Ru', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			});

			const timeFormater = new Intl.DateTimeFormat('ru-Ru', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			});

			const formatedDate = dateFormater.format(date);
			const fromatedTime = timeFormater.format(date);

			return `${formatedDate} ${fromatedTime}`;
		}

		case 'dd.mm.yy': {
			const dateFormater = new Intl.DateTimeFormat('ru-Ru', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			});

			const formatedDate = dateFormater.format(date);

			return formatedDate;
		}

		case 'dd.mm.yy hh:mm': {
			const dateFormater = new Intl.DateTimeFormat('ru-Ru', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			});

			const timeFormater = new Intl.DateTimeFormat('ru-Ru', {
				hour: '2-digit',
				minute: '2-digit',
			});

			const formatedDate = dateFormater.format(date);
			const fromatedTime = timeFormater.format(date);

			return `${formatedDate} ${fromatedTime}`;
		}

		case 'dd.mm.yy hh:mm:ss': {
			const dateFormater = new Intl.DateTimeFormat('ru-Ru', {
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
			});

			const timeFormater = new Intl.DateTimeFormat('ru-Ru', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			});

			const formatedDate = dateFormater.format(date);
			const fromatedTime = timeFormater.format(date);

			return `${formatedDate} ${fromatedTime}`;
		}

		default:
			console.log('Неизвестный формат');

			return date.toLocaleDateString();
	}
};
