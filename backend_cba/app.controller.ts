import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): string {
    return this.appService.getHello();
    // Puedes devolver un mensaje de bienvenida
    // O si prefieres usar el servicio:
    // return this.appService.getHello();
  }
}

