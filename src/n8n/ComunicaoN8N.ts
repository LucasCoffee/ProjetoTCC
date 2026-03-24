import type { InoticiasProcessadas } from '@/src/Interfaces/InoticiasProcessadas';
import axios from 'axios';


export default async function enviarParaTokenizacao(noticias: InoticiasProcessadas[]){

    const TituloEDescricaoNoticias: any[] = []

    noticias.forEach(noticia => {
        const conjunto = 
            {  
                id: noticia.id,
                title: noticia.title,
                description: noticia.description,
                tags: noticia.tags
            }
        TituloEDescricaoNoticias.push(conjunto)
    })

    var teste = [TituloEDescricaoNoticias[0], TituloEDescricaoNoticias[1], TituloEDescricaoNoticias[2]]


    try {
       await axios.post(
        "https://lucasfirmino.app.n8n.cloud/webhook-test/noticias-economia",
        {noticias: teste}
    )
        console.log("Noticas foram enviadas pra o N8N")
        return true

    } catch (error) {
       console.log("Erro no processamento das noticias no N8N: " + error)
    }
}
