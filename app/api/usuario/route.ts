import { NextResponse } from "next/server";
import modelUsuario from "@/src/DataBase/Models/ModelUsuario";
import { ControllerUsuario } from "@/src/Controllers/ControllerUsuario";
import { ServiceUsuario } from "@/src/Services/ServicesUsuario";
import { RepositoryUsuario } from "@/src/Repositories/RepositoryUsuario";
import { NextApiRequest } from "next";

export async function GET() {
        const repository = new RepositoryUsuario(modelUsuario)
        const service = new ServiceUsuario(repository)
        const controller = new ControllerUsuario(service)
        
        const result = controller.find()

            return NextResponse.json(result)
}

export async function POST(request: Request) {
    const result = await request.json()
    console.log(result)
    
    return NextResponse.json("OK")
}