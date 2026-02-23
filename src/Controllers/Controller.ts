export class Controller<T>{
    constructor(private service: any){}

    async create(data: Partial<T>){
        return this.service.create(data) 
    }

    async find(){
        return this.service.find()
    }

    async findById(id: string){
        return this.service.findById(id)
    }

    async findByIdAndUpdate(id: string, data: Partial<T>) {
    return await this.service.findByIdAndUpdate(id, data)
    }

    async findByIdAndDelete(id: string) {
        return await this.service.findByIdAndDelete(id)
    }
}