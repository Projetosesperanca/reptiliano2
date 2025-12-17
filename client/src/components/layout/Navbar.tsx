import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../../../attached_assets/Logo_1765408032428.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sistemas", href: "/desenvolvimento" },
    { name: "Marketing", href: "/marketing" },
    { name: "Infraestrutura", href: "/infraestrutura" },
    { name: "Redes e Telefonia", href: "/redes" },
    { name: "Processos", href: "/processos" },
    { name: "BI", href: "/bi" },
    { name: "Sobre", href: "/sobre" },
    { name: "Carreiras", href: "/carreiras" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-end">
        <Link href="/" className="font-display font-bold text-white tracking-tighter flex flex-col items-center gap-2 shrink-0">
          <img 
            src={logo} 
            alt="Innova Iusti Logo" 
            className="h-20 sm:h-24 md:h-28 w-auto aspect-square object-contain rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] transition-all duration-300" 
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-base sm:text-lg md:text-xl font-semibold whitespace-nowrap">Innova Iusti</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={36} strokeWidth={2.5} /> : <Menu size={36} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-primary block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
