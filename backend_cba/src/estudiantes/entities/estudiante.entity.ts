import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Materia } from '../../materias/entities/materia.entity';

@Entity('estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('int', { unique: true, nullable: false })
  ci!: number;

  @Column('varchar', { length: 50, nullable: false })
  nombres!: string;

  @Column('varchar', { length: 100, nullable: false })
  apellidos!: string;

  @Column('date',{ name: 'fecha_Nacimiento' })
  fechaNacimiento!: Date;

  @Column('int', { nullable: false })
  telefono!: number;

  @ManyToMany(() => Materia, (materia: Materia) => materia.estudiantes)
  @JoinTable()
  materias!: Materia[];
}


