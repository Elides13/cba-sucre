import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  // Crear estudiante
  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return await this.estudianteRepository.save(estudiante);
  }

  // Listar todos los estudiantes
  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find();
  }

  // Buscar un estudiante por id
  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({ where: { id } });
    if (!estudiante) throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    return estudiante;
  }

  // Actualizar estudiante
  async update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.findOne(id);
    Object.assign(estudiante, updateEstudianteDto);
    return await this.estudianteRepository.save(estudiante);
  }

  // Eliminar estudiante
  async remove(id: number): Promise<void> {
    const result = await this.estudianteRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
  }
}
