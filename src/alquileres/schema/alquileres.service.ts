import { Delete, HttpStatus, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ALQUILERES } from 'src/models/models';
import { IAlquileres } from './alquileres.interface';
import { AlquileresDTO } from './dto/alquileres.dto';

@Injectable()
export class AlquileresService {
    constructor(@InjectModel(ALQUILERES.name) private readonly modelo:Model<IAlquileres>){}

    async insertar(alquileresDTO:AlquileresDTO): Promise<IAlquileres>{
        const newAutor = new this.modelo({...alquileresDTO});
        return await newAutor.save();
    }

    async todos(): Promise<IAlquileres[]>{
        return await this.modelo.find();
    }

    async uno(id:string): Promise<IAlquileres>{
        return await this.modelo.findById(id);
    }

    async actualizar(id:string, autoresDTO:AlquileresDTO): Promise<IAlquileres>{
        return await this.modelo.findByIdAndUpdate(id, AlquileresDTO, {new:true});
    }

    async eliminar(id:string){
        await this.modelo.findByIdAndDelete(id);
        return {status:HttpStatus.OK, mensaje:'Alquiler eliminado'};
    }
    
}