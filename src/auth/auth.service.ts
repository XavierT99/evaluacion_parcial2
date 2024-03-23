import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientesService } from 'src/clientes/clientes.service';
import { ClientesDTO } from 'src/clientes/dto/clientes.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly clientesService: ClientesService,
    private readonly jwtService: JwtService,
  ) {}

  async validarusuario(username: string, password: string): Promise<any> {
    const user = await this.clientesService.BuscarporNombre(username);

    const isValidPassword = await this.clientesService.verficaContrasenia(
      password,
      clientes.password,
    );

    if (user && isValidPassword) return user;
    return null;
  }
  async singIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
  async singUp(clientesDTO: ClientesDTO) {
    return this.clientesService.insertar(clientesDTO);
  }
}