import { ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { Materia } from './entities/materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MateriasService {
  constructor (@InjectRepository(Materia) private materiasRepository: Repository<Materia>) {}

    async create(createMateriaDto: CreateMateriaDto):Promise<Materia> {
      const existe=await this.materiasRepository.findOneBy({
        nombre: createMateriaDto.nombre.trim(),
        aula: createMateriaDto.aula.trim(),
        hora: createMateriaDto.hora,
      });
  
      if(existe) {
        throw new ConflictException('la materia ya existe');
      }
      const materia = new Materia();
      materia.nombre = createMateriaDto.nombre.trim();
      materia.aula = createMateriaDto.aula.trim();
      materia.hora = createMateriaDto.hora;
      return this.materiasRepository.save(materia);
  
    }
  
    async findAll():Promise<Materia[]> {
      return this.materiasRepository.find();
    }
  
    async findOne(id: number):Promise<Materia> {
      const materia=await this.materiasRepository.findOneBy({id});
      if(!materia)
        throw new ConflictException('la materia no existe');
      return materia;
    }
  
    async update(id: number, updateMateriaDto: UpdateMateriaDto): Promise<Materia> {
      const materia=await this.materiasRepository.findOneBy({id});
      if(!materia){
        throw new ConflictException('la materia no existe');
    }
      const materiaUpdate=Object.assign(materia,updateMateriaDto);
      return this.materiasRepository.save(materiaUpdate);
    }
  
    async remove(id: number): Promise<void> {
      const materia = await this.findOne(id);
      const result = await this.materiasRepository.delete(materia.id);
      if (result.affected === 0) {
        throw new NotFoundException(`Materia with ID ${id} not found`);
      }
    }
}
