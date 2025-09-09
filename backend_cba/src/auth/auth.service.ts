import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto): Promise<any> {
    const { usuario, clave } = authLoginDto;
    const usuarioOk = await this.usuarioService.validate(usuario, clave);

    const payload = { sub: usuarioOk.id };
    const access_token = await this.getAccessToken(payload);

    return { ...usuarioOk, access_token };
  }

  async getAccessToken(payload: JwtPayload): Promise<string> {
    const accessToken: string = await this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET as string, // ← aquí corregido
      expiresIn: process.env.JWT_TOKEN_EXPIRATION as string,
    });
    return accessToken;
  }
  

  async verifyPayload(payload: JwtPayload): Promise<Usuario> {
    let usuario: Usuario;

    try {
      usuario = await this.usuarioService.findOne(payload.sub);
    } catch (error) {
      throw new UnauthorizedException(`Usuario inválido: ${payload.sub}`);
    }

    return usuario;
  }
}
