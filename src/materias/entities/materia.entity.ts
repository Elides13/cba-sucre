import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany, 
} from 'typeorm';

// import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
import { Docente } from '../../docentes/entities/docente.entity';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 255, nullable: false })
  nombre!: string;

  @Column('varchar', { length: 50, nullable: false })
  aula!: string;

  @Column('time', { nullable: false }) // Asegúrate de que el tipo sea correcto
  hora!: string;
  
  // @Column('varchar', { length: 255, nullable: false })
  // docente!: string;
  // Muchos estudiantes pueden inscribirse a muchas materias
  // @ManyToMany(() => Estudiante, (estudiante: Estudiante) => estudiante.materias)
  // estudiantes!: Estudiante[];

  // Una materia puede ser impartida por muchos docentes
  @OneToMany(() => Docente, docente => docente.materia)
  docentes!: Docente[];
}
