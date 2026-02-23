import { IRepository } from "../Interfaces/IRespository"
export class Service<T>{
    constructor(private repository: IRepository<T>){}
    async create(data: Partial<T>): Promise<T>{
        try {
            return this.repository.create(data) 
        } catch (error) {
            throw new Error(`${error}`)
        }
    }

    async find(filter: any): Promise<T[]>{
        try {
            return this.repository.find(filter) 
        } catch (error) {
            throw new Error(`${error}`)
        }
        
    }

    async findById(id: string): Promise<T | null>{
        try {
            return this.repository.findById(id) 
        } catch (error) {
            throw new Error(`${error}`)
        }
       
    }

    async findByIdAndUpdate(id: string, data: Partial<T>): Promise<T | null>{
        try {
            return await this.repository.findByIdAndUpdate(id, data)
        } catch (error) {
            throw new Error(`${error}`)
        }
    
    }

    async findByIdAndDelete(id: string, data: Partial<T>): Promise<T | null> {
        try {
            return await this.repository.findByIdAndUpdate(id, data)
        } catch (error) {
            throw new Error(`${error}`)
        }
    }
}

