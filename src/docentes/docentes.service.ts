import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Docente } from './entities/docente.entity';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente)
    private readonly docenteRepository: Repository<Docente>,
  ) {}

  // Crear docente
  async create(createDocenteDto: CreateDocenteDto): Promise<Docente> {
    const docente = this.docenteRepository.create(createDocenteDto);
    return await this.docenteRepository.save(docente);
  }

  // Listar todos los docentes
  async findAll(): Promise<Docente[]> {
    return await this.docenteRepository.find();
  }

  // Buscar un docente por id
  async findOne(id: number): Promise<Docente> {
    const docente = await this.docenteRepository.findOne({ where: { id } });
    if (!docente) throw new NotFoundException(`Docente con ID ${id} no encontrado`);
    return docente;
  }

  // Actualizar docente
  async update(id: number, updateDocenteDto: UpdateDocenteDto): Promise<Docente> {
    const docente = await this.findOne(id);
    Object.assign(docente, updateDocenteDto);
    return await this.docenteRepository.save(docente);
  }

  // Eliminar docente
  async remove(id: number): Promise<void> {
    const result = await this.docenteRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Docente con ID ${id} no encontrado`);
  }
}
