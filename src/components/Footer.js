function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <img 
            src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752288830792_0.png"
            alt="NTC Brasil"
            className="h-12 w-auto mb-6"
          />
          
          <div className="text-center mb-8">
            <p className="text-gray-400">
              Transformando sonhos em realidade
            </p>
          </div>

          <div className="border-t border-gray-800 w-full pt-8 mt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} NTC Brasil. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}