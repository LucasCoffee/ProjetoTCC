import { Service } from "./Services";
import {RepositoryUsuario} from "../Repositories/RepositoryUsuario";

export class ServiceUsuario<RepositoryUsuario> extends Service<RepositoryUsuario>{
    constructor(repository: RepositoryUsuario)
    super(repository)
}