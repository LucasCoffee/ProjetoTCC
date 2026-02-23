import mongoose, {Model, Schema } from "mongoose";
import { usuario } from "@/src/Interfaces/IUsuario";

const SchemaUsuario = new Schema<usuario>({
    nome: String,
    email: String,
    telefone: Number,
    assuntos: [String],
    codigoAcesso: String
})

const modelUsuario: Model<usuario> = mongoose.models.usuario 
                        || mongoose.model<usuario>("usuario", SchemaUsuario, "UsuarioCliente")
export default modelUsuario  