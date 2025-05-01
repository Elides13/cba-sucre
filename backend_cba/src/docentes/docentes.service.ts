import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Docente } from './entities/docente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocentesService {
  constructor (@InjectRepository(Docente) private docentesRepository: Repository<Docente>) {}

    async create(createDocenteDto: CreateDocenteDto):Promise<Docente> {
      const existe=await this.docentesRepository.findOneBy({
        ci: createDocenteDto.ci,
        nombres: createDocenteDto.nombres.trim(),
        apellidos: createDocenteDto.apellidos.trim(),
        direccion: createDocenteDto.direccion,
        telefono:createDocenteDto.telefono,
      });
  
      if(existe) {
        throw new ConflictException('el docente ya existe');
      }

      return this.docentesRepository.save({
        ci:createDocenteDto.ci,
        nombres:createDocenteDto.nombres.trim(),
        apellidos:createDocenteDto.apellidos.trim(),
        direccion:createDocenteDto.direccion.trim(),
        telefono:createDocenteDto.telefono,
      } );
  
    }
  
    async findAll():Promise<Docente[]> {
      return this.docentesRepository.find();
    }
  
    async findOne(id: number):Promise<Docente> {
      const docente=await this.docentesRepository.findOneBy({id});
      if(!docente)
        throw new ConflictException('el docente no existe');
      return docente;
    }
  
    async update(id: number, updateDocenteDto: UpdateDocenteDto): Promise<Docente> {
      const docente=await this.docentesRepository.findOneBy({id});
      if(!docente){
        throw new ConflictException('el docente no existe');
    }
      const docenteUpdate=Object.assign(docente,updateDocenteDto);
      return this.docentesRepository.save(docenteUpdate);
    }
  
    async remove(id: number): Promise<void> {
      const docente = await this.findOne(id);
      const result = await this.docentesRepository.delete(docente.id);
      if (result.affected === 0) {
        throw new NotFoundException(`Docente with ID ${id} not found`);
      }
    }
}
