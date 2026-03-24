import { Controller } from "./Controller";
import { ServiceUsuario } from "../Services/ServicesUsuario";
import { usuario } from "../Interfaces/IUsuario";

export class ControllerUsuario extends Controller<usuario>{
    constructor(service: ServiceUsuario) {
    super(service)
  }
}