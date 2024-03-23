import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CochesController } from './coches.controller';
import { CochesService } from './coches.service';
import { COCHES } from '../models/models';
import { CochesSchema } from './schema/coches.schema';
import mongooseAutopopulate from 'mongoose-autopopulate'; 
import { ClienteModule } from 'src/clientes/clientes.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: COCHES.name,
        useFactory: () => CochesSchema.plugin(mongooseAutopopulate),
      },
    ]),
    //AlquileresModule,
    ClienteModule,
  ],
  controllers: [CochesController],
  providers: [CochesService],
  exports: [CochesService],
})
export class CochesModule {}
