export default function Perfil() {
  return (
    <main className="min-h-[calc(100vh-56px)] bg-gray-100 px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <header className="mb-6 space-y-2">
          <h1 className="text-2xl font-bold text-gray-900">Cadastro de perfil</h1>
          <p className="text-sm text-gray-600 sm:text-base">
            Complete os dados para personalizar seus interesses e receber o código de autenticação por SMS.
          </p>
        </header>

        <form className="space-y-5" action="#" method="post">
          <div className="space-y-2">
            <label htmlFor="nome" className="text-sm font-medium text-gray-800">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite seu nome"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-800">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="voce@email.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
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
              placeholder="(00) 00000-0000"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="assuntos" className="text-sm font-medium text-gray-800">
              Assuntos de interesse
            </label>
            <textarea
              id="assuntos"
              name="assuntos"
              placeholder="Ex.: tecnologia, esportes, saúde..."
              className="min-h-28 w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
            <p className="text-xs text-gray-500">Separe os assuntos por vírgula para facilitar a personalização.</p>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
            Você não precisará criar senha. O acesso será validado com um código de autenticação enviado por SMS.
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Salvar cadastro
          </button>
        </form>
      </section>
    </main>
  );
}
