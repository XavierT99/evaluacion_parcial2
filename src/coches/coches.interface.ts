import { IAlquileres } from "src/alquileres/alquileres.interfaces";
import { IClientes } from "src/clientes/clientes.interfaces";

export interface ICoches extends Document {
    titulo: string;
    alquileres: IAlquileres[];
    clientes: IClientes;
}