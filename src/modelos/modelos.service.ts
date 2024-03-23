import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODELOS } from 'src/models/models';
import { IModelos } from './modelos.interfaces';
import { ModelosDTO } from './dto/modelos.dto';

@Injectable()
export class ModelosService {
    insertarCliente(idModelos: string, idClientes: string) {
        throw new Error('Method not implemented.');
    }
    constructor(@InjectModel(MODELOS.name) private readonly model:Model<IModelos>){}

    insertar(modelosdto:ModelosDTO) : Promise<IModelos>{
        const nuevoModelos = new this.model(modelosdto);
        return nuevoModelos.save();
    }

    todos() : Promise<IModelos[]>{
        return this.model.find();
    }

    uno(id:string) : Promise<IModelos>{
        return this.model.findById(id);
    }

    actualizar(id:string, modelosdto:ModelosDTO) : Promise<IModelos>{
        return this.model.findByIdAndUpdate(id, modelosdto, {new:true});
    }

    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, message: 'Modelo eliminado'};
    }

    async insertarModelos(idModelos:string, idClientes:string) : Promise<IModelos>{
        return await this.model.findByIdAndUpdate(idModelos, {$addToSet: {clientes: idClientes}}, {new:true},
            ).populate('clientes');
    }
}
