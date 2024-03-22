import { IsNotEmpty, IsString } from "class-validator";

export class AlquileresDTO{
    @IsNotEmpty({message: 'El nombre es requerido'})
    @IsString({message: 'El nombre debe ser un texto'})
    readonly nombre: string;
}