import Repository from "./Repository";
import modelUsuario from "../DataBase/Models/ModelUsuario";
import { usuario } from "../Interfaces/IUsuario";

export const RepositoryUsuario = new Repository<usuario>(modelUsuario)

 