'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"


export default function PerfilDoUsuario(){

    const {data: session, status} = useSession()



    if(status === "authenticated"){

    return(
        <main className="min-h-[calc(100vh-56px)] bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
            <section className="mx-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex justify-center items-center flex-col w-full h-40 py-1.5">
                    <div className=" border bg-gray-200 h-24 w-24 rounded-full ">

                    </div>
                    <div className="p-4">
                         <h3 className="text font-bold text-black">Nome do usuario</h3>
                    </div>
                </div>

         <form className="space-y-5" action="#" method="post" >            

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-800">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
              disabled
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="telefone" className="text-sm font-medium text-gray-800">
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
              disabled
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="assuntos" className="text-sm font-medium text-gray-800">
              Assuntos de interesse
            </label>
            <textarea
              id="assuntos"
              name="assuntos"
              className="min-h-28 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
              disabled
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Editar 
          </button>

          
        </form>
            </section>
        </main>

    )
  }

  if(status === "unauthenticated"){
    <p>nao logado</p>
  }
}