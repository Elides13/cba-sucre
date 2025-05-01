import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, ManyToMany, JoinTable, CreateDateColumn, OneToOne } from "typeorm";

import { Materia } from '../../materias/entities/materia.entity'; // Adjusted relative path
import { Usuario } from '../../usuarios/entities/usuario.entity';

@Entity('docentes')
export class Docente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('int', { nullable: false })
  ci!: number;

  @Column('varchar', { length: 50, nullable: false })
  nombres!: string;

  @Column('varchar', { length: 50, nullable: false })
  apellidos!: string;

  @Column('int', { nullable: false })
  telefono!: number;

  @Column('varchar', { length: 100, nullable: false })
  direccion!: string;

  // Relación: muchos docentes pueden impartir una misma materia
  @ManyToOne(() => Materia, materia => materia.docentes)
  materia!: Materia;

  @OneToOne(() => Usuario, (usuario) => usuario.docente)
  @JoinColumn({ name: 'id_usuario' })  // Aquí se crea la columna id_usuario en la tabla docentes
  usuario!: Usuario;
  
  
}


