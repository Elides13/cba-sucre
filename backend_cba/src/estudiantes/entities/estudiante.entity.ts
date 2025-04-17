import { Materia } from "src/materias/entities/materia.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

    @Entity('estudiantes')
    export class Estudiante {
      @PrimaryGeneratedColumn()
      id: number;
    
      @Column('int', { nullable: false })
      ci: number;
    
      @Column('varchar', { length: 50, nullable: false })
      nombres: string;
    
      @Column('varchar', { length: 100, nullable: false })
      apellidos: string;
    
      @Column({ name: 'fecha_Nacimiento' })
      fecha_Nacimiento: Date;

      @Column('int', { nullable: false })
      telefono: number;

      @OneToOne(() => Materia, (materia) => materia.sigla)
      materias: Materia[];

    }
    

