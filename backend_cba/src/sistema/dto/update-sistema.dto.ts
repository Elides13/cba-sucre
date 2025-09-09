import { PartialType } from '@nestjs/mapped-types';
import { CreateSistemaDto } from './create-sistema.dto';

export class UpdateSistemaDto extends PartialType(CreateSistemaDto) {
  id!: number; // Asegúrate de incluir la propiedad id
}
