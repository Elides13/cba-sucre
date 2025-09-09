import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { Docente } from './entities/docente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docente])], // Registrar el repositorio de Docente
  controllers: [DocentesController],
  providers: [DocentesService],
  exports: [DocentesService], // Exportar el servicio si es necesario en otros módulos
})
export class DocentesModule {}
