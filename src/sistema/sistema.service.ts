import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sistema } from './entities/sistema.entity';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CreateSistemaDto } from './dto/create-sistema.dto';
import { UpdateSistemaDto } from './dto/update-sistema.dto';

@Injectable()
export class SistemaService {
  constructor(
    @InjectRepository(Sistema)
    private readonly sistemaRepository: Repository<Sistema>,
  ) {}

  // Crear usuario con contraseña cifrada
  async create(createSistemaDto: CreateSistemaDto) {
    const hashedPassword = await bcrypt.hash(createSistemaDto.password, 10);
    const nuevoUsuario = this.sistemaRepository.create({
      ...createSistemaDto,
      password: hashedPassword,
    });
    return this.sistemaRepository.save(nuevoUsuario);
  }

  // Listar todos los usuarios
  findAll() {
    return this.sistemaRepository.find();
  }

  // Buscar un usuario por ID
  findOne(id: number) {
    return this.sistemaRepository.findOne({ where: { id } });
  }

  // Actualizar usuario (si cambia la contraseña, la encripta)
  async update(id: number, updateSistemaDto: UpdateSistemaDto) {
    const updatedData = { ...updateSistemaDto };
    if (updateSistemaDto.password) {
      updatedData.password = await bcrypt.hash(updateSistemaDto.password, 10);
    }
    await this.sistemaRepository.update(id, updatedData);
    return this.findOne(id);
  }

  // Actualizar contraseña sin modificar directamente el DTO
  async updatePassword(id: number, password: string): Promise<void> {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    await this.sistemaRepository.update(id, { password: hashedPassword });
  }

  // Eliminar usuario
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error(`Usuario con ID ${id} no encontrado`);
    }
    return this.sistemaRepository.remove(user);
  }

  // LOGIN: Validar usuario y devolver token
  async login(username: string, password: string): Promise<{ token: string }> {
    const user = await this.sistemaRepository.findOne({ where: { username } });
    if (!user || !user.password) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'secreto123', // Puedes mejorar esto usando ConfigService
      { expiresIn: '1h' },
    );

    return { token };
  }
}
