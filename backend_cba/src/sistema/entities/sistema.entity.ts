import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sistema {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('varchar', { length: 50, nullable: false })
  username!: string;

  @Column('varchar', { length: 50, nullable: false })
  password!: string;

  @Column('enum', { enum: ['docente', 'estudiante'], nullable: false })
  tipo!: 'docente' | 'estudiante';
}
