import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#317039' }}>
              <Heart className="w-6 h-6 text-white" />
            </div>
            <img className=' w-72  ' src="/LOGO PETCONNECT-01.png" alt="" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#317039] transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="text-gray-700 hover:text-[#317039] transition-colors font-medium"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => scrollToSection('mision-vision')}
              className="text-gray-700 hover:text-[#317039] transition-colors font-medium"
            >
              Misión y Visión
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-[#317039] transition-colors font-medium"
            >
              Contáctanos
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-[#317039] transition-colors font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-left text-gray-700 hover:text-[#317039] transition-colors font-medium"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => scrollToSection('mision-vision')}
                className="text-left text-gray-700 hover:text-[#317039] transition-colors font-medium"
              >
                Misión y Visión
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-gray-700 hover:text-[#317039] transition-colors font-medium"
              >
                Contáctanos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}