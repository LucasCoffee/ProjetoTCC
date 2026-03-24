import  {NextResponse} from 'next/server';
import axios from 'axios';
import type {Inoticias} from "@/src/Interfaces/Inoticias"
import type { InoticiasProcessadas } from '@/src/Interfaces/InoticiasProcessadas';
import enviarParaTokenizacao from '@/src/n8n/ComunicaoN8N';
const chave = process.env.NEWS_API_KEY;

const createSlug = (text: string) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
export async function GET(){
  try {
      const response = await axios.get<{articles: Inoticias[] }>(`https://newsapi.org/v2/everything?q=brasil AND (economia)&language=pt&apiKey=${chave}`)
      if(response.status == 200){
        const noticias : Inoticias[] = response.data?.articles
        const noticiasProcessadas: InoticiasProcessadas[] = noticias.map((artigo) => {
            return {
              id: Buffer.from(artigo.url).toString("base64").substring(0, 16),
              slug: artigo.title,
              author: artigo.source.name,
              title: artigo.title,
              description: artigo.description,
              url: artigo.url,
              urlToImage: artigo.urlToImage,
              publishedAt: new Date(artigo.publishedAt),
              tags: []
              
            }
        })


        enviarParaTokenizacao(noticiasProcessadas)

        
        return NextResponse.json(noticiasProcessadas)

      }else{
        console.log("Erro no everthing")
        return NextResponse.json({message: "erro de busca"})
      }
      
  } catch (error) {
      console.log(error)
              console.log("Erro no everthing")

      return NextResponse.json({message: "erro de busca"})
  }
  
}