import mongoose from "mongoose";

export const CochesSchema = new mongoose.Schema({
    modelo: {type: String, required: true},
    anio: [{type: mongoose.Schema.Types.ObjectId, ref: 'anio'}],
    color: {type: mongoose.Schema.Types.ObjectId, ref: 'color'}
},{
    timestamps: true
});