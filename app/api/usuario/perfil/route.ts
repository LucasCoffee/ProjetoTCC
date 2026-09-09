// app/api/usuario/perfil/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("Authorization") // ✅ vem do frontend

    if (!token) {
      return NextResponse.json(
        { message: "Não autorizado" },
        { status: 401 }
      )
    }

    const response = await fetch(`http://172.17.0.1:8080/usuario/perfil`, {
      headers: {
        Authorization: token,          
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { message: data?.message ?? "Não foi possível carregar suas informações" },
        { status: response.status }
      )
    }

    return NextResponse.json(data)

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Desculpe, houve um erro interno. Tente novamente" },
      { status: 500 }
    )
  }
}