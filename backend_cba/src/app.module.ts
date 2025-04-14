import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ExperienciasModule } from './experiencias/experiencias.module';
import { Experiencia } from './experiencias/entities/experiencia.entity'; // Asegúrate de importar la entidad correctamente
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { DocentesModule } from './docentes/docentes.module';
import { MateriasModule } from './materias/materias.module';

@Module({
  imports: [
    
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Experiencia], // Especificar las entidades manualmente si no usas autoLoadEntities
      synchronize: true,
      logging: true,
    }),
    ExperienciasModule,
    EstudiantesModule,
    DocentesModule,
    MateriasModule,
  ],
})
export class AppModule {}
