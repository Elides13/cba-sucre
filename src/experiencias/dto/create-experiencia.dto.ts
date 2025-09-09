import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateExperienciaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo título no debe ser vacío' })
    @IsString({ message: 'El campo título debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo título no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo título no debe ser menor a 2 caracteres' })
    readonly titulo!: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo descripción no debe ser vacío' })
    @IsString({ message: 'El campo descripción debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo descripción no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo descripción no debe ser menor a 2 caracteres' })
    readonly fdescripcion!: string;

    @ApiProperty({ example: '2024-04-13' })
    @IsNotEmpty({ message: 'El campo fecha no debe ser vacío' })
    @IsDateString({}, { message: 'El campo fecha debe ser de tipo fecha' })
    readonly fecha!: Date;

}