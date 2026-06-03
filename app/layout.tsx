// app/layout.tsx
import type { Metadata } from "next"
import Header from "@/components/base/header"
import BottomNav from "@/components/base/BottomNav"
import "./globals.css"

export const metadata: Metadata = {
  title: "Noticiador",
  description: "Notícia que você precisava",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <BottomNav /> 
      </body>
    </html>
  )
}