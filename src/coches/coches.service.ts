import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { COCHES } from 'src/models/models';
import { ICoches } from './coches.interface';
import { CochesDTO } from './dto/coches.dto';

@Injectable()
export class CochesService {
    constructor(@InjectModel(COCHES.name) private readonly model:Model<ICoches>){}

    insertar(librosDTO: CochesDTO):Promise<ICoches>{
        const nuevoCoche = new this.model(CochesDTO);
        return nuevoCoche.save();
    }

    todos():Promise<ICoches[]>{
        return this.model.find();
    }

    uno(id:string):Promise<ICoches>{
        return this.model.findById(id);
    }

    actualizar(id:string, cochesDTO:CochesDTO):Promise<ICoches>{
        return this.model.findByIdAndUpdate(id, cochesDTO, {new:true});
    }

    async eliminar(id:string){
        await this.model.findByIdAndDelete(id);
        return {status: HttpStatus.OK, message: 'Coche eliminado'};
    }

    async insertarAlquileres(idCoches:string, idAlquileres:string):Promise<ICoches>{
        return await this.model.findByIdAndUpdate(idCoches, {$addToSet: {alquileres: idAlquileres}}, {new:true},
            ).populate('alquileres');
    }

    async insertarClientes(
        idCoches:string, idClientes:string
        ):Promise<ICoches>{
        return await this.model
        .findByIdAndUpdate(
            idCoches, {
                $addToSet: {clientes: idClientes}
            }, {new:true},
            ).populate('clientes');
    }
}