import BlocoNoticia from "@/components/noticia/blocoNoticia"
import { Inoticias } from "@/src/Interfaces/Inoticias"

export default function ContainerNoticias({ noticias,
  registroDeBlocos
}: {
  noticias: Inoticias[]
  registroDeBlocos: (el: HTMLDivElement | null, index: number) => void
}) 


{

  return (
    <section 
    className="h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col gap-2.5 px-3 py-3 bg-[#0a0a0a]"
    style={{ height: "calc(c55f53785ed5100vh - 100px)" }} 
    >  
      {
      noticias?.length > 0 || noticias?.length != undefined
        ? noticias.map((noticia, index) => (
            <BlocoNoticia
              key={noticia._id ?? index}
              noticia={noticia}
              refCallback={(el) => registroDeBlocos(el, index)}
            />
          ))
        : (
          <div className="h-screen flex items-center justify-center text-white/30 text-sm">
            Nenhuma notícia encontrada
          </div>
        )
      }
    </section>
  )
}