// app/acesso/page.tsx
"use client"
import { useRouter } from "next/navigation"

export default function Acesso() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-50 pb-20">

      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 text-3xl mb-5">
        <i className="ti ti-user" aria-hidden="true" />
      </div>

      <h1 className="text-[18px] font-medium text-gray-900 tracking-tight text-center mb-2">
        Acesse sua conta
      </h1>
      <p className="text-[13px] text-gray-400 text-center leading-relaxed mb-9 max-w-[280px]">
        Entre para salvar notícias e personalizar suas preferências de leitura.
      </p>

      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => router.push("/login")}
          className="w-full h-12 rounded-xl bg-gray-900 text-white text-[14px] font-medium flex items-center justify-center gap-2"
        >
          <i className="ti ti-login" aria-hidden="true" />
          Entrar
        </button>

        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[11px] text-gray-300">ou</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <button
          onClick={() => router.push("/cadastroUsuario")}
          className="w-full h-12 rounded-xl bg-white border border-gray-200 text-gray-900 text-[14px] font-medium flex items-center justify-center gap-2"
        >
          <i className="ti ti-user-plus" aria-hidden="true" />
          Criar conta
        </button>
      </div>

      <p className="text-[11px] text-gray-300 text-center mt-8 leading-relaxed">
        Ao continuar, você concorda com os termos de uso da plataforma.
      </p>
    </main>
  )
}