import { Building2, MapPin, Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Sede() {
  const features = [
    {
      icon: Building2,
      title: 'Infraestructura Moderna',
      description: 'Talleres equipados, aulas especializadas y laboratorios de última generación para la formación técnica en construcción.'
    },
    {
      icon: Users,
      title: 'Autoridad Regional',
      description: 'Jefatura Zonal La Libertad a cargo de la gestión y desarrollo de programas formativos en el norte del país.'
    },
    {
      icon: MapPin,
      title: 'Ubicación Estratégica',
      description: 'Carlos Monge 292, Trujillo 13006. Accesible desde toda la región La Libertad con conexión a principales vías.'
    },
    {
      icon: Clock,
      title: 'Horarios de Atención',
      description: 'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 9:00 AM - 1:00 PM. Atención continua sin interrupciones.'
    }
  ];

  return (
    <section id="sede" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#E31E24] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#E31E24] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#E31E24] to-[#B01117] mx-auto mb-6 rounded-full"
          />
          <h2 className="text-[#E31E24] mb-4 px-4">La Sede</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed px-4">
            SENCICO Trujillo es la sede regional que lidera la formación técnica en construcción 
            para La Libertad y el norte del Perú. Un espacio moderno dedicado al desarrollo 
            profesional de trabajadores y técnicos del sector construcción.
          </p>
        </motion.div>

        {/* Main Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 mb-12 border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E31E24] via-[#FF6B6B] to-[#E31E24]"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-[#E31E24] mb-4">¿Qué es SENCICO Trujillo?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                El Servicio Nacional de Capacitación para la Industria de la Construcción, 
                Sede Trujillo, es la institución técnica especializada en la formación y 
                certificación de profesionales del sector construcción en la región La Libertad.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bajo la Jefatura Zonal La Libertad, operamos como centro de excelencia académica 
                y técnica, contribuyendo al desarrollo de la industria constructora regional y nacional.
              </p>
              <div className="bg-gradient-to-r from-[#E31E24]/10 to-transparent p-4 rounded-xl border-l-4 border-[#E31E24]">
                <p className="text-gray-800">
                  <strong>Jefatura Zonal La Libertad</strong><br/>
                  Autoridad regional responsable de la planificación y ejecución de programas formativos, 
                  certificación y servicios técnicos en la zona norte del país.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">Ubicación</h4>
                    <p className="text-gray-700">
                      Carlos Monge 292<br/>
                      Trujillo 13006, La Libertad
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/pgZSVUhqf3kd93yn9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#E31E24] hover:underline text-sm mt-2 inline-block"
                    >
                      Ver en Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">Horarios</h4>
                    <p className="text-gray-700">
                      Lunes a Viernes: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-2">Instalaciones</h4>
                    <p className="text-gray-700">
                      Talleres especializados, aulas equipadas, laboratorios de materiales y áreas administrativas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h4 className="text-gray-900 mb-2 group-hover:text-[#E31E24] transition-colors">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}