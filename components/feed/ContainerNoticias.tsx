
import BlocoNoticia from "@/components/noticia/blocoNoticia";
import { InoticiasProcessadas} from "@/src/Interfaces/InoticiasProcessadas";

interface IcontainerNoticias{
    noticias: InoticiasProcessadas[],
    registroDeBlocos: (parms1: HTMLDivElement | null, parms2: number ) => void;
}

export default function ContainerNoticias({noticias, registroDeBlocos} : IcontainerNoticias){
    return(
        <section className=" h-screen overflow-y-scroll snap-y snap-mandatory flex flex-col items-center">
            {
                noticias.map((noticia, index) => (
                    <BlocoNoticia 
                        refCallback={(el) => registroDeBlocos(el, index)} 
                        key={index} 
                        noticia={noticia}/>
                ))
            }
        </section>
    )
}