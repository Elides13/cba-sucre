import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './entities/materia.entity';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriasService {
  constructor(
    @InjectRepository(Materia)
    private readonly materiaRepository: Repository<Materia>,
  ) {}

  // Crear materia
  async create(createMateriaDto: CreateMateriaDto): Promise<Materia> {
    const materia = this.materiaRepository.create(createMateriaDto);
    return await this.materiaRepository.save(materia);
  }

  // Listar todos los materias
  async findAll(): Promise<Materia[]> {
    return await this.materiaRepository.find();
  }

  // Buscar un materia por id
  async findOne(id: number): Promise<Materia> {
    const materia = await this.materiaRepository.findOne({ where: { id } });
    if (!materia) throw new NotFoundException(`Materia con ID ${id} no encontrado`);
    return materia;
  }

  // Actualizar materia
  async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
    const materia = await this.findOne(id);
    Object.assign(materia, updateMateriaDto);
    return await this.materiaRepository.save(materia);
  }

  // Eliminar materia
  async remove(id: number): Promise<void> {
    const result = await this.materiaRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Materia con ID ${id} no encontrado`);
  }
}
