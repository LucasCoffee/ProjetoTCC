export default function BlocoTopicosNoticia({noticia}: InoticiasTopicos){

    return (
        <div className="flex flex-col w-full h-72 snap-start px-2.5 flex-wrap flex-none overflow-hidden">
            <div className="relative w-full h-48">
                <img className="rounded-2xl w-full h-full object-cover" 
                    src={noticia.imagem} alt={noticia.titulo} />
            </div>
            <p className="pt-2 text-lg font-medium leading-tight line-clamp-2 ">{noticia.titulo}</p>
        </div>
    )

}