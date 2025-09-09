import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sistema } from './entities/sistema.entity';
import { SistemaController } from './sistema.controller';
import { SistemaService } from './sistema.service';
import { AuthModule } from '../auth/auth.module'; // 👈 ajusta la ruta relativa al módulo de Auth

@Module({
  imports: [
    TypeOrmModule.forFeature([Sistema]),
    AuthModule, // 👈 agrégalo aquí
  ],
  controllers: [SistemaController],
  providers: [SistemaService],
})
export class SistemaModule {}
