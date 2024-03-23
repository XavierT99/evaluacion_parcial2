import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { ClientesDTO } from 'src/clientes/dto/clientes.dto';
@ApiTags('Autenticación')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('singIn')
  async singIn(@Req() req) {
    return { req };
    // return await this.authService.singIn(req.user);
  }
  @Post('singup')
  async singUp(@Body() clientesDTO: ClientesDTO) {
    return await this.authService.singUp(clientesDTO);
  }
}
