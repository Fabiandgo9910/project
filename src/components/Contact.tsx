import { Mail, Phone, MapPin, Send, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'adopcion'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'adopcion'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#143021' }}>
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para cambiar una vida? Estamos aquí para ayudarte en cada paso del proceso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#317039' }}>
                Hablemos
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Nuestro equipo está disponible para resolver todas tus dudas sobre adopción, 
                apadrinamiento o cómo puedes colaborar con nuestra causa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#317039' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">info@petconnect.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dd5c35' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Teléfono</h4>
                  <p className="text-gray-600">+34 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#143021' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ubicación</h4>
                  <p className="text-gray-600">Madrid, España</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#f1dfcb' }}>
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 mr-2" style={{ color: '#dd5c35' }} />
                <h4 className="font-bold" style={{ color: '#143021' }}>¿Sabías que...?</h4>
              </div>
              <p className="text-gray-700">
                Cada año ayudamos a más de 200 mascotas a encontrar su hogar definitivo. 
                ¡Tu próxima mascota podría estar esperándote!
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{ focusRingColor: '#317039' }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Estoy interesado en
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                >
                  <option value="adopcion">Adoptar una mascota</option>
                  <option value="apadrinamiento">Apadrinar una mascota</option>
                  <option value="voluntario">Ser voluntario</option>
                  <option value="fundacion">Registrar mi fundación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Cuéntanos más sobre tu interés..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                style={{ backgroundColor: '#dd5c35' }}
              >
                <Send className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}