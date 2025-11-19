import { Target, Eye, Compass } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mision-vision" className="py-20" style={{ backgroundColor: '#f1dfcb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#143021' }}>
            Misión y Visión
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro propósito y la dirección hacia donde nos dirigimos como organización.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Misión */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#317039' }}>
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#143021' }}>Nuestra Misión</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Facilitar conexiones significativas entre personas que desean adoptar o apadrinar 
              mascotas y fundaciones dedicadas al rescate animal, promoviendo el bienestar animal 
              y creando segundas oportunidades para animales sin hogar.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#dd5c35' }}></div>
                <span className="text-gray-600">Conectar familias con mascotas ideales</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#dd5c35' }}></div>
                <span className="text-gray-600">Apoyar fundaciones y refugios</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#dd5c35' }}></div>
                <span className="text-gray-600">Promover adopción responsable</span>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#dd5c35' }}>
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold" style={{ color: '#143021' }}>Nuestra Visión</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ser la plataforma líder en Latinoamérica que transforme la vida de miles de animales 
              sin hogar, creando una sociedad más consciente y comprometida con el bienestar animal, 
              donde cada mascota tenga la oportunidad de encontrar una familia amorosa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#317039' }}></div>
                <span className="text-gray-600">Líderes en adopción digital</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#317039' }}></div>
                <span className="text-gray-600">Impacto regional significativo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#317039' }}></div>
                <span className="text-gray-600">Sociedad más consciente</span>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#143021' }}>
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold" style={{ color: '#143021' }}>Nuestros Valores</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#317039' }}>Compasión</h4>
              <p className="text-gray-600">
                Actuamos con empatía y comprensión hacia todos los animales y las personas que los aman.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#dd5c35' }}>Transparencia</h4>
              <p className="text-gray-600">
                Mantenemos procesos claros y honestos en todas nuestras operaciones y comunicaciones.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3" style={{ color: '#143021' }}>Compromiso</h4>
              <p className="text-gray-600">
                Nos dedicamos completamente al bienestar animal y al éxito de cada adopción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}