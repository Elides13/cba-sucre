import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString, MaxLength, MinLength, Min } from "class-validator";

export class CreateEstudianteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo carnet de identidad no debe ser vacío' })
  @IsInt({ message: 'El campo carnet de identidad debe ser de tipo entero' })
  @Min(5, { message: 'El campo no debe ser menor a 5 digitos' })
  readonly ci!: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombres!: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellido no debe ser vacío' })
  @IsString({ message: 'El campo apellido debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo apellido no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo apellido no debe ser menor a 2 caracteres' })
  readonly apellidos!: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo telefono no debe ser vacío' })
  @IsString({ message: 'El campo telefono debe ser de tipo cadena' })
  @MaxLength(20, { message: 'El campo telefono no debe ser mayor a 20 caracteres' })
  @MinLength(6, { message: 'El campo telefono debe tener al menos 6 dígitos' })
  readonly telefono!: string;
}
