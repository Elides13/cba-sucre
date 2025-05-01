import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>, // Inyección del repositorio
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const existe = await this.estudianteRepository.findOneBy({
      ci: createEstudianteDto.ci,
      nombres: createEstudianteDto.nombres.trim(),
      apellidos: createEstudianteDto.apellidos.trim(),
      telefono: createEstudianteDto.telefono,
    });

    if (existe) {
      throw new ConflictException('El estudiante ya existe');
    }

    return this.estudianteRepository.save({
      ci: createEstudianteDto.ci,
      nombre: createEstudianteDto.nombres.trim(),
      apellido: createEstudianteDto.apellidos.trim(),
      telefono: createEstudianteDto.telefono,
    });
  }

  async findAll(): Promise<Estudiante[]> {
    return this.estudianteRepository.find();
  }

  async findOne(id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOneBy({ id });
    if (!estudiante) {
      throw new NotFoundException(`El estudiante con id ${id} no existe`);
    }
    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOneBy({ id });
    if (!estudiante) {
      throw new NotFoundException(`No existe el estudiante con id ${id}`);
    }
    const estudianteUpdate = Object.assign(estudiante, updateEstudianteDto);
    return this.estudianteRepository.save(estudianteUpdate);
  }

  async remove(id: number): Promise<void> {
    const estudiante = await this.findOne(id);
    const result = await this.estudianteRepository.delete(estudiante.id);
    if (result.affected === 0) {
      throw new NotFoundException(`No se pudo eliminar el estudiante con id ${id}`);
    }
  }
}