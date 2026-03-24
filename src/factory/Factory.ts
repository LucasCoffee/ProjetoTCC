import modelUsuario from "@/src/DataBase/Models/ModelUsuario";
import { ControllerUsuario } from "@/src/Controllers/ControllerUsuario";
import { ServiceUsuario } from "@/src/Services/ServicesUsuario";
import { RepositoryUsuario } from "@/src/Repositories/RepositoryUsuario";

const repositoryUsuario = new RepositoryUsuario(modelUsuario)
const serviceUsuario = new ServiceUsuario(repositoryUsuario)
const controllerUsuario = new ControllerUsuario(serviceUsuario)

export { controllerUsuario }
