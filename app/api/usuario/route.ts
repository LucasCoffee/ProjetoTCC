import { NextResponse } from "next/server";
import {controllerUsuario} from "@/src/factory/Factory";
import { usuario } from "../../../src/Interfaces/IUsuario";

export async function GET() {
        
    const result =  await controllerUsuario.find()
    console.log(result)

    return NextResponse.json(result)

}

export async function POST(request: Request) {
    const {nome, email, telefone, assuntos, codigoAcesso} = await request.json()

    const usuarioObjetc: usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        assuntos: assuntos,
        codigoAcesso: codigoAcesso
    }

    try {
        const result = await controllerUsuario.create(usuarioObjetc)
    } catch (error) {
        
    }

    
    
    return NextResponse.json("OK")
}