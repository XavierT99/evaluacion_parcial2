import { Module } from '@nestjs/common';
import { ModelosController } from './modelos.controller';
import { ModelosService } from './modelos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MODELOS } from 'src/models/models';
import { ModelosSchema } from './schema/modelos.schema';
import { ClientesModule } from 'src/clientes/clientes.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: MODELOS.name,
      useFactory: () => ModelosSchema.plugin(require('mongoose-autopopulate')),
    },
    ]),
    ClientesModule,
  ],
  controllers: [ModelosController],
  providers: [ModelosService]
})
export class ModelosModule {}
