// src/hooks/useAuth.ts
"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const [token, setToken] = useState<string | null>(null)
  const [carregado, setCarregado] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    setToken(token)
    setCarregado(true)
  }, [])

  function logout() {
    localStorage.removeItem("token")
    setToken(null)
    router.push("/acesso")
  }

  const logado = !!token

  return { token, logado, logout, carregado }
}