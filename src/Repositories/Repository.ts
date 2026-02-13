import { IRepository } from "../Interfaces/IRespository"
export class Repository<T>{
    constructor(private model: IRepository<T> ){
       
    }
    async criar(dados: Partial<T>): Promise<T>{
        try {
            return await this.model.create(dados)
        } catch (error) {
           throw new Error(`Erro no repository ao tentar criar entidade": ${String(error)}`)

        }
    }

    async listarTodos(): Promise<T[]>{
        try {
            return await this.model.find({})
        } catch (error) {
           throw new Error(`Erro no repository ao tentar listar todas entidades": ${String(error)}`)
        }
    }
    async buscarPorId(id: string, projecao?: any): Promise<T | null>{
        try {
            return await this.model.findById(id, projecao || {})
        } catch (error) {
           throw new Error(`Erro no repository ao tentar buscar por ID": ${String(error)}`)
        }
    }

    async atualizar(id: string, dados: Partial<T>): Promise<T | null>{
        try {
            return await this.model.findByIdAndUpdate(id, dados)
        } catch (error) {
           throw new Error(`Erro no repository ao tentar atualizar entidade": ${String(error)}`)
        }
    }

    async deletar(id: string){
        try {
            return await this.model.findByIdAndDelete(id)
        } catch (error) {
           throw new Error(`Erro no repository ao tentar deletar entidade": ${String(error)}`)
        }
    }
}

export default Repository