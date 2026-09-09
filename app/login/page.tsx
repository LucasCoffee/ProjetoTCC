// app/login/page.tsx
"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)
  const [codigo, setCodigo] = useState("")
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)

  async function handleLogin() {
    if (!email) return setErro("Informe seu e-mail")
    setErro("")
    setCarregando(true)
    try {
      const res = await fetch("/api/usuario/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })
      if (!res.ok) {
        const data = await res.json()
        return setErro(data.message ?? "E-mail não encontrado")
      }
      setEnviado(true)
    } catch {
      setErro("Erro ao conectar com servidor. Tente novamente.")
    } finally {
      setCarregando(false)
    }
  }

  async function handleVerificar() {
    if (!codigo) return setErro("Informe o código recebido")
    setErro("")
    setCarregando(true)
    try {
      const res = await fetch("/api/usuario/verificar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, codigo })
      })
      const data = await res.json()
        
      localStorage.setItem("token", data.token)

      if (!res.ok) return setErro(data.message ?? "Código inválido")
      router.push("/perfil")
    } catch {
      setErro("Erro ao verificar. Tente novamente.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="flex flex-col min-h-screen px-6 bg-gray-50 pb-20">
      <div className="flex items-center h-14">
        <button onClick={() => router.back()} className="text-gray-400 text-xl">
          <i className="ti ti-arrow-left" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <h1 className="text-[20px] font-medium text-gray-900 tracking-tight mb-1">
          {enviado ? "Verifique seu e-mail" : "Entrar"}
        </h1>
        <p className="text-[13px] text-gray-400 leading-relaxed mb-8">
          {enviado
            ? `Enviamos um código para ${email}. Informe abaixo para continuar.`
            : "Informe seu e-mail para receber o código de acesso."}
        </p>

        {!enviado ? (
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => { setEmail(e.target.value); setErro("") }}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 outline-none focus:border-gray-400"
            />
            {erro && <p className="text-[12px] text-red-500">{erro}</p>}
            <button
              onClick={handleLogin}
              disabled={carregando}
              className="w-full h-12 rounded-xl bg-gray-900 text-white text-[14px] font-medium disabled:opacity-50"
            >
              {carregando ? "Enviando..." : "Enviar código"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="00000"
              maxLength={5}
              value={codigo}
              onChange={e => { setCodigo(e.target.value); setErro("") }}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-[14px] text-gray-900 outline-none focus:border-gray-400 tracking-widest text-center"
            />
            {erro && <p className="text-[12px] text-red-500">{erro}</p>}
            <button
              onClick={handleVerificar}
              disabled={carregando}
              className="w-full h-12 rounded-xl bg-gray-900 text-white text-[14px] font-medium disabled:opacity-50"
            >
              {carregando ? "Verificando..." : "Confirmar"}
            </button>
            <button
              onClick={() => { setEnviado(false); setCodigo(""); setErro("") }}
              className="text-[12px] text-gray-400 text-center"
            >
              Usar outro e-mail
            </button>
          </div>
        )}
      </div>
    </main>
  )
}