import Image from "next/image"
import { Inoticias } from "@/src/Interfaces/Inoticias"

interface NoticiasProps{
    noticia: Inoticias,
    refCallback: (el: HTMLDivElement | null) => void
}
const BlocoNoticia = ({noticia, refCallback} : NoticiasProps ) => {
    return(
        <div ref={refCallback} className=" max-w-7xl h-dvh px-4 py-4  space-y-4 sm:px-6 lg:px-8 bg-white rounded-md m-2 snap-start">
            <h3 className="text-lg font-semibold text-gray-900 text-center ">
                {noticia.title} 
            </h3>
            <img className="rounded-2xl" src={noticia.urlToImage} alt={noticia.title} />
            <p className="mt-2 text-gray-700 text-justify">  
                {noticia.description}
            </p>
            <div className=" max-h-dvw flex p-2 items-center justify-around">
                <button className="bg-blue-500 text-white w-1/3 rounded-2xl ">Salvar</button>
                <button className="bg-blue-500 text-white w-1/3 rounded-2xl">Ler</button>
            </div>

        </div>
    )
}

export default BlocoNoticia