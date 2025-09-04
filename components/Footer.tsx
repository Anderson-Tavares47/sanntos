export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-primary font-bold mb-2">Sanntos</h3>
          <p className="text-sm text-gray-300">
            Ambientes planejados com precisão e design.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Menu</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/portfolio">Portfólio</a></li>
            <li><a href="/quem-somos">Quem somos</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p className="text-gray-300 text-sm">
            (11) 99999-9999 <br />
            contato@sanntos.com.br
          </p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Sanntos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
