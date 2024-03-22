import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AlquileresModule } from './alquileres/alquileres.module';
import { ClientesModule } from './clientes/clientes.module';
import { CochesModule } from './coches/coches.module';
import { ModelosModule } from './modelos/modelos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.urimongo),
    AlquileresModule,
    ClientesModule,
    CochesModule,
    ModelosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
