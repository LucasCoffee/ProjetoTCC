import Repository from "./Repository";
import modelUsuario from "../DataBase/Models/ModelUsuario";
import { usuario } from "../Interfaces/IUsuario";

 export class RepositoryUsuario extends Repository<usuario> {

  async create(data: Partial<usuario>): Promise<usuario>{
    return await modelUsuario.create(data)
  }
  async find(filter: any): Promise<usuario[]> {
    return await modelUsuario.find(filter)
  }
  async findById(id: string, projection: any):  Promise<usuario | null>{
    return await modelUsuario.findById(id, projection)
  }

  async findByIdAndUpdate(id: string, data: Partial<usuario>):  Promise<usuario | null>{
    return await modelUsuario.findByIdAndUpdate(id, data, { new: true })
  }

  async findByIdAndDelete(id: string):  Promise<usuario | null> {
    return await modelUsuario.findByIdAndDelete(id)
  }
}
