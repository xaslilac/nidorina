import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	main(): string {
		return this.appService.getIndex();
	}

	@Get("/time")
	time(): string {
		return this.appService.getTime();
	}
}
