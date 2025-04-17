
import { Docente } from 'src/docentes/entities/docente.entity';
import { Estudiante } from 'src/estudiantes/entities/estudiante.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

export class Materia {

    @Column('varchar', { length: 100, nullable: false })
    sigla: number;
  
    @Column('varchar', { length: 100, nullable: false })
    hora: Date;
  
    @Column('varchar', { length: 100, nullable: false })
    aula: string;

    @OneToOne(() => Docente, (docente) => docente.ci)
    docente: Docente;
  
    @ManyToOne(() => Estudiante, (estudiante) => estudiante.ci)
    @JoinColumn({ name: 'id_estudianate', referencedColumnName: 'id' })
    estudiante: Estudiante;
    
  }

