import { Shield, Users, Heart, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#143021' }}>
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PetConnect nació del amor incondicional hacia los animales y la firme convicción 
            de que cada mascota merece una familia que la ame.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold" style={{ color: '#317039' }}>
              Nuestra Historia
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Comenzamos como un pequeño grupo de voluntarios que veían la necesidad de crear 
              un puente más efectivo entre las personas que desean adoptar o apadrinar mascotas 
              y las fundaciones que trabajan incansablemente por el bienestar animal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy somos una plataforma que conecta corazones, facilita adopciones responsables 
              y promueve el apadrinamiento como una forma de apoyo continuo para los refugios 
              y sus habitantes de cuatro patas.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#dd5c35' }}></div>
                <span className="text-sm font-medium text-gray-600">Fundada en 2020</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#317039' }}></div>
                <span className="text-sm font-medium text-gray-600">+500 Adopciones</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Voluntarios cuidando animales"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#f1dfcb' }}>
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#317039' }}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: '#143021' }}>Confianza</h4>
            <p className="text-gray-600">
              Verificamos cada fundación y proceso de adopción para garantizar el bienestar animal.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#f1dfcb' }}>
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#dd5c35' }}>
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: '#143021' }}>Comunidad</h4>
            <p className="text-gray-600">
              Creamos una red sólida de amantes de los animales comprometidos con el cambio.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#f1dfcb' }}>
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#143021' }}>
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: '#143021' }}>Amor</h4>
            <p className="text-gray-600">
              Cada conexión que facilitamos está impulsada por el amor genuino hacia los animales.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: '#f1dfcb' }}>
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#317039' }}>
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: '#143021' }}>Excelencia</h4>
            <p className="text-gray-600">
              Nos esforzamos por brindar el mejor servicio tanto a adoptantes como a fundaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}