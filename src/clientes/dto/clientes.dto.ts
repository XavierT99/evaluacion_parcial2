import { IsNotEmpty, IsString } from "class-validator";

export class ClientesDTO {
    @IsNotEmpty({message: 'El campo del título no puede estar vacío'})
    @IsString({message: 'El campo titulo debe ser de tipo string'})
    readonly titulo: string;
}