import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateExperienciaDto } from './dto/create-experiencia.dto';
import { UpdateExperienciaDto } from './dto/update-experiencia.dto';

@Injectable()
export class ExperienciasService {
  create(createExperienciaDto: CreateExperienciaDto) {
    return 'This action adds a new experiencia';
  }

  findAll() {
    return `This action returns all experiencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} experiencia`;
  }

  update(id: number, updateExperienciaDto: UpdateExperienciaDto) {
    return `This action updates a #${id} experiencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} experiencia`;
  }
}
