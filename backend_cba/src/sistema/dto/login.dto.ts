import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'docente123',
    description: 'Nombre de usuario (username)',
  })
  @IsNotEmpty({ message: 'El campo username no debe estar vacío' })
  @IsString({ message: 'El campo username debe ser texto' })
  @MinLength(2, { message: 'El campo username debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'El campo username no debe superar los 100 caracteres' })
  readonly username!: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  @IsNotEmpty({ message: 'El campo password no debe estar vacío' })
  @IsString({ message: 'El campo password debe ser texto' })
  @MinLength(2, { message: 'El campo password debe tener al menos 2 caracteres' })
  @MaxLength(100, { message: 'El campo password no debe superar los 100 caracteres' })
  readonly password!: string;
}
