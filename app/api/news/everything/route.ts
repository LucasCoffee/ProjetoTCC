import { NextRequest, NextResponse } from 'next/server';
import type { Inoticias } from "@/src/Interfaces/Inoticias";


export async function GET(req: NextRequest) {

  
  try {
      const vistos = req.nextUrl.searchParams.get("vistos") ?? "";
      const sessao = req.nextUrl.searchParams.get("sessao") ?? "geral";

      const response = await fetch(`http://tcc-servidor-1:8080/noticias?sessao=${sessao}&vistos=${vistos}`); 

      if (response.status === 200) { 
        const noticias: Inoticias[] = await response.json();
        return NextResponse.json(noticias);
      } else {
        console.log("Erro na API externa:", response.status);
        return NextResponse.json(
          { message: "Desculpe, não foi possível encontrar notícias no momento" }, 
          { status: response.status }
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
