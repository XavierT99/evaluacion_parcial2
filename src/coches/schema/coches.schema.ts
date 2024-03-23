import mongoose from 'mongoose';
export const CochesSchema = new mongoose.Schema(
  {
    marca: { type: String, required: true },
    anio: { type: String, required: true },
    color: { type: Date, required: true },
    clientes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientes' }],
  },
  {
    timestamps: true,
  },
);
