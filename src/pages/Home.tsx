import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, GraduationCap, FileText, Users, ArrowRight } from 'lucide-react';

export function Home() {
  const sections = [
    {
      icon: Building2,
      title: 'La Sede',
      description: 'Conoce nuestras instalaciones, autoridad local, infraestructura y ubicación.',
      path: '/sede',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'Formación',
      description: 'Carreras técnicas profesionales y programas cortos especializados.',
      path: '/formacion',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Trámites',
      description: 'Gestiona certificados, constancias, duplicados y pagos en línea.',
      path: '/tramites',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Embajadores',
      description: 'Historias de éxito, aliados regionales y proyectos comunitarios.',
      path: '/comunidad',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E31E24] via-[#C81A1F] to-[#B01117] min-h-[90vh] flex flex-col overflow-hidden">
        {/* Static Background Image/Gradient - shows while video loads */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E31E24] via-[#C81A1F] to-[#B01117]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        </div>

        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 opacity-0 animate-[fadeIn_1s_ease-in_0.5s_forwards]"
            src="https://www.youtube.com/embed/tN_znKlSLJg?autoplay=1&mute=1&loop=1&playlist=tN_znKlSLJg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1&start=0&enablejsapi=1"
            title="SENCICO Trujillo Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ pointerEvents: 'none', border: 'none' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/75 via-[#C81A1F]/80 to-[#B01117]/75"></div>
        </div>

        {/* Animated Background Patterns - subtle now with video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-6 relative z-10">
          <div className="text-center text-white max-w-5xl">
            <motion.img 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              src="/images/logo-sencico.png" 
              alt="SENCICO Logo" 
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-6 sm:mb-8 drop-shadow-2xl" 
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 sm:mb-6 tracking-wide drop-shadow-lg text-2xl sm:text-3xl lg:text-5xl px-4"
            >
              SERVICIO NACIONAL DE CAPACITACIÓN
              <br />
              PARA LA INDUSTRIA DE LA CONSTRUCCIÓN
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 sm:mb-12 opacity-95 max-w-3xl mx-auto text-base sm:text-lg drop-shadow-md px-4"
            >
              ¡Vive la experiencia SENCICO!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <Link to="/formacion" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-[#E31E24] px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-white/20"
                >
                  Explorar Programas
                </motion.button>
              </Link>
              <motion.a
                href="https://forms.gle/QgmgeXrAdq2ALLpYA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-[#E31E24] transition-all backdrop-blur-sm shadow-lg hover:shadow-xl"
                >
                  ¡Inscríbete Aquí!
                </motion.button>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-[#E31E24] mb-4 px-4">Descubre SENCICO Trujillo</h2>
            <p className="max-w-3xl mx-auto text-gray-700 px-4">
              Navega por nuestras secciones para conocer todo lo que tenemos para ofrecerte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} to={section.path}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group cursor-pointer h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-20 h-20 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                    >
                      <Icon className="text-white" size={36} />
                    </motion.div>

                    <h3 className="text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#E31E24] group-hover:gap-4 transition-all">
                      <span>Explorar</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#E31E24] to-[#B01117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">
              ¿Listo para transformar tu futuro profesional?
            </h2>
            <p className="mb-8 opacity-95 text-lg">
              Únete a miles de profesionales que han confiado en SENCICO Trujillo 
              para desarrollar sus habilidades en el sector construcción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/formacion">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#E31E24] px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl"
                >
                  Ver Programas
                </motion.button>
              </Link>
              <motion.a
                href="https://forms.gle/QgmgeXrAdq2ALLpYA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-[#E31E24] transition-all shadow-lg hover:shadow-xl"
                >
                  ¡Inscríbete Aquí!
                </motion.button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}