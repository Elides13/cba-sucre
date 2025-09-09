import { 
    BeforeInsert,
    BeforeUpdate,
    Column, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    OneToOne, 
    PrimaryGeneratedColumn 
  } from 'typeorm';
    import * as bcrypt from 'bcrypt';
    // import { Estudiante } from '../../estudiantes/entities/estudiante.entity';
    import { Docente } from '../../docentes/entities/docente.entity';
  
  @Entity('usuarios')
  export class Usuario {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column('varchar', { length: 12, nullable: false })
    usuario!: string;
  
    @Column('varchar', { length: 100, nullable: false })
    clave!: string; // Cambiado a opcional
  
    @Column('varchar', { length: 50, nullable: false })
    email!: string;

    @Column('varchar', { length: 20, nullable: false }) // Agregado: columna para tipoUsuario
    tipoUsuario!: string;
  
    // @OneToOne(() => Estudiante, estudiante => estudiante.usuario)
    // @JoinColumn()
    // estudiante!: Estudiante;

    @OneToOne(() => Docente, (docente) => docente.usuario)
    @JoinColumn()
    docente!: Docente;
  
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      const salt = await bcrypt.genSalt();
      if (this.clave) {
        this.clave = await bcrypt.hash(this.clave, salt);
      }
    }
  
    async validatePassword(plainPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, this.clave);
    }
}