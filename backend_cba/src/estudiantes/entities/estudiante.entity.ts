import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

    @Entity('estudiantes')
    export class Estudiante {
      @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      ci: string;
    
      @Column()
      nombres: string;
    
      @Column()
      apellidos: string;
    
      @Column()
      fechaNacimiento: Date;

      @Column()
      telefono: number;


    }
    

