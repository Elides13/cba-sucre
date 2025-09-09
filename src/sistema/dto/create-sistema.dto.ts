import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateSistemaDto {
      @ApiProperty()
      @IsNotEmpty({ message: 'El campo username no debe ser vacío' })
      @IsString({ message: 'El campo username debe ser de tipo cadena' })
      @MaxLength(100, { message: 'El campo username no debe ser mayor a 100 caracteres' })
      @MinLength(2, { message: 'El campo username no debe ser menor a 2 caracteres' })
      readonly username!: string;
      
      
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo contraseña no debe ser vacío' })
    @IsString({ message: 'El campo contraseña debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo contraseña no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo contraseña no debe ser menor a 2 caracteres' })
    readonly password!: string;
}
