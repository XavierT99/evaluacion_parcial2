// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CochesModule } from './coches/coches.module';
import { ModelosModule } from './modelos/modelos.module';
import { AlquileressModule } from './alquileres/alquileres.module';
import { ClienteModule } from './clientes/clientes.module'; // Corregir la importación

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.urimongo),
    AlquileressModule,
    ClienteModule, 
    CochesModule,
    ModelosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
