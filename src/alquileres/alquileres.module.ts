import { Module } from '@nestjs/common';
import { AlquileresController } from './alquileres.controller';
import { AlquileresService } from './alquileres.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ALQUILERES} from 'src/models/models';
import { AlquileresSchema } from './schema/alquileres.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: ALQUILERES.name,
      useFactory: () => {
        return AlquileresSchema;
      },
    },
  ]),
  ],
  controllers: [AlquileresController],
  providers: [AlquileresService],
  exports: [AlquileresService],
})
export class AlquileressModule {}