import { IClientes } from "src/clientes/clientes.interfaces";

export interface IModelos extends Document {
    marca: string;
    nombre: IClientes[];
}