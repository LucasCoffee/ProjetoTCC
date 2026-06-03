// components/PaginaInicial/SecaoCategoria.tsx
import { Inoticias } from "@/src/Interfaces/Inoticias"
import CardNoticia from "./CardNoticia"

const cores: Record<string, string> = {
  economia: "bg-blue-700",
  politica: "bg-green-700",
  geral:    "bg-gray-500",
}

interface Props {
  categoria: "economia" | "politica" | "geral"
  noticias: Inoticias[]
}

export default function SecaoCategoria({ categoria, noticias }: Props) {
  if (!noticias.length) return null

  return (
    <div>
      <div className="flex items-center px-4 pt-5 pb-2">
        <span className={`text-[11px] font-medium text-white px-3 py-0.5 rounded-full ${cores[categoria]}`}>
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
        </span>
        <span className="ml-auto text-[11px] text-gray-400 cursor-pointer">ver tudo</span>
      </div>
      <div className="flex gap-2.5 px-3 overflow-x-auto scrollbar-hide pb-1">
        {noticias.slice(0, 3).map(n => (
          <CardNoticia key={n._id} noticia={n} />
        ))}
      </div>
    </div>
  )
}