import { IsNotEmpty, IsString } from "class-validator";

export class ClientesDTO {
    @IsNotEmpty({message: 'El nombre es requerido'})
    @IsString({message: 'El nombre debe ser un string'})
    readonly titulo: string;
}