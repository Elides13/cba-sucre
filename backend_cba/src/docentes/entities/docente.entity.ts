import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('docentes')
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  ci: number;

  @Column('varchar', { length: 50, nullable: false })
  nombres: string;

  @Column('varchar', { length: 50, nullable: false })
  apellidos: string;

  @Column('int', { nullable: false })
  telefono: number;

  @Column('varchar', { length: 100, nullable: false })
  direccion: string;
}