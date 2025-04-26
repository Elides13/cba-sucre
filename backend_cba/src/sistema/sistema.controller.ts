import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException } from '@nestjs/common';
import { SistemaService } from './sistema.service';
import { CreateSistemaDto } from './dto/create-sistema.dto';
import { UpdateSistemaDto } from './dto/update-sistema.dto';
import { LoginDto } from './dto/login.dto';

@Controller('sistema')
export class SistemaController {
  constructor(private readonly sistemaService: SistemaService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }): Promise<{ token: string }> {
    return this.sistemaService.login(body.username, body.password);
  }

  @Get()
  findAll() {
    return this.sistemaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSistemaDto: UpdateSistemaDto) {
    return this.sistemaService.update(+id, updateSistemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaService.remove(+id);
  }
}
