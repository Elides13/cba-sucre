import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('estudiantes')
export class Experiencia {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 100, nullable: false })
  titulo!: string;

  @Column('varchar', { length: 100, nullable: false })
  descripcion!: string;

  @Column('date', { name: 'fecha' })
  fecha!: Date;
}
