import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { Public } from '../auth/decorators/auth-public.decorator';
import { AuthLoginDto } from '../auth/dto/auth-login.dto'; // usa el dto del módulo auth

@Controller('sistema')
export class SistemaController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }
}
