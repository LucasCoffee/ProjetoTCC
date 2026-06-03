// app/page.tsx
import HeroDestaque from "@/components/PaginaInicial/HeroDestaque"
import SecaoCategoria from "@/components/PaginaInicial/SecaoCategoria"
import { Inoticias } from "@/src/Interfaces/Inoticias"

async function getNoticias(): Promise<Inoticias[]> {
  const res = await fetch(`http://localhost:3000/api/news/everything`, { cache: "no-store" })
  if (!res.ok) return []
  const data = await res.json()
  return data.noticias ?? []
}

function filtrarPorAssunto(noticias: Inoticias[], assunto: string) {
  return noticias.filter(n =>
    n.tags?.assuntos?.some(a => a.toLowerCase().includes(assunto))
  )
}

export default async function Home() {
  const noticias = await getNoticias()

  console.log(noticias)

  const economia = filtrarPorAssunto(noticias, "econom")
  const politica = filtrarPorAssunto(noticias, "polít")
  const geral = noticias.filter(n =>
    !economia.includes(n) && !politica.includes(n)
  )

  const destaque = economia[0] ?? noticias[0]
  return (
    <main className="bg-gray-50 pb-20"> 
      <HeroDestaque noticia={destaque} />
      <SecaoCategoria categoria="economia" noticias={economia.slice(1)} />
      <div className="mx-4 border-t border-gray-100" />
      <SecaoCategoria categoria="politica" noticias={politica} />
      <div className="mx-4 border-t border-gray-100" />
      <SecaoCategoria categoria="geral" noticias={geral} />
    </main>
  )
}