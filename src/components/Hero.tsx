import { Heart, Users, Home } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 min-h-screen flex items-center" style={{ backgroundColor: '#f1dfcb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#143021' }}>
                Conectando
                <span className="block" style={{ color: '#317039' }}>Corazones</span>
                <span className="block">con Patitas</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Somos el puente entre amantes de los animales y fundaciones dedicadas al rescate. 
                Juntos creamos segundas oportunidades para quienes más lo necesitan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: '#dd5c35' }}
              >
                Conoce Más
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: '#317039', 
                  color: '#317039',
                  backgroundColor: 'transparent'
                }}
              >
                Únete Ahora
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#317039' }}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Adopción</h3>
                <p className="text-sm text-gray-600">Encuentra tu compañero ideal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#dd5c35' }}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Apadrinamiento</h3>
                <p className="text-sm text-gray-600">Apoya desde la distancia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#143021' }}>
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Refugios</h3>
                <p className="text-sm text-gray-600">Red de fundaciones aliadas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Perro feliz en adopción"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl -z-10"
              style={{ backgroundColor: '#317039' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}