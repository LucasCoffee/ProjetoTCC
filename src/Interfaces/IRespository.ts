import { Models } from "mongoose";

export interface IRepository<T>{
    create(data: Partial<T>): Promise<T>
    find(filter: any): Promise<T[]>
    findById(id: string, projection?: any): Promise<T | null>
    findByIdAndUpdate(id: string, data: Partial<T>): Promise<T | null>
    findByIdAndDelete(id: string): Promise<T | null>
}