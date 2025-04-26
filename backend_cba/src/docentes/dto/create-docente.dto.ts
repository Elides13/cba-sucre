import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateDocenteDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo carnet de identidad no debe ser vacío' })
    @IsInt({ message: 'El campo carnet de identidad debe ser de tipo entero' })
    @Min(5, { message: 'El campo temporadas no debe ser menor a 5 digitos' })
    readonly ci!: number; // Usa el operador "!" para indicar que será inicializado

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly nombres!: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly apellidos!: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo precio por hora no debe ser vacío' })
    @IsNumber({}, { message: 'El campo precio por hora debe ser de tipo número' })
    readonly telefono!: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
    @MinLength(2, { message: 'El campo nombre no debe ser menor a 2 caracteres' })
    readonly direccion!: string;
}
