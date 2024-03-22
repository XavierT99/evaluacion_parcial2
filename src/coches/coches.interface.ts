import { IAlquileres } from "src/alquileres/alquileres.interface";
import { IClientes } from "src/clientes/clientes.interface";

export interface ICoches extends Document {
    titulo: string;
    alquileres: IAlquileres[];
    clientes: IClientes;
}