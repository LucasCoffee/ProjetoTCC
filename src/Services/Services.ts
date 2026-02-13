export class Service<T>{
    constructor(private repository: any){}

    async criar(data: Partial<T>){
        try {
            return this.repository.criar(data) 
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    async listarTodos(){
        try {
            return this.repository.listarTodos() 
        } catch (error) {
            throw new Error(`${error}`)
        }
        
    }

    async buscarPorId(id: string){
        try {
            return this.repository.buscarPorId(id) 
        } catch (error) {
            throw new Error(`${error}`)
        }
       
    }

    async atualizar(id: string, data: Partial<T>) {
        try {
            return await this.repository.atualizar(id, data)
        } catch (error) {
            throw new Error(`${error}`)
        }
    
    }

    async deletar(id: string) {
        try {
            return await this.repository.deletar(id)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}

