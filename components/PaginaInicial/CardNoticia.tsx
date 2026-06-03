// components/PaginaInicial/CardNoticia.tsx
import { Inoticias } from "@/src/Interfaces/Inoticias"
import Link from "next/link"

export default function CardNoticia({ noticia }: { noticia: Inoticias }) {
  return (
    <Link href={`/noticia/${noticia.slug}`}
      className="flex-none w-40 bg-white rounded-2xl border border-gray-100 overflow-hidden block">
      <div className="w-full h-24 bg-gray-50 flex items-center justify-center text-gray-300 text-2xl overflow-hidden">
        {noticia.urlToImage
          ? <img src={noticia.urlToImage} alt={noticia.title}
              className="w-full h-full object-cover" />
          : <i className="ti ti-photo" aria-hidden="true" />
        }
      </div>
      <div className="p-2.5 pb-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400 mb-1">
          {noticia.author}
        </p>
        <p className="text-[12px] font-medium text-gray-900 leading-snug line-clamp-3 tracking-tight">
          {noticia.title}
        </p>
      </div>
    </Link>
  )
}