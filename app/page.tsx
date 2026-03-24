import ContainerTopicos from "@/components/PaginaInicia/containerTopicos";
import Footer from "@/components/base/footer";
import dados from "./noti.json"


export default function Home() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="flex justify-center max-w text-3xl font-bold text-gray-900">Bem-vindo ao TCC</h1>
          <p className="text-center mt-1 text-gray-700">
            Encontrei aqui a informacao que você precisava!
          </p>
        </div>
      </section>
      <section>
        <ContainerTopicos noticias={dados}></ContainerTopicos>
        <ContainerTopicos noticias={dados}></ContainerTopicos>
        <ContainerTopicos noticias={dados}></ContainerTopicos> 
      </section>
      <Footer/>
    </>
    
  )
}