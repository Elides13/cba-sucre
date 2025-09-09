import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudiante])], // Registrar el repositorio de Estudiante
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  exports: [EstudiantesService], // Exportar el servicio si es necesario en otros módulos
})
export class EstudiantesModule {}
