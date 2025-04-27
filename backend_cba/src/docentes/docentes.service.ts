import { ConflictException, Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { Docente } from './entities/docente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocentesService {
  constructor (
      @InjectRepository(Docente)
      private docentesRepository: Repository<Docente>,
    ){}
    async create(createDocenteDto: CreateDocenteDto):Promise<Docente> {
      const existe=await this.docentesRepository.findOneBy({
        ci: createDocenteDto.ci.toString(),
        nombres: createDocenteDto.nombres.trim(),
        apellidos: createDocenteDto.apellidos.trim(),
        direccion: createDocenteDto.direccion,
        telefono:createDocenteDto.telefono.toString(),
      });
  
      if(existe) throw new ConflictException('el docente ya existe');
  
      const docente=new Docente();
      docente.ci=createDocenteDto.ci;
      docente.nombres=createDocenteDto.nombres.trim();
      docente.apellidos=createDocenteDto.apellidos.trim();
      docente.direccion=createDocenteDto.direccion.trim();
      docente.telefono=createDocenteDto.telefono;
      return this.docentesRepository.save(docente);
    }
  
    async findAll():Promise<Docente[]> {
      return this.docentesRepository.find();
    }
  
    async findOne(id: number):Promise<Docente> {
      const docente=await this.docentesRepository.findOneBy({id});
      if(!docente)throw new ConflictException('el docente no existe');
      return docente;
    }
  
    async update(id: number, updateDocenteDto: UpdateDocenteDto) {
      const docente=await this.findOne(id);
      const docenteUpdate=Object.assign(docente,updateDocenteDto);
      return this.docentesRepository.save(docenteUpdate);
    }
  
    async remove(id: number) {
      const docente= await this.docentesRepository.findOne(id);
      return this.docentesRepository.softRemove(docente);
    }
}
