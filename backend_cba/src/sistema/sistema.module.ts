import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sistema } from './entities/sistema.entity';
import { SistemaController } from './sistema.controller';
import { SistemaService } from './sistema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sistema])],
  controllers: [SistemaController],
  providers: [SistemaService],
})
export class SistemaModule {}
