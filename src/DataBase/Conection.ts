import mongoose from "mongoose"
var isConnected = false
export const connectToDatabase = async (): Promise<void> => {
    const URL = process.env.DB_CONN_STRING

    if (isConnected) return

    if (!URL) {
        throw new Error("DB_CONN_STRING não está definida")
    }

    try {
        await mongoose.connect(URL)
        console.log("Conectado ao banco com sucesso")
        isConnected = true
    } catch (error) {
        console.error("Erro ao tentar conectar com banco de dados")
        throw error
    }
}
