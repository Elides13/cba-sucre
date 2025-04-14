
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

export class Materia {

    @Column('varchar', { length: 100, nullable: false })
    sigla: number;
  
    @Column('varchar', { length: 100, nullable: false })
    hora: Date;
  
    @Column('varchar', { length: 100, nullable: false })
    aula: string;
  
    
  }

