import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: ['Carlos Monge 292', 'Trujillo 13006, La Libertad'],
      color: 'from-red-500 to-pink-500',
      link: 'https://maps.app.goo.gl/pgZSVUhqf3kd93yn9'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: ['+51 (044) 284-444', '+51 944 567 890'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['trujillo@sencico.gob.pe', 'informes.trujillo@sencico.gob.pe'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: ['Lunes a Viernes: 8:00 AM - 5:00 PM', 'Sábados: 9:00 AM - 1:00 PM'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#E31E24] to-[#B01117] mx-auto mb-6 rounded-full"
          />
          <h2 className="text-[#E31E24] mb-4">Contáctanos</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Estamos aquí para atender tus consultas y brindarte la información que necesitas.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12"></div>
                    <Icon className="text-white relative z-10" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-[#E31E24]">{info.title}</h3>
                    {info.content.map((line, i) => (
                      <p key={i} className="text-gray-700">{line}</p>
                    ))}
                    {info.link && (
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#E31E24] hover:underline text-sm mt-2 inline-block"
                      >
                        Ver en Google Maps →
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
