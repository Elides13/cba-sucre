import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany, 
} from 'typeorm';

import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Docente } from '../../docentes/entities/docente.entity';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  // Muchos estudiantes pueden inscribirse a muchas materias
  @ManyToMany(() => Estudiante, (estudiante: Estudiante) => estudiante.materias)
  estudiantes!: Estudiante[];

  // Una materia puede ser impartida por muchos docentes
  @OneToMany(() => Docente, docente => docente.materia)
  docentes!: Docente[];
}
