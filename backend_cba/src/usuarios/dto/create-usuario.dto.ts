import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo usario no debe ser vacío' })
  @IsString({ message: 'El campo usario debe ser de tipo cadena' })
  @MaxLength(12, { message: 'El campo usario no debe ser mayor a 12 caracteres' })
  @MinLength(4, { message: 'El campo usario no debe ser menor a 4 caracteres' })
  readonly usuario!: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email no debe ser vacío' })
  @IsEmail({}, { message: 'El campo email debe tener el formato correcto' })
  @MaxLength(50, { message: 'El campo usario no debe ser mayor a 50 caracteres' })
  @MinLength(10, { message: 'El campo usario no debe ser menor a 10 caracteres' })
  readonly email!: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipo Usuario no debe ser vacío' })
  @IsString({ message: 'El campo tipo Usuario debe tener el formato correcto' })
  @MaxLength(15, { message: 'El campo tipo Usuario no debe ser mayor a 15 caracteres' })
  @MinLength(3, { message: 'El campo tipo Usuario no debe ser menor a 3 caracteres' })
  readonly tipoUsuario!: string;
}
