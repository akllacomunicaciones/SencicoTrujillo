import { Users, GraduationCap, Award, Briefcase, Mail, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function NuestroEquipo() {
  // Estado para manejar las imágenes de cada docente
  const [docentesImagenes, setDocentesImagenes] = useState<string[]>([
    '👨‍💼',
    '👨‍💼',
    '👨‍💼',
    '👨‍💼',
    '👨‍💼',
    '👨‍💼'
  ]);

  // Función para manejar la carga de imagen
  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImagenes = [...docentesImagenes];
        newImagenes[index] = reader.result as string;
        setDocentesImagenes(newImagenes);
      };
      reader.readAsDataURL(file);
    }
  };

  const directivos = [
    {
      nombre: 'JHONY CASTILLO',
      cargo: 'Jefe Zonal Trujillo',
      especialidad: 'Ingeniero Civil - MBA en Gestión Educativa',
      descripcion: 'Líder con más de 20 años de experiencia en formación técnica y desarrollo institucional.',
      imagen: '👨‍💼'
    },
    {
      nombre: 'JUAN GUILLÉN',
      cargo: 'Promotor Académico',
      especialidad: 'Licenciado en Administración - Especialista en Gestión Comercial',
      descripcion: 'Encargado de la promoción y difusión de programas académicos, así como del vínculo con nuevos estudiantes.',
      imagen: '👨‍💼'
    },
    {
      nombre: 'JACKELINE MACHUCA',
      cargo: 'Coordinadora Académica',
      especialidad: 'Mg. Auditoría y gestión pública',
      descripcion: 'Responsable de la calidad académica y desarrollo curricular de los programas formativos.',
      imagen: '👩‍💼'
    },
    {
      nombre: 'ALEX ARRIBASPLATA',
      cargo: 'Especialista educativo',
      especialidad: 'Mg. Administración',
      descripcion: 'Gestiona los servicios de certificación, ensayos de materiales y control de calidad.',
      imagen: '👨‍🔬'
    }
  ];

  const docentes = [
    {
      nombre: 'Humberto Castillo Chávez',
      especialidad: 'Ingeniero Civil',
      experiencia: '15 años',
      area: 'Docente de Experiencias Formativas',
      imagen: docentesImagenes[0]
    },
    {
      nombre: 'Ronald Montoya',
      especialidad: 'Arquitecto',
      experiencia: '12 años',
      area: 'Docente en Diseño de Interiores',
      imagen: docentesImagenes[1]
    },
    {
      nombre: 'Jairo Flores',
      especialidad: 'Topografía',
      experiencia: '18 años',
      area: 'Docente en Tecnología',
      imagen: docentesImagenes[2]
    },
    {
      nombre: 'Alberto Flores Guerrero',
      especialidad: 'Arquitecto',
      experiencia: '10 años',
      area: 'Docente de Dibujo',
      imagen: docentesImagenes[3]
    },
    {
      nombre: 'Jesús Maldonado',
      especialidad: 'Gestión de la Construcción',
      experiencia: '14 años',
      area: 'Docente en Gestión de la Construcción',
      imagen: docentesImagenes[4]
    },
    {
      nombre: 'Jorge Wuatanabe Ibáñez',
      especialidad: 'Ingeniero Civil',
      experiencia: '11 años',
      area: 'Docente en Topografía',
      imagen: docentesImagenes[5]
    }
  ];

  const administrativos = [
    {
      nombre: 'Ana Espinoza Cárdenas',
      cargo: 'Administradora',
      area: 'Técnico administrativo secretarial de gerencia',
      imagen: '👨‍💼'
    },
    {
      nombre: 'Luzdeni Velarde Burgos',
      cargo: 'Psicóloga',
      area: 'Auxiliar educativo',
      imagen: '👨‍💼'
    },
    {
      nombre: 'Nelson Vera Escalante',
      cargo: 'Ing. Civil',
      area: 'Asistente de promoción',
      imagen: '👨‍💼'
    },
    {
      nombre: 'Alber Alvarez Bustamante',
      cargo: 'Tec. Topógrafo',
      area: 'Auxiliar Educativo',
      imagen: '👨‍💼'
    },
    {
      nombre: 'Angie Jara Vásquez',
      cargo: 'Enfermera',
      area: 'Área de Enfermería',
      imagen: '👨‍💼'
    },
    {
      nombre: 'Mariela Rojas Vazquez',
      cargo: 'Psicóloga',
      area: 'Tutoría',
      imagen: '👨‍💼'
    },
    {
      nombre: 'César Palacio Solano',
      cargo: 'Téc. Computación e Informática',
      area: 'Soporte Técnico'
    },
    {
      nombre: 'Andy Marcelo Díaz',
      cargo: 'Téc. Computación e Informática',
      area: 'Asistente en Soporte Técnico',
      imagen: '👨‍💼'
    },
    {
      nombre: 'Liz Rios Varas',
      cargo: 'Téc. Edificaciones y Secretaría',
      area: 'Responsable de informes e inscripciones y pagos',
      imagen: '👨‍💼'
    }
  ];

  const valores = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromiso con la calidad en cada aspecto de nuestra labor educativa y técnica.'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboración constante entre docentes, administrativos y estudiantes.'
    },
    {
      icon: GraduationCap,
      title: 'Formación Continua',
      description: 'Actualización permanente de nuestro equipo en nuevas metodologías y tecnologías.'
    },
    {
      icon: Briefcase,
      title: 'Profesionalismo',
      description: 'Ética y responsabilidad en la formación de futuros profesionales del sector.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
          <h2 className="text-[#E31E24] mb-4 px-4">Nuestro Equipo</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed px-4">
            Profesionales comprometidos con la excelencia educativa y el desarrollo del sector construcción. 
            Conoce al equipo que hace posible la formación de calidad en SENCICO Trujillo.
          </p>
        </motion.div>

        {/* Directivos */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8 flex items-center gap-3"
          >
            <Briefcase className="text-[#E31E24]" size={32} />
            Equipo Directivo
          </motion.h3>

          <div className="flex flex-col gap-8">
            {directivos.map((directivo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className="h-3 bg-gradient-to-r from-[#E31E24] to-[#B01117]"></div>
                
                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                  <div className="w-full md:w-80 flex-shrink-0">
                    <img 
                      src={index === 1 ? '👨‍💼' : index === 2 ? '👨‍💼' : index === 3 ? '👨‍💼' : '👨‍💼'} 
                      alt={directivo.nombre} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-6 md:p-8">
                    <h4 className="text-gray-900 mb-1 group-hover:text-[#E31E24] transition-colors">
                      {directivo.nombre}
                    </h4>
                    <p className="text-[#E31E24] mb-4">{directivo.cargo}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <div className="text-xs text-gray-500 mb-1">Especialidad:</div>
                      <p className="text-sm text-gray-700">{directivo.especialidad}</p>
                    </div>

                    <div className="border-l-4 border-[#E31E24] pl-4 py-2 bg-[#E31E24]/5 rounded-r-xl mb-4">
                      <p className="text-sm text-gray-700">{directivo.descripcion}</p>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gray-100 hover:bg-[#E31E24] hover:text-white rounded-full flex items-center justify-center transition-all"
                      >
                        <Mail size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gray-100 hover:bg-[#E31E24] hover:text-white rounded-full flex items-center justify-center transition-all"
                      >
                        <Linkedin size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8 text-center"
          >
            Nuestros Valores
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center mb-4 shadow-lg mx-auto"
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                  <h4 className="text-gray-900 mb-2">{valor.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{valor.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Plana Docente */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-[#E31E24]" size={32} />
            Plana Docente
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docentes.map((docente, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className="h-3 bg-gradient-to-r from-[#E31E24] to-[#B01117]"></div>
                
                <div className="overflow-hidden relative">
                  <ImageWithFallback 
                    src={docente.imagen}
                    alt={docente.nombre}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h4 className="text-gray-900 mb-1 text-center group-hover:text-[#E31E24] transition-colors">
                    {docente.nombre}
                  </h4>
                  <p className="text-[#E31E24] text-center mb-4">{docente.especialidad}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="text-xs text-gray-500 mb-1">Experiencia:</div>
                    <p className="text-sm text-gray-700">{docente.experiencia}</p>
                  </div>

                  <div className="border-l-4 border-[#E31E24] pl-4 py-2 bg-[#E31E24]/5 rounded-r-xl">
                    <p className="text-sm text-gray-700">{docente.area}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Administrativo */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8 flex items-center gap-3"
          >
            <Users className="text-[#E31E24]" size={32} />
            Personal Administrativo
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {administrativos.map((admin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                {/* Foto - Sin padding, ocupa toda la parte superior */}
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  {admin.imagen ? (
                    <img 
                      src={admin.imagen} 
                      alt={admin.nombre}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">👤</div>
                  )}
                </div>
                
                {/* Información - Con padding */}
                <div className="p-6">
                  <h4 className="text-gray-900 group-hover:text-[#E31E24] transition-colors mb-1">
                    {admin.nombre}
                  </h4>
                  <p className="text-sm text-[#E31E24] mb-2">{admin.cargo}</p>
                  <p className="text-xs text-gray-600">{admin.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Users className="mx-auto mb-4 text-white" size={56} />
            <h3 className="text-white mb-4">Únete a Nuestro Equipo</h3>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Si eres un profesional apasionado por la educación y el sector construcción, 
              envíanos tu CV. Estamos siempre en búsqueda de talento comprometido.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#E31E24] px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl"
            >
              Enviar CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}