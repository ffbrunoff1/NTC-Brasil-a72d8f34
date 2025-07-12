
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    // Simulação de envio
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity, y }}
          whileInView={{ opacity, y }}
          transition={{ duration.8 }}
          viewport={{ once }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Entre em Contato
          </h2>

          <div className="grid md-cols-2 gap-12">
            <div>
              <div className="mb-8">
                React.createElement("h3",  className="text-xl font-semibold mb-4", Informações de Contato)
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3 text-[#5BBAE0]" />
                    +55 44 99104-0774
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3 text-[#5BBAE0]" />
                    ffbrunoff@yahoo.com.br
                  </p>
                  <p className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-[#5BBAE0]" />
                    Padre Lebret 801 G05 Bloco 03
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus-2 focus-[#5BBAE0] focus-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus-2 focus-[#5BBAE0] focus-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus-2 focus-[#5BBAE0] focus-transparent"
                  rows={4}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5BBAE0] text-white font-bold py-3 px-6 rounded-lg transition-colors hover-blue-600"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Mensagem enviada com sucesso!
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}