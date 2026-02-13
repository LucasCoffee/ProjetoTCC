"use client"

import { useEffect, useRef, useState} from "react";
import { InoticiasProcessadas } from "@/src/Interfaces/InoticiasProcessadas";
import ContainerNoticias from "@/components/feed/ContainerNoticias";

function Feed(){

    const [noticias, setNoticias] = useState<InoticiasProcessadas[]>([])
    const blocosRef = useRef<HTMLElement[]>([])
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() =>  {
        
        async function buscarNoticias() {
            try {
                const request = await fetch("/api/news/everything")
                const response = await request.json()
                setNoticias(response)
            } catch (e) {
                console.error("Erro ao buscar notícias", e);
            }
        }
        buscarNoticias()
    }, [])

    useEffect(() => {

        if(noticias.length == 0) return

        observerRef.current = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if(entrada.isIntersecting){
                        console.log("movimentacao detectada", entrada.target)
                    }
                }) 
            } 
        )
        const observer = observerRef.current

        blocosRef.current.forEach((bloco) => {
        if (bloco) observer.observe(bloco);
    });
        
        return () => observer.disconnect();

    }, [noticias])

    const registrarBloco = (el: HTMLElement | null, index: number) => {
            if (!el) return;
            blocosRef.current[index] = el;
        };

    return(
        <ContainerNoticias noticias={noticias} registroDeBlocos={registrarBloco}/>
    )
}

export default Feed