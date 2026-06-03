import  {NextResponse} from 'next/server';
import type {Inoticias} from "@/src/Interfaces/Inoticias"

export async function GET(){
  try {
      const response = await fetch("http://172.17.0.1:8080/noticias") 


      if(response.status == 200){ 
        const noticias : Inoticias[] = await response.json()
        return NextResponse.json(noticias)
      }else{
        console.log("Erro no everthing")
        return NextResponse.json({
          message: "Desculpe não foi possivel encontrar noticias no momento"}, 
        {status: 400})
      }
      
  } catch (error) {
      console.log(error)
      return NextResponse.json({message: "Desculpe não foi possivel encontrar noticias no momento"})
  }
  
}