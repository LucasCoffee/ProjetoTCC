import { useState, useEffect } from "react";

const CHAVE = "noticias_vistas"
const LIMITE = 100

export function useNoticiasVistas(){
    const [vistas, setVistas] = useState<string[]>([])
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
    const salvas = localStorage.getItem(CHAVE)
    if (salvas) setVistas(JSON.parse(salvas))
    setCarregado(true)
  }, [])

  function marcarComoVista(id: string) {
    console.log(id)
    
    setVistas(prev => {
      const atualizadas = [...new Set([...prev, id])]
      const limitadas = atualizadas.slice(-LIMITE)
      localStorage.setItem(CHAVE, JSON.stringify(limitadas))
      return limitadas
    })
  }

  function limparVistas() {
    localStorage.removeItem(CHAVE)
    setVistas([])
  }

  return { vistas, marcarComoVista, limparVistas, carregado}
}