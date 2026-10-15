import  {NextRequest, NextResponse} from 'next/server';
import type {Inoticias} from "@/src/Interfaces/Inoticias"

export async function GET(req: NextRequest){
  try {
      const response = await fetch(`http://tcc-servidor-1:8080/noticias/home`) 
      if(response.status == 200){ 
        const noticias : Inoticias[] = await response.json()
        return NextResponse.json(noticias)
      }else{
        console.log("Erro no everthing")
        return NextResponse.json({
          message: "Desculpe não foi possivel encontrar noticias para a pagina inicial"}, 
        {status: 400})
      }
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({message: "Desculpe não foi possivel encontrar noticias no momento"})
  }
  
}