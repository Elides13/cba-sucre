import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('varchar', { length: 20, nullable: false })
  telefono!: string; // <-- string para que coincida con DTO
}
