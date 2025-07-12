
function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity, y }}
          whileInView={{ opacity, y }}
          transition={{ duration.8 }}
          viewport={{ once }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Construindo sonhos, edificando o amanhã
          </h2>
          
          <div className="grid md-cols-2 gap-12 mt-16">
            <motion.div
              whileHover={{ scale.05 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="h-16 w-16 bg-[#5BBAE0] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              React.createElement("h3",  className="text-xl font-semibold mb-4", Inovação Constante)
              <p className="text-gray-600">
                Buscamos sempre as melhores soluções e tecnologias para seus projetos
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale.05 }}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="h-16 w-16 bg-[#5BBAE0] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              React.createElement("h3",  className="text-xl font-semibold mb-4", Qualidade Garantida)
              <p className="text-gray-600">
                Comprometimento com excelência em cada detalhe do seu projeto
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}