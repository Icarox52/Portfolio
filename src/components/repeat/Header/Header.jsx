import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#AAB9CF]/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold text-[#2a2e45]">
          Ícaro<span className="text-[#48668d]">Codes</span>
        </h1>

        <nav className="hidden md:flex space-x-8 text-[#2a2e45] font-medium">
          <a href="#hero" className="hover:text-[#48668d] transition">Início</a>
          <a href="#about" className="hover:text-[#48668d] transition">Sobre</a>
          <a href="#projects" className="hover:text-[#48668d] transition">Projetos</a>
          <a href="#contact" className="hover:text-[#48668d] transition">Contato</a>
        </nav>

        <button
          className="md:hidden text-[#2a2e45]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#BDD4E7] px-6 py-6 flex flex-col space-y-6 text-lg font-medium text-[#2a2e45] shadow-lg">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Início</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>
      )}
    </header>
  );
}
