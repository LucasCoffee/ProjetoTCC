import  {NextResponse} from 'next/server';
import axios from 'axios';
import type {Inoticias} from "@/src/Interfaces/Inoticias"

const chave = process.env.NEWS_API_KEY;

export async function GET(request : Request, content: {params: Promise<{assunto: string}>}){

    const { assunto } = await content.params

    try {
      const response = await axios.get<{articles: Inoticias[] }>(`https://newsapi.org/v2/top-headlines?q=${assunto}&pageSize=5&apiKey=${chave}`)
      const noticias : Inoticias[] = response.data?.articles
     return NextResponse.json(noticias)
  } catch (error) {
    console.log(error)
      return NextResponse.json({message: "erro de busca"})
  }
  
}