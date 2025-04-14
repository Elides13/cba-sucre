import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateExperienciaDto {
@ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly titulo: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly fdescripcion: string;

    @ApiProperty({ example: '2024-04-13' })
    @IsNotEmpty({ message: 'El campo fecha_salida no debe ser vacío' })
    @IsDateString({}, { message: 'El campo fecha_salida debe ser de tipo fecha' })
    readonly fecha: Date;

}