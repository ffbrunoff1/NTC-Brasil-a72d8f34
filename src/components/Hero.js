
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#5BBAE0] to-blue-600">
      React.createElement("div",  className="absolute inset-0 bg-black opacity-50", )
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity, y }}
          animate={{ opacity, y }}
          transition={{ duration }}
          className="text-center"
        >
          <h1 className="text-4xl md-6xl font-bold text-white mb-6">
            Bem-vindo à NTC Brasil
          </h1>
          <p className="text-xl md-2xl text-white mb-8 max-w-2xl mx-auto">
            Onde transformação e inovação constroem o futuro
          </p>
          <motion.div
            whileHover={{ scale.05 }}
            whileTap={{ scale.95 }}
          >
            <a
              href="#contact"
              className="inline-block bg-white text-[#5BBAE0] font-bold py-3 px-8 rounded-full text-lg transition-colors hover-[#5BBAE0] hover-white"
            >
              Entre em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat, duration }}
      >
        <a href="#about" className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}