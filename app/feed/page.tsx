"use client"

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation"; // Alterado para ler os parâmetros no cliente
import { Inoticias } from "@/src/Interfaces/Inoticias";
import ContainerNoticias from "@/components/feed/ContainerNoticias";
import { useNoticiasVistas } from "@/src/hooks/useNoticiasVistas";

function Feed() { // Removida a prop searchParams daqui
    const [noticias, setNoticias] = useState<Inoticias[]>([])
    const { vistas, marcarComoVista, carregado } = useNoticiasVistas()
    const blocosRef = useRef<HTMLElement[]>([])
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Captura o valor de ?sessao= da URL de forma reativa no cliente
    const searchParams = useSearchParams();
    const sessao = searchParams.get("sessao") || "geral";

    // Dentro do seu useEffect no arquivo do Feed:
useEffect(() => {
    if (!carregado) return

    async function buscarNoticias() {
        try {
            // Montamos os parâmetros de busca encadeados corretamente
            const queryVistas = vistas.length ? `&vistos=${vistas.join(",")}` : "";
            
            // Enviamos ?sessao=categoria&vistos=1,2,3
            const request = await fetch(`/api/news/everything?sessao=${sessao}${queryVistas}`);
            
            // Proteção básica: se a resposta não for OK, evita rodar o .json() que causa o crash
            if (!request.ok) {
                console.error("A API do Next retornou status bizarro:", request.status);
                return;
            }

            const response = await request.json();
            setNoticias(response.noticias || []);

        } catch (e) {
            console.error("Erro ao buscar notícias no front-end", e);
        }
    }

    buscarNoticias();

}, [carregado, sessao, vistas]);


    useEffect(() => {
        if (!noticias || noticias.length === 0) return

        const timeout = setTimeout(() => {
            observerRef.current = new IntersectionObserver(
                (entradas) => {
                    entradas.forEach((entrada) => {
                        if (entrada.isIntersecting) {
                            const el = entrada.target as HTMLElement
                            const id = el.getAttribute("data-id")

                            if (id) marcarComoVista(id)
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
        
        return () => {
            clearTimeout(timeout)
            observerRef.current?.disconnect() // Adicionado disconnect limpo
        }

    }, [noticias])

    const registrarBloco = (el: HTMLElement | null, index: number) => {
        if (!el) return;
        blocosRef.current[index] = el;
    };

    return (
        <ContainerNoticias noticias={noticias} registroDeBlocos={registrarBloco} />
    )
}

export default Feed;
