import { Module } from '@nestjs/common';
import { CochesController } from './coches.controller';
import { CochesService } from './coches.service';
import { MongooseModule } from '@nestjs/mongoose';
import { COCHES } from 'src/models/models';
import { CochesSchema } from './schema/coches.schema';
import { AlquileressModule } from 'src/alquileres/alquileres.module';
import { ClientesModule } from 'src/clientes/clientes.module';
import * as mongooseAutopopulate from 'mongoose-autopopulate';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: COCHES.name,
      useFactory: ()=> CochesSchema.plugin(require('mongoose-autopopulate')),
    },
  ]),
  AlquileressModule,
  ClientesModule,
  ],
  controllers: [CochesController],
  providers: [CochesService],
  exports: [CochesService],
})
export class CochesModule {}
