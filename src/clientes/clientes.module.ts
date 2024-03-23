// clientes.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './schema/clientes.schema';
import { ClientesService } from './clientes.service';
import { CochesSchema } from 'src/coches/schema/coches.schema';
import { CochesService } from 'src/coches/coches.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cliente', schema: ClienteSchema }, // Define el esquema de Cliente
      { name: 'Coche', schema: CochesSchema }, // Define el esquema de Coche
    ]),
  ],
  providers: [ClientesService, CochesService], // Agrega CochesService como proveedor
  exports: [ClientesService], 
})
export class ClienteModule {} // Corregir el nombre del módulo aquí
