"use client"

import { useEffect, useRef, useState} from "react";
import { Inoticias } from "@/src/Interfaces/Inoticias";
import ContainerNoticias from "@/components/feed/ContainerNoticias";
import { useNoticiasVistas } from "@/src/hooks/useNoticiasVistas";
function Feed(){

    const [noticias, setNoticias] = useState<Inoticias[]>([])
    const { vistas, marcarComoVista, carregado } = useNoticiasVistas()
    const blocosRef = useRef<HTMLElement[]>([])
    const observerRef = useRef<IntersectionObserver | null>(null);
    
    useEffect(() =>  {
            if (!carregado) return

        async function buscarNoticias() {
            try {

                const params = vistas.length ? `?vistos=${vistas.join(",")}` : ""
                      console.log("buscando com params:", params) // deve mostrar os ids agora
                const request = await fetch(`/api/news/everything${params}`)

                const response = await request.json()

                setNoticias(response.noticias)

            } catch (e) {
                console.error("Erro ao buscar notícias", e);
            }
        }

        buscarNoticias()

    }, [carregado])

    useEffect(() => {

        if(noticias?.length == 0) return

    const timeout = setTimeout(() => {

        observerRef.current = new IntersectionObserver(
            (entradas) => {
                entradas.forEach((entrada) => {
                    if(entrada.isIntersecting){
                        const el = entrada.target as HTMLElement
                        const id = el.getAttribute("data-id")
        
                      if(id) marcarComoVista(id)
                    }
                }) 
            },

             { threshold: 0.7 }
        )
        
        const observer = observerRef.current
        blocosRef.current.forEach((bloco) => {
            
        if (bloco) observer.observe(bloco);
     });

    }, 100)
        return () =>
            {clearTimeout(timeout)
            observerRef.current?.disconnect()}

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