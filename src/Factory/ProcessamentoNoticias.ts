import  {NextResponse} from 'next/server';
import axios from 'axios';
import type {Inoticias} from "@/src/Interfaces/Inoticias"
import type { InoticiasProcessadas } from '@/src/Interfaces/InoticiasProcessadas';
import plg from "compromise"

const chave = process.env.NEWS_API_KEY;

const createSlug = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export async function Processador(){
  try {
      const response = await axios.get<{articles: Inoticias[] }>(`https://newsapi.org/v2/everything?q=brasil AND (economia)&language=pt&apiKey=867c959218ce48dda9d9704297061c66`)
      const noticias : Inoticias[] = response.data?.articles

      
      const noticiasProcessadas: InoticiasProcessadas[] = noticias.map((artigo) => {
          return {
            id: Buffer.from(artigo.url).toString("base64").substring(0, 16),
            slug: createSlug(artigo.title),
            author: artigo.source.name,
            title: artigo.title,
            description: artigo.description,
            url: artigo.url,
            urlToImage: artigo.urlToImage,
            publishedAt: new Date(artigo.publishedAt),
            tags: ["artigo", "teste"]
            
          }
      })

      noticiasProcessadas.map(artigos => {
            var titutlo = plg(artigos.description)
            console.log(titutlo.json())
      })

      
     return NextResponse.json(noticiasProcessadas)
  } catch (error) {
    console.log(error)
      return NextResponse.json({message: "erro de busca"})
  }
  
}

Processador()