import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne, // Asegúrate de importar OneToOne
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Materia } from '../../materias/entities/materia.entity';
import { Usuario } from '../../usuarios/entities/usuario.entity';

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

  @Column('int', { nullable: false })
  telefono!: number;

  @ManyToMany(() => Materia, (materia: Materia) => materia.estudiantes)
  @JoinTable()
  materias!: Materia[];

  @OneToOne(() => Usuario, usuario => usuario.estudiante)
  @JoinColumn({ name: 'id_usuario' }) // o como se llame tu columna
  usuario!: Usuario;
  

}


