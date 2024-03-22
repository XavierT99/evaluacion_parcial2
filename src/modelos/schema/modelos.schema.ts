import mongoose from "mongoose";

export const ModelosSchema = new mongoose.Schema({
    nombre:{type:Date, required:true},
    marca:[{type:mongoose.Schema.Types.ObjectId, ref:'coches'}],
},{
    timestamps:true,
});