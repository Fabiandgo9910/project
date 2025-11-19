import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16" style={{ backgroundColor: '#143021' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#317039' }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">PetConnect</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Conectamos corazones con patitas, creando segundas oportunidades para 
              animales sin hogar y familias que buscan amor incondicional.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@petconnect.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+34 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mision-vision')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Misión y Visión
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Adopción de mascotas</li>
              <li>Apadrinamiento</li>
              <li>Registro de fundaciones</li>
              <li>Voluntariado</li>
              <li>Asesoría en adopción</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PetConnect. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>

        {/* Mensaje especial */}
        <div className="text-center mt-8 p-4 rounded-lg" style={{ backgroundColor: '#317039' }}>
          <p className="text-white text-sm">
            <Heart className="w-4 h-4 inline mr-1" />
            Cada adopción es una vida salvada. Gracias por ser parte del cambio.
            <Heart className="w-4 h-4 inline ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}