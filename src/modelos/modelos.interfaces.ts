import { IClientes } from "src/clientes/clientes.interface";

export interface IModelos extends Document {
    marca: string;
    nombre: IClientes[];
}