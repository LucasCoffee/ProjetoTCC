import { Inoticias } from "@/src/Interfaces/Inoticias"

export default function HeroDestaque({ noticia }: { noticia: Inoticias }) {
  return (
    <div className="mx-3 mt-3 rounded-2xl overflow-hidden relative h-48"
      style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)" }}>
      {noticia.urlToImage && (
        <img
          src={noticia.urlToImage}
          alt={noticia.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="inline-block text-[10px] font-medium tracking-widest uppercase
          bg-white/15 border border-white/25 text-white px-2 py-0.5 rounded-md mb-2">
          Destaque
        </span>
        <p className="text-white font-medium text-base leading-snug tracking-tight line-clamp-3">
          {noticia.title}
        </p>
        <p className="text-white/50 text-[11px] mt-2">{noticia.author}</p>
      </div>
    </div>
  )
}