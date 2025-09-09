import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  InternalServerErrorException, 
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(@InjectRepository(Usuario) private usuariosRepository: Repository<Usuario>) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    try {
    // Verificar si el usuario ya existe
    const existe = await this.usuariosRepository.findOneBy({
      usuario: createUsuarioDto.usuario.trim(),
    });

    if (existe) {
      throw new ConflictException('El usuario ya existe');
    }

    // Crear el nuevo usuario
    const usuario = this.usuariosRepository.create({
      usuario: createUsuarioDto.usuario.trim(),
      clave: process.env.DEFAULT_PASSWORD || 'default_password',
      email: createUsuarioDto.email.trim(),
      tipoUsuario: createUsuarioDto.tipoUsuario.trim(),
    });
    

    // Guardar el usuario en la base de datos
    const usuarioBd = await this.usuariosRepository.save(usuario);

    // Eliminar la clave antes de devolver el objeto
    usuarioBd.clave = '';  // O también puedes usar '' si prefieres una cadena vacía

    return usuarioBd;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw new InternalServerErrorException('Error al crear el usuario');
  }
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuariosRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`El usuario ${id} no existe`);
    }
    return usuario;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    const usuarioUpdate = Object.assign(usuario, updateUsuarioDto);
    return this.usuariosRepository.save(usuarioUpdate);
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    return this.usuariosRepository.delete(usuario.id);
  }

  async validate(usuario: string, clave: string): Promise<Usuario> {
    const usuarioOk = await this.usuariosRepository.findOne({
      where: { usuario },
      select: ['id', 'usuario', 'clave', 'email', 'tipoUsuario'],
    });

    if (!usuarioOk) throw new NotFoundException('Usuario inexistente');

    // Validar la clave
    const isPasswordValid = await usuarioOk.validatePassword(clave);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Clave incorrecta');
    }

    // Eliminar la clave antes de devolver el usuario
    usuarioOk.clave = '';  // O '' si prefieres una cadena vacía

    return usuarioOk;
  }
}
