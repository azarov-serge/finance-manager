export class ResponseError extends Error {
	status?: string;

	constructor(message?: string, status?: string) {
		super(message);
		this.status = status;
	}

	get fullMessage(): string {
		return this.status
			? `Status ${this.status}: ${this.message}`
			: this.message;
	}
}
