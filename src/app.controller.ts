import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; // Asegúrate de que esta ruta sea correcta

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

