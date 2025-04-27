import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Materia } from './entities/materia.entity';

@Injectable()
export class MateriasService {
  constructor (
      @InjectRepository(Materia)
      private materiasRepository: Repository<Materia>,
    ){}
    async create(createMateriaDto: CreateMateriaDto):Promise<Materia> {
      const existe=await this.materiasRepository.findOneBy({
        sigla: createMateriaDto.sigla.toString(),
        aula: createMateriaDto.aula.trim(),
        hora:createMateriaDto.hora
      });
  
      if(existe) throw new ConflictException('el materia ya existe');
  
      const materia=new Materia();
      materia.nombre=createMateriaDto.sigla;
      return this.materiasRepository.save(materia);
    }
  
    async findAll():Promise<Materia[]> {
      return this.materiasRepository.find();
    }
  
    async findOne(id: number):Promise<Materia> {
      const materia=await this.materiasRepository.findOneBy({id});
      if(!materia)throw new ConflictException('el materia no existe');
      return materia;
    }
  
    async update(id: number, updateMateriaDto: UpdateMateriaDto) {
      const materia=await this.findOne(id);
      const materiaUpdate=Object.assign(materia,updateMateriaDto);
      return this.materiasRepository.save(materiaUpdate);
    }
  
    async remove(id: number) {
      const materia= await this.materiasRepository.findOne(id);
      return this.materiasRepository.softRemove(materia);
    }
}
