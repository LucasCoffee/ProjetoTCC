import { NextRequest, NextResponse } from 'next/server';
import type { Inoticias } from "@/src/Interfaces/Inoticias";

export async function GET(req: NextRequest) {
  try {
      // 1. Pega o parâmetro. Se não existir, define como string vazia "" em vez de um objeto {}
      const vistos = req.nextUrl.searchParams.get("vistos") ?? "";

      // 2. Monta a URL de forma limpa. Se estiver vazio, o back-end receberá ?vistos=
      const response = await fetch(`http://172.17.0.1:8080/noticias?vistos=${vistos}`); 

      if (response.status === 200) { 
        const noticias: Inoticias[] = await response.json();
        return NextResponse.json(noticias);
      } else {
        console.log("Erro na API externa:", response.status);
        return NextResponse.json(
          { message: "Desculpe, não foi possível encontrar notícias no momento" }, 
          { status: response.status } // Passa o status real vindo do back-end
        );
      }
      
  } catch (error) {
      console.log("Erro na rota GET do Next.js:", error);
      return NextResponse.json(
        { message: "Desculpe, não foi possível encontrar notícias no momento" },
        { status: 500 }
      );
  }
}
