import mongoose from "mongoose";

export const ClientesSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    cedula: [{type: mongoose.Schema.Types.ObjectId, ref: 'cedula'}],
    edad: {type: mongoose.Schema.Types.ObjectId, ref: 'edad'}
},{
    timestamps: true
});