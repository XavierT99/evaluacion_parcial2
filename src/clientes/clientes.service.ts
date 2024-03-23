// clientes.service.ts
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CLIENTES } from 'src/models/models';
import { IClientes } from './clientes.interfaces';
import * as bcrypt from 'bcrypt';
import { ClientesDTO } from './dto/clientes.dto';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(CLIENTES.name) private readonly modelo: Model<IClientes>) {}
  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
  async insertar(clientesDTO: ClientesDTO): Promise<IClientes> {
    const hash = await this.hashPassword(clientesDTO.password);
    const newUser = new this.modelo({ ...clientesDTO, password: hash });
    return await newUser.save();
  }
  async todos(): Promise<IClientes[]> {
    return await this.modelo.find();
  }
  async uno(id: string): Promise<IClientes> {
    return await this.modelo.findById(id);
  }
  async actualizar(id: string, clientesDTO: ClientesDTO): Promise<IClientes> { // Corregir el nombre de la variable aquí
    const hash = await this.hashPassword(clientesDTO.password); // Corregir el nombre de la variable aquí
    const clientes = { ...clientesDTO, password: hash }; // Corregir el nombre de la variable aquí
    return await this.modelo.findByIdAndUpdate(id, clientes, { new: true });
  }
  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Cliente eliminado' };
  }

  async BuscarporNombre(clientesname: string) {
    return await this.modelo.findOne({ clientesname: clientesname });
  }
  async verficaContrasenia(password: string, passwordDB: string) {
    return await bcrypt.compare(password, passwordDB);
  }
}
