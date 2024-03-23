import * as mongoose from 'mongoose';

export const ClienteSchema = new mongoose.Schema({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: Number, required: true },
  direccion: { type: String, required: true },
}, { timestamps: true });

ClienteSchema.index({ email: 1 }, { unique: true });

export interface Cliente extends mongoose.Document {
  id: string;
  nombre: string;
  email: string;
  telefono: number;
  direccion: string;
}

export const ClienteModel = mongoose.model<Cliente>('Cliente', ClienteSchema);
