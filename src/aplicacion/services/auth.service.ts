import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../dominio/entities/user.entity';
import { UserRepositoryPort } from '../../dominio/ports/repositories/user-repository.port';
import { compare } from 'bcrypt';
import { dataResponseError, dataResponseSuccess, IResponse, ResponseDTO } from 'src/shared/dto/response.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Password } from 'src/dominio/value-objects/password.vo';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRepositoryPort')
    private readonly userRepository: UserRepositoryPort,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string, nombres: string, primerApellido: string, segundoApellido: string, fechaNacimiento: Date, nacionalidad: string, userName: string,celular: string,): Promise<ResponseDTO<User>> {
    try {
      const existingUser = await this.userRepository.findByEmail(email);
      if (existingUser) return dataResponseError('El usuario ya existe');

      const user = User.create(email, password, nombres, primerApellido, segundoApellido, fechaNacimiento, nacionalidad, userName,celular, 1);
      const hashedPassword = await this.hashPassword(user._password);
      user._password.setValue(hashedPassword);
      const usuario = await this.userRepository.create(user);
      return dataResponseSuccess({data:usuario});

    } catch (error) {
      return dataResponseError(error.message);
    }
  }

  async login(email: string, password: string): Promise<IResponse> {
    const usuario = await this.userRepository.findByEmail(email);
    if (!usuario/*  || !await this.verifyPassword(password, user.password) */) return dataResponseError('El usuario no existe');

    const comparePasword = await this.verifyPassword(password, usuario.password);
    if (!comparePasword) return dataResponseError('La contraseña es incorrecta.',{status:401});

    const token = await this.generateJWT(usuario);
    return dataResponseSuccess({data:{ userName:usuario.userName, email: usuario.email, token:token.response.data.token, tokenRefresh:token.response.data.tokenRefresh }});
  }

  private async hashPassword(password: Password): Promise<string> {
    return await bcrypt.hash(password.getValue(), 12);
  }

  private async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, String(hashedPassword));
  }

  private async generateJWT(user: User):Promise<IResponse> {
    try {
      const [token, tokenRefresh] = await Promise.all([
        this.jwtService.sign(user, {
          expiresIn: `3600S`,
          secret: process.env.JWT_SECRET,
        }),
        this.jwtService.sign(user, { expiresIn: `3600S` }),
      ]);
      return dataResponseSuccess({data: {token, tokenRefresh}});

    } catch (error) {
      return dataResponseError(error.message);
    }
  }
}