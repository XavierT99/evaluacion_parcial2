import { Module } from '@nestjs/common';
import { CochesController } from './coches.controller';
import { CochesService } from './coches.service';
import { MongooseModule } from '@nestjs/mongoose';
import { COCHES } from 'src/models/models';
import { CochesSchema } from './schema/coches.schema';
import { AlquileresModule } from 'src/alquileres/alquileres.module';
import { ClientesModule } from 'src/clientes/clientes.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: COCHES.name,
      useFactory: ()=> CochesSchema.plugin(require('mongoose-autopopulate')),
    },
  ]),
  AlquileresModule,
  ClientesModule,
  ],
  controllers: [CochesController],
  providers: [CochesService],
  exports: [CochesService],
})
export class CochesModule {}
