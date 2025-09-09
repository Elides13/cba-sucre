import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ExperienciasService } from './experiencias.service';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('experiencias')
@Controller('experiencias')
export class ExperienciasController {
  constructor(private readonly experienciasService: ExperienciasService) {}

  @Post()
  create(@Body() createExperienciaDto: CreateExperienciaDto) {
    return this.experienciasService.create(createExperienciaDto);
  }

  @Get()
  findAll() {
    return this.experienciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperienciaDto: UpdateExperienciaDto) {
    return this.experienciasService.update(+id, updateExperienciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienciasService.remove(+id);
  }
}
