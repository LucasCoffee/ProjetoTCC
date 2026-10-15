import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {

    const dados = await req.json()
    const response = await fetch(`http://tcc-servidor-1:8080/usuario/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      }
    )

    const data = await response.json()
    
    if (!response.ok) {
      return NextResponse.json(
        {message: data?.message ?? "Erro ao tentar realizar o login"},
        {status: response.status}
      )

    }

    return NextResponse.json(data)

  } catch (error) {
    return NextResponse.json(
      { message: "Desculpe, houve um erro interno ao realizar seu login" },
      { status: 500 }
    )
  }

}