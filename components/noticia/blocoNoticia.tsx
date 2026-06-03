"use client"
import { Inoticias } from "@/src/Interfaces/Inoticias"
import Link from "next/link"
import { useState } from "react"

export default function BlocoNoticia({
  noticia,
  refCallback
}: {
  noticia: Inoticias
  refCallback: (el: HTMLDivElement | null) => void
}) {
  const [salva, setSalva] = useState(false)

  const handleSalvar = async () => {
    // integração com a rota de salvar virá depois
    setSalva(!salva)
  }

  const iniciais = noticia.author?.slice(0, 2).toUpperCase() ?? "??"

  return (
    <div
      ref={refCallback}
      className="w-full shrink-0 bg-white rounded-2xl flex flex-col overflow-hidden snap-center"
      style={{ height: "calc(100vh - 120px)" }}
    >
      {/* IMAGEM */}
      <div className="w-full h-56 flex-none relative bg-[#1a1a2e] overflow-hidden">
        {noticia.urlToImage ? (
          <img
            src={noticia.urlToImage}
            alt={noticia.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/10 text-5xl">
            <i className="ti ti-photo" aria-hidden="true" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* FONTE */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center text-white text-[11px] font-medium flex-none">
            {iniciais}
          </div>
          <span className="text-xs font-medium text-gray-500">{noticia.author}</span>
        </div>
        <span className="text-[11px] text-gray-400">
          {new Date(noticia.publishedAt).toLocaleDateString("pt-BR")}
        </span>
      </div>

      {/* TAGS */}
      {noticia.tags?.assuntos?.length > 0 && (
        <div className="flex gap-1.5 px-4 pt-2.5 flex-wrap">
          {noticia.tags.assuntos.slice(0, 2).map((assunto, i) => (
            <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
              {assunto}
            </span>
          ))}
          {noticia.tags.entidades?.slice(0, 2).map((entidade, i) => (
            <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700">
              {entidade}
            </span>
          ))}
        </div>
      )}

      {/* TÍTULO */}
      <h3 className="text-[17px] font-medium text-gray-900 leading-snug tracking-tight px-4 pt-2.5">
        {noticia.title}
      </h3>

      {/* DESCRIÇÃO */}
      <p className="text-[13px] text-gray-500 leading-relaxed px-4 pt-2 line-clamp-4">
        {noticia.description}
      </p>

      {/* SENTIMENTO */}
      {noticia.tags?.sentimento && (
        <div className="flex items-center gap-2 px-4 pt-2.5">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
            Sentimento
          </span>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full
            ${noticia.tags.sentimento.classificacao === "positivo" ? "bg-green-50 text-green-700" :
              noticia.tags.sentimento.classificacao === "negativo" ? "bg-red-50 text-red-700" :
              "bg-gray-100 text-gray-500"}`}>
            {noticia.tags.sentimento.classificacao}
          </span>
          {noticia.tags.sentimento.alvo && (
            <span className="text-[11px] text-gray-400">
              sobre {noticia.tags.sentimento.alvo}
            </span>
          )}
        </div>
      )}

      <div className="flex-1" />

      {/* AÇÕES */}
      <div className="flex gap-2 px-4 pb-6 pt-3 border-t border-gray-100">
        <button
          onClick={handleSalvar}
          className={`flex-1 h-10 rounded-xl text-[13px] font-medium flex items-center justify-center gap-1.5 border transition-all
            ${salva
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-900 border-gray-200"}`}
        >
          <i className={`ti ${salva ? "ti-bookmark-filled" : "ti-bookmark"}`} aria-hidden="true" />
          {salva ? "Salva" : "Salvar"}
        </button>
        <Link
          href={noticia.url}
          target="_blank"
          className="flex-1 h-10 rounded-xl bg-gray-900 text-white text-[13px] font-medium flex items-center justify-center gap-1.5"
        >
          <i className="ti ti-external-link" aria-hidden="true" />
          Ler matéria
        </Link>
      </div>
    </div>
  )
}