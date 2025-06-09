import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../aplicacion/services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { loginDto } from '../dtos/auth.dto';
import { VersionDescription } from '../decorators/controller.decorator';
import { CreateUsuariosDto } from '../dtos/usuarios.dto';

@ApiTags('[auth] Usuarios'.toUpperCase())
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrar')
  @VersionDescription('1','Servico para crear de los Usuarios')
  async register(@Body() registerDto: CreateUsuariosDto) {
    return await this.authService.register(
      registerDto.email,
      registerDto.password,
      registerDto.nombres,
      registerDto.primerApellido,
      registerDto.segundoApellido,
      registerDto.fechaNacimiento,
      registerDto.nacionalidad,
      registerDto.userName,
      registerDto.celular,
    );
  }


  @Post('login')
  login(@Body() loginDto: loginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}