import { ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';


@Injectable()
export class MateriasService {
  constructor(@InjectRepository(Materia) private materiasRepository: Repository<Materia>) {}

  async create(createMateriaDto: CreateMateriaDto): Promise<Materia> {
    const existe = await this.materiasRepository.findOneBy({
    
      nombre: createMateriaDto.nombre.trim(),
   
     
    });

    if (existe) {
      throw new ConflictException('La materia ya existe');
    }

    return this.materiasRepository.save({
      nombre: createMateriaDto.nombre.trim(),

    });
  }

  async findAll(): Promise<Materia[]> {
    return this.materiasRepository.find();
  }

  async findOne(id: number): Promise<Materia> {
    const materia = await this.materiasRepository.findOneBy({ id });
    if (!materia) {
      throw new NotFoundException(`La materia con id ${id} no existe`);
    }
    return materia;
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
    const materia = await this.materiasRepository.findOneBy({ id });
    if (!materia) {
      throw new NotFoundException(`No existe la materia con id ${id}`);
    }
    const materiaUpdate = Object.assign(materia, updateMateriaDto);
    return this.materiasRepository.save(materiaUpdate);
  }

  async remove(id: number): Promise<void> {
    const materia = await this.findOne(id);
    const result = await this.materiasRepository.delete(materia.id);
    if (result.affected === 0) {
      throw new NotFoundException(`No se pudo eliminar la materia con id ${id}`);
    }
  }
}
