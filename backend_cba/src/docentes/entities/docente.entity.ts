import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('docentes')
export class Docente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ci: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: number;

  @Column()
  direccion: string;
}