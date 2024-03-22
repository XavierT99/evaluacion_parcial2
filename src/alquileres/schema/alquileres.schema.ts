import mongoose from "mongoose";

export const AlquileresSchema = new mongoose.Schema({
    nombre: {type: String, required: true}
},{
    timestamps: true,
});

AlquileresSchema.index({nombre: 1}, {unique: true});