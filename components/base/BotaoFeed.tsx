"use client"

import Link from "next/link"
import Image from "next/image"
import icone from "@/public/feeds.png"

function BotaoFeed() {
    return (
        <Link 
            href="/feed" 
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-transform active:scale-77"
        >
            <div className="flex flex-col items-center justify-center bg-blue-600 text-white px-10 py-4 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm min-w-[140px]">
                
                <div className="relative h-8 w-8 mb-2">
                    <Image 
                        src={icone} 
                        alt="icone do mundo" 
                        fill
                        className="object-contain"
                    />
                </div>

                <p className="text-sm font-bold tracking-widest uppercase">
                    feed
                </p>
            </div>
        </Link>
    )
}

export default BotaoFeed