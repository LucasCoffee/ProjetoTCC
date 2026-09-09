// app/page.tsx
import HeroDestaque from "@/components/PaginaInicial/HeroDestaque"
import SecaoCategoria from "@/components/PaginaInicial/SecaoCategoria"
import { Inoticias } from "@/src/Interfaces/Inoticias"

interface NoticiasSessao{

  economia: [Inoticias],
  politica : [Inoticias],
  geral: [Inoticias]
}

async function getNoticias(): Promise<NoticiasSessao> {
  const res = await fetch(`http://localhost:3000/api/news/home`, { cache: "no-store" })
  const data = await res.json()
  return data ?? []
}
export default async function Home() {
  const noticias: NoticiasSessao = await getNoticias()

  const destaque = noticias.economia[0] ?? noticias.geral[0]
  return (
    <main className="bg-gray-50 pb-20"> 
      <HeroDestaque noticia={destaque} />
      <SecaoCategoria categoria="economia" noticias={noticias.economia} />
      <div className="mx-4 border-t border-gray-100" />
      <SecaoCategoria categoria="politica" noticias={noticias.politica} />
      <div className="mx-4 border-t border-gray-100" />
      <SecaoCategoria categoria="geral" noticias={noticias.geral} />
    </main>
  )
}