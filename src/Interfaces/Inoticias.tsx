// src/Interfaces/Inoticias.ts
export interface Inoticias {
  _id: string
  title: string
  description: string
  author: string
  url: string
  urlToImage: string
  publishedAt: string
  slug: string
  hash: string
  tags: {
    assuntos: string[]
    entidades: string[]
    referencias: string[]
    sentimento?: {
      classificacao: "positivo" | "negativo" | "neutro"
      alvo: string
    }
  }
}