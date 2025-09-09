import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMateriaDto {

  @ApiProperty({ example: 'Matemáticas' })
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
  readonly nombre!: string;

  @ApiProperty({ example: 'Aula 101' })
  @IsNotEmpty({ message: 'El campo aula no debe ser vacío' })
  @IsString({ message: 'El campo aula debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo aula no debe ser mayor a 100 caracteres' })
  @MinLength(2, { message: 'El campo aula no debe ser menor a 2 caracteres' })
  readonly aula!: string;

//   @ApiProperty({ example: '08:00' })
//   @IsNotEmpty({ message: 'El campo hora no debe ser vacío' })
//   @IsDateString({}, { message: 'El campo hora debe ser de tipo fecha' }) // <-- esto probablemente está mal
//   readonly hora!: string;

@IsNotEmpty({ message: 'El campo hora no debe ser vacío' })
@IsString({ message: 'El campo hora debe ser de tipo cadena' })
@ApiProperty({ example: '08:00' })
readonly hora!: string;


}
