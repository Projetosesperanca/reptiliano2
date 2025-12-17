import { Link } from "wouter";
import logo from "../../../../attached_assets/Logo_1765408032428.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 text-center lg:text-left">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
            <Link href="/" className="font-display font-bold text-white tracking-tighter flex items-center gap-3">
              <img src={logo} alt="Innova Iusti Logo" className="h-10 sm:h-12 w-auto aspect-square object-contain rounded-full shrink-0" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-xl sm:text-2xl">Innova Iusti</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed">
              Transformando o futuro dos negócios através de tecnologia disruptiva e inovação contínua.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-white font-display font-bold mb-6 text-lg">Soluções</h3>
            <ul className="space-y-3">
              <li><Link href="/desenvolvimento" className="text-gray-400 hover:text-primary text-base">Desenvolvimento de Sistemas</Link></li>
              <li><Link href="/marketing" className="text-gray-400 hover:text-primary text-base">Marketing Digital</Link></li>
              <li><Link href="/processos" className="text-gray-400 hover:text-primary text-base">Gestão de Processos</Link></li>
              <li><Link href="/infraestrutura" className="text-gray-400 hover:text-primary text-base">Infraestrutura Cloud</Link></li>
              <li><Link href="/redes" className="text-gray-400 hover:text-primary text-base">Redes e Telefonia</Link></li>
              <li><Link href="/bi" className="text-gray-400 hover:text-primary text-base">Business Intelligence</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-white font-display font-bold mb-6 text-lg">Empresa</h3>
            <ul className="space-y-3">
              <li><Link href="/sobre" className="text-gray-400 hover:text-primary text-base">Sobre Nós</Link></li>
              <li><Link href="/carreiras" className="text-gray-400 hover:text-primary text-base">Trabalhe Conosco</Link></li>
              <li><Link href="/contato" className="text-gray-400 hover:text-primary text-base">Contato</Link></li>
              <li><Link href="/privacidade" className="text-gray-400 hover:text-primary text-base">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-base">
            © {new Date().getFullYear()} Innova Iusti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
