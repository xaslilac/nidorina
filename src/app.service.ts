import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	makeDocument(title: string, body: string): string {
		return `<html><head><title>${title}</title>${this.getOui()}</head><body><section>${body}</section></body></html>`;
	}

	getOui(): string {
		return `<link rel="stylesheet" type="text/css" href="https://mckay.la/oui.3dd930b7.css" />`;
	}

	getIndex(): string {
		return this.makeDocument(
			"nidorina",
			`<h1>Hi friend!</h1><a href="/time">Time</a>: ${this.getTime()}`,
		);
	}

	getTime(): string {
		const d = new Date();
		return d.toUTCString();
	}
}
