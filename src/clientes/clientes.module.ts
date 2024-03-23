import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteSchema } from './schema/clientes.schema';
import { ClientesService } from './clientes.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Cliente',
        useFactory: async () => ClienteSchema,
      },
      {
        name: 'Coches',
        useFactory: async () => CochesModel.schema,
      },
    ]),
  ],
  providers: const [ClientesService],
  exports: [ClientesService], 
})
export class ClienteModule {}

