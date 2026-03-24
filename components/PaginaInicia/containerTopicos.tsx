import BlocoTopicosNoticia from "./blocoTopicosNoticia";

export default function ContainerTopicos({ noticias }: { noticias: Array<InoticiasTopicos> }) {

    return (
        <section className="">
            <div className="flex">
                <h2 className="text-lg font-semibold text-gray-900 ml-10 ">Esse é um tópico</h2>
            </div>
            <div className=" flex overflow-x-auto w-screen 
             scrollbar-hide py-1 space-x-1 snap-x snap-mandatory ">
                {noticias && noticias.length > 0 ? (
                    noticias.map((item, index) => (
                        <BlocoTopicosNoticia 
                            key={index} 
                            noticia={item.noticia}
                        />
                    ))
                ) : (
                    <h2>Nenhuma notícia encontrada</h2>
                )}
            </div>
        </section>
    );
}