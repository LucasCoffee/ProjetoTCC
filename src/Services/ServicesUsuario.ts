import { Service } from "./Services"
import { RepositoryUsuario } from "../Repositories/RepositoryUsuario"
import { usuario } from "../Interfaces/IUsuario";


export class ServiceUsuario extends Service<usuario> {
  constructor(repository: RepositoryUsuario) {
    super(repository)
  }
}
