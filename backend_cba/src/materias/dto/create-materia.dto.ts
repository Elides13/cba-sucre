import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateMateriaDto {

    @ApiProperty()
    @IsDefined({ message: 'El campo idCliente debe estar definido' })
    @IsNumber({}, { message: 'El campo idCliente debe ser de tipo numérico' })
    readonly sigla: number;

    @ApiProperty({ example: '2024-04-13' })
    @IsNotEmpty({ message: 'El campo fecha_entrada no debe ser vacío' })
    @IsDateString({}, { message: 'El campo fecha_entrada debe ser de tipo fecha' })
    readonly hora: Date;

    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly aula: string;
}

