import { Module } from '@nestjs/common';
import { ExperienciasService } from './experiencias.service';
import { ExperienciasController } from './experiencias.controller';
import { Experiencia } from './entities/experiencia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Experiencia])],  // Asegúrate de que la entidad sea registrada aquí
  providers: [ExperienciasService],
  controllers: [ExperienciasController],
})
export class ExperienciasModule {}
