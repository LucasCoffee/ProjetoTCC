import Image from "next/image"
import { InoticiasProcessadas } from "@/src/Interfaces/InoticiasProcessadas"
import Link from "next/link"
import { FormEvent } from "react"

interface NoticiasProps{
    noticia: InoticiasProcessadas,
    refCallback: (el: HTMLDivElement | null) => void
}
const BlocoNoticia = ({noticia, refCallback} : NoticiasProps ) => {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
            
        const response = await fetch('', {
          method: 'POST',
          body: JSON.stringify({}),
        });
    }

    return(
        <div ref={refCallback} className=" w-full max-w-7xl h-screen shrink-0 mx-auto my-2 px-4 py-4 space-y-4 sm:px-6 bg-white rounded-md snap-center flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900 text-center ">
                {noticia.title} 
            </h3>
            <img className="rounded-2xl w-full max-h-[40vh]" src={noticia.urlToImage} alt={noticia.title} />
            <p className="mt-2 text-gray-700 text-justify">  
                {noticia.description}
            </p>
            <div className=" max-h-dvw flex p-2 items-center justify-around">
                <form method="post" action="" onClick={handleSubmit}>
                    <button className="bg-blue-500 text-white w-1/3 rounded-2xl ">Salvar</button>
                </form>
                <button className="bg-blue-500 text-white w-1/3 rounded-2xl"><Link href={noticia.url}>Ler</Link></button>
            </div>

        </div>
    )
}

export default BlocoNoticia