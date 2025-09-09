import Image from "next/image";
import Logo from "@/assets/img/novoLogo.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black backdrop-blur-lg border-t border-white/20 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Coluna 1 - Logo + descrição */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src={Logo}
            alt="Sanntos Logo"
            width={140}
            height={140}
            className="mb-4"
          />
          <p className="text-sm text-gray-300 max-w-xs">
            Ambientes planejados com precisão e design sob medida para você.
          </p>
        </div>

        {/* Coluna 2 - Menu */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-semibold mb-3">Menu</h4>
          <ul className="flex flex-col w-full max-w-[50px] text-gray-300 text-sm space-y-2">
            <li><a href="/portfolio" className="block w-full whitespace-nowrap text-justify hover:text-primary transition">Portfólio</a></li>
            <li><a href="/quem-somos" className="block w-full whitespace-nowrap text-justify hover:text-primary transition">Quem somos</a></li>
            <li><a href="/servicos" className="block w-full whitespace-nowrap text-justify hover:text-primary transition">Serviços</a></li>
            <li><a href="/blog" className="block w-full whitespace-nowrap text-justify hover:text-primary transition">Blog</a></li>
            <li><a href="/contato" className="block w-full whitespace-nowrap text-justify hover:text-primary transition">Contato</a></li>
          </ul>
        </div>



        {/* Coluna 3 - Contato */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h4 className="font-semibold mb-3">Contato</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            <a
              href="https://wa.me/5508002000091"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              0800 200 0091
            </a>
            <br />
            <a
              href="mailto:contato@sanntos.com.br"
              className="hover:text-primary transition"
            >
              contato@sanntos.com.br
            </a>
          </p>
        </div>

      </div>

      {/* Créditos finais */}
      <div className="text-center text-gray-400 text-xs py-4 border-t border-white/10">
        © {new Date().getFullYear()} Sanntos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
