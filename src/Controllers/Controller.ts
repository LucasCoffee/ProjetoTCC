
export class Controller<T>{
    constructor(private service: any){}

    async criar(data: Partial<T>){
        return this.service.criar(data) 
    }

    async listarTodos(){
        return this.service.listarTodos()
    }

    async buscarPorId(id: string){
        return this.service.buscarPorId(id)
    }

    async atualizar(id: string, data: Partial<T>) {
    return await this.service.atualizar(id, data)
    }

    async deletar(id: string) {
        return await this.service.deletar(id)
    }
}