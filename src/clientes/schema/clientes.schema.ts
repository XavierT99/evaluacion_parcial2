import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    clientesname: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

ClientesSchema.index({ email: 1 }, { unique: true });
ClientesSchema.index({ clientesname: 1 }, { unique: true });
