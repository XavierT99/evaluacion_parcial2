import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlquileresService } from './alquileres.service';
import { AlquileresDTO } from './dto/alquileres.dto';

@Controller('api/v2/alquileres')
export class AlquileresController {
    constructor(private alquileresService:AlquileresService){}

    @Post()
    insertar(@Body() alquileresDTO:AlquileresDTO){
        return this.alquileresService.insertar(alquileresDTO);
    }

    @Get()
    todos(){
        return this.alquileresService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.alquileresService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() alquileresDTO:AlquileresDTO){
        return this.alquileresService.actualizar(id, alquileresDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.alquileresService.eliminar(id);
    }
}