import { BookOpen, Users, Award, Briefcase, GraduationCap, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Capacitación Técnica',
      description: 'Cursos especializados en técnicas constructivas, seguridad y normativa vigente.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Formación Profesional',
      description: 'Programas técnicos y carreras profesionales en construcción civil.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Certificación Profesional',
      description: 'Validación de competencias laborales para trabajadores del sector construcción.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Users,
      title: 'Talleres Especializados',
      description: 'Eventos técnicos con expertos en construcción, arquitectura e ingeniería.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Briefcase,
      title: 'Asesoría Técnica',
      description: 'Consultoría especializada en proyectos de construcción y normativa.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: FileText,
      title: 'Investigación y Desarrollo',
      description: 'Estudios técnicos y desarrollo de nuevas tecnologías constructivas.',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E31E24] via-[#FF6B6B] to-[#E31E24]"></div>
      
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
          <h2 className="text-[#E31E24] mb-4">Nuestros Servicios</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Ofrecemos una amplia gama de servicios educativos y técnicos para profesionales 
            del sector construcción en todo el país.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-20 h-20 mb-6 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center shadow-xl`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform"></div>
                  <Icon className="text-white relative z-10" size={36} />
                </motion.div>
                
                <h3 className="mb-3 text-[#E31E24] group-hover:text-[#B01117] transition-colors">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#E31E24]/10 to-transparent rounded-tl-full transform translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-300"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}