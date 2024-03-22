import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CochesService } from './coches.service';
import { AlquileresService } from 'src/alquileres/alquileres.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { CochesDTO } from './dto/Coches.dto';

@Controller('api/v2/coches')
export class CochesController {
    constructor(private readonly cochesService:CochesService, 
        private readonly alquileresService:AlquileresService, 
        private readonly clientesService: ClientesService
    ){}

    @Post()
    insertar(@Body() cochesDTO:CochesDTO){
        return this.cochesService.insertar(cochesDTO);
    }

    @Get()
    todos(){
        return this.cochesService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.cochesService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() cochesDTO:CochesDTO){
        return this.cochesService.actualizar(id, cochesDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.cochesService.eliminar(id);
    }

    @Post(':idCoches/Matricula/:idModelo')
    async agregarAutor(
        @Param('idCoches') idCoches:string,
        @Param('idAlquileres') idAlquileres:string
    ){
        const alquileres = await this.alquileresService.uno(idAlquileres);
        if(!alquileres) throw new Error('Alquiler no encontrado');
        return this.cochesService.insertarAlquileres(idCoches, idAlquileres);
    }

    @Post(':idCoches/clientes/:idClientes')
    async agregarClientes(
        @Param('idCoches') idCoches:string,
        @Param('idClientes') idClientes:string
    ){
        const clientes = await this.clientesService.uno(idClientes);
        if(!clientes) throw new Error('Cliente no encontrado');
        return this.cochesService.insertarCliente(idCoches, idClientes);
    }

    
}