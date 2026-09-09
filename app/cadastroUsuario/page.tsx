// app/cadastro/page.tsx
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Cadastro() {
  const router = useRouter()
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" })
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)

  function handleChange(campo: string, valor: string) {
    setForm(prev => ({ ...prev, [campo]: valor }))
    setErro("")
  }

  async function handleCadastro() {
    if (!form.nome || !form.email) return setErro("Nome e e-mail são obrigatórios")
    setErro("")
    setCarregando(true)
    try {
      const res = await fetch("/api/usuario/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) return setErro(data.message ?? "Erro ao cadastrar")
      router.push("/login")
    } catch {
      setErro("Erro ao conectar. Tente novamente.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen px-6 bg-gray-50 pb-20">

      {/* Voltar */}
      <div className="flex items-center h-14">
        <button onClick={() => router.back()} className="text-gray-400 text-xl">
          <i className="ti ti-arrow-left" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <h1 className="text-[20px] font-medium text-gray-900 tracking-tight mb-1">
          Criar conta
        </h1>
        <p className="text-[13px] text-gray-400 leading-relaxed mb-8">
          Preencha os dados abaixo para criar sua conta no Noticiador.
        </p>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-[12px] font-medium text-gray-500 px-1">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={e => handleChange("nome", e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[12px] font-medium text-gray-500 px-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={e => handleChange("email", e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="telefone" className="text-[12px] font-medium text-gray-500 px-1">
              Telefone <span className="text-gray-300 font-normal">(opcional)</span>
            </label>
            <input
              id="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.telefone}
              onChange={e => handleChange("telefone", e.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 outline-none focus:border-gray-400"
            />
          </div>

          {/* Aviso código */}
          <div className="flex items-start gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-3 mt-1">
            <i className="ti ti-mail text-gray-400 text-[16px] mt-0.5 flex-none" aria-hidden="true" />
            <p className="text-[12px] text-gray-400 leading-relaxed">
              Você não precisará criar senha. O acesso é feito com um código enviado para o seu e-mail.
            </p>
          </div>

          {erro && <p className="text-[12px] text-red-500 px-1">{erro}</p>}

          <button
            onClick={handleCadastro}
            disabled={carregando}
            className="w-full h-12 rounded-xl bg-gray-900 text-white text-[14px] font-medium mt-1 disabled:opacity-50"
          >
            {carregando ? "Criando conta..." : "Criar conta"}
          </button>

          <button
            onClick={() => router.push("/login")}
            className="text-[12px] text-gray-400 text-center py-1"
          >
            Já tenho conta — entrar
          </button>
        </div>
      </div>
    </main>
  )
}