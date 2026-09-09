'use client'
import { useAuth } from "@/src/hooks/useAuth"
import { useEffect, useState } from "react"

interface IUsuario {
  nome: string
  email: string
  telefone: string
  preferencias: string[]
}

export default function PerfilDoUsuario() {
  const { logado, logout, carregado, token } = useAuth()
  const [usuario, setUsuario] = useState<IUsuario | null>(null)

  // ✅ useEffect ANTES de qualquer return condicional
  useEffect(() => {
    if (!logado || !token) return

    async function buscarInfoUsuario() {
      try {
        const response = await fetch("/api/usuario/perfil", {
          headers: {
            Authorization: `Bearer ${token}` // ✅ envia o token
          }
        })
        
        const data = await response.json()
        setUsuario(data)
      } catch (error) {
        console.error("Erro ao buscar perfil:", error)
      }
    }

    buscarInfoUsuario()
  }, [logado, token]) // ✅ roda quando logado ou token mudar

  if (!carregado) return null
  if (!logado) return null

  return (
    <main className="min-h-[calc(100vh-56px)] bg-gray-50 px-4 py-6">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        {/* Avatar e nome */}
        <div className="flex justify-center items-center flex-col w-full py-6">
          <div className="border bg-gray-200 h-24 w-24 rounded-full flex items-center justify-center text-2xl font-medium text-gray-500">
            {usuario?.nome?.slice(0, 2).toUpperCase() ?? "??"}
          </div>
          <h3 className="mt-4 font-medium text-gray-900 text-base">
            {usuario?.nome ?? "Carregando..."}
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-gray-500">E-mail</label>
            <input
              type="email"
              value={usuario?.email ?? ""}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none"
              disabled
              readOnly
            />
          </div>

          <div className="space-y-1">
            <label className="text-[12px] font-medium text-gray-500">Telefone</label>
            <input
              type="tel"
              value={usuario?.telefone ?? ""}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none"
              disabled
              readOnly
            />
          </div>

          <div className="space-y-1">
            <label className="text-[12px] font-medium text-gray-500">Assuntos de interesse</label>
            <textarea
              value={usuario?.preferencias?.join(", ") ?? ""}
              className="min-h-28 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none"
              disabled
              readOnly
            />
          </div>

          <button
            className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white"
          >
            Editar perfil
          </button>

          <button
            onClick={logout}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-500"
          >
            Sair da conta
          </button>
        </div>
      </section>
    </main>
  )
}