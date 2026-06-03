// components/base/BottomNav.tsx
"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const itens = [
  { href: "/",        label: "Início",  icon: "ti-home"     },
  { href: "/feed",    label: "Feed",    icon: "ti-rss"      },
  { href: "/salvos",  label: "Salvos",  icon: "ti-bookmark" },
  { href: "/perfil",  label: "Perfil",  icon: "ti-user"     },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 flex items-center justify-around h-14 pb-1">
      {itens.map(item => {
        const ativo = pathname === item.href
        return (
          <Link key={item.href} href={item.href} className="flex flex-col items-center gap-0.5 flex-1">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xl
              ${ativo ? "bg-gray-900 text-white" : "text-gray-400"}`}>
              <i className={`ti ${item.icon}`} aria-hidden="true" />
            </div>
            <span className={`text-[10px] ${ativo ? "text-gray-900 font-medium" : "text-gray-400"}`}>
              {item.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}