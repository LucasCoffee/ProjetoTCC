import { Controller } from "./Controller";
import { ServiceUsuario } from "../Services/ServicesUsuario";

export class ControllerUsuario<ServiceUsuario> extends Controller<ServiceUsuario>{
    constructor(service: ServiceUsuario) {
    super(service)
  }
}