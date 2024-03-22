import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { ClientesService } from 'src/clientes/clientes.service';
import { ModelosDTO } from './dto/modelos.dto';

@Controller('api/v2/modelos')
export class ModelosController {
    constructor(private readonly modelosService:ModelosService, private readonly clientesService:ClientesService){}

    @Post()
    insertar(@Body() modelosDTO:ModelosDTO){
        return this.modelosService.insertar(modelosDTO);
    }

    @Get()
    todos(){
        return this.modelosService.todos();
    }

    @Get(':id')
    uno(@Param('id') id:string){
        return this.modelosService.uno(id);
    }

    @Put(':id')
    actualizar(@Param('id') id:string, @Body() modelosDTO:ModelosDTO){
        return this.modelosService.actualizar(id, modelosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.modelosService.eliminar(id);
    }

    @Post(':idModelos/nombre/:idmarca')
    async agregarModelo(@Param('idModelos') idModelos:string, @Param('idClientes') idClientes:string){
        const clientes = await this.clientesService.uno(idClientes);
        if(!clientes) throw new Error('cliente no encontrado');
        return this.modelosService.insertarCliente(idModelos, idClientes);
    }
}
