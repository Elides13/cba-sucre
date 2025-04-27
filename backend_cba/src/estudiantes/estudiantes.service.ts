import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstudiantesService {
  constructor (
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ){}
  async create(createEstudianteDto: CreateEstudianteDto):Promise<Estudiante> {
    const existe=await this.estudiantesRepository.findOneBy({
      ci: createEstudianteDto.ci.toString(),
      nombres: createEstudianteDto.nombres.trim(),
      apellidos: createEstudianteDto.apellidos.trim(),
      fechaNacimiento: createEstudianteDto.fecha_Nacimiento,
      telefono:createEstudianteDto.telefono.toString(),
    });

    if(existe) throw new ConflictException('el estudiante ya existe');

    const estudiante=new Estudiante();
    estudiante.ci=createEstudianteDto.ci;
    estudiante.nombres=createEstudianteDto.nombres.trim();
    estudiante.apellidos=createEstudianteDto.apellidos.trim();
    estudiante.fechaNacimiento=createEstudianteDto.fecha_Nacimiento;
    estudiante.telefono=createEstudianteDto.telefono;
    return this.estudiantesRepository.save(estudiante);
  }

  async findAll():Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  async findOne(id: number):Promise<Estudiante> {
    const estudiante=await this.estudiantesRepository.findOneBy({id});
    if(!estudiante)throw new ConflictException('el estudiante no existe');
    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    const estudiante=await this.findOne(id);
    const estudianteUpdate=Object.assign(estudiante,updateEstudianteDto);
    return this.estudiantesRepository.save(estudianteUpdate);
  }

  async remove(id: number) {
    const estudiante= await this.estudiantesRepository.findOne(id);
    return this.estudiantesRepository.softRemove(estudiante);
  }
}

