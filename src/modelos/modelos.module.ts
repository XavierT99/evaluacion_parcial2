// modelos.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteModule } from 'src/clientes/clientes.module'; // Corrige el nombre de la importación
import { ClientesService } from 'src/clientes/clientes.service';
import { CochesService } from 'src/coches/coches.service';
import { CochesSchema } from 'src/coches/schema/coches.schema';
import { ClienteSchema } from './schema/clientes.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cliente', schema: ClienteSchema }, // Define el esquema de Cliente
      { name: 'Coche', schema: CochesSchema }, // Define el esquema de Coche
    ]),
    ClienteModule, // Utiliza el nombre de importación corregido
  ],
  providers: [ClientesService, CochesService], // Agrega CochesService como proveedor
  exports: [ClientesService], 
})
export class ModelosModule {}
