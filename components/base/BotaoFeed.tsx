"use client"

import Link from "next/link"
import Image from "next/image"
import icone from "@/public/feeds.png"

function BotaoFeed() {
    return (
        <Link 
            href="/feed" 
            className=""
        >
                <div className="relative h-8 w-8 mb-2">
                    <Image 
                        src={icone} 
                        alt="icone do mundo" 
                        fill
                        className="h-8 w-8"
                    />
                </div>

        </Link>
    )
}

export default BotaoFeed