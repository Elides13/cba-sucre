import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Estudiante } from '../../estudiantes/entities/estudiante.entity';

@Entity('materias')
export class Materia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @ManyToMany(() => Estudiante, (estudiante: Estudiante) => estudiante.materias) // Tipa el parámetro 'estudiante'
  estudiantes!: Estudiante[];
}

