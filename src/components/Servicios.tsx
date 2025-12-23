import { Award, FlaskConical, FileCheck, Microscope, CheckCircle2, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';

export function Servicios() {
  const certificaciones = [
    {
      title: 'Operador de Equipo Pesado',
      description: 'Certificación de competencias para operación de retroexcavadoras, cargadores frontales y excavadoras.',
      requisitos: ['DNI vigente', 'Experiencia mínima 1 año', 'Licencia de conducir A-IIc']
    },
    {
      title: 'Maestro de Obra',
      description: 'Validación de competencias en supervisión, lectura de planos y gestión de equipos de trabajo.',
      requisitos: ['DNI vigente', 'Experiencia mínima 2 años', 'Certificado de estudios']
    },
    {
      title: 'Gasfitero',
      description: 'Certificación en instalaciones sanitarias, redes de agua y desagüe según normativa nacional.',
      requisitos: ['DNI vigente', 'Experiencia mínima 1 año', 'Aprobar evaluación técnica']
    },
    {
      title: 'Electricista',
      description: 'Acreditación en instalaciones eléctricas residenciales y comerciales bajo CNE vigente.',
      requisitos: ['DNI vigente', 'Experiencia mínima 1 año', 'Aprobar evaluación teórica-práctica']
    },
    {
      title: 'Soldador',
      description: 'Certificación de procesos de soldadura SMAW, GMAW y TIG según estándares internacionales.',
      requisitos: ['DNI vigente', 'Prueba práctica de soldadura', 'Certificado médico']
    },
    {
      title: 'Albañil',
      description: 'Validación de competencias en construcción de muros, tarrajeo, pisos y acabados.',
      requisitos: ['DNI vigente', 'Experiencia mínima 1 año', 'Evaluación práctica']
    }
  ];

  const laboratorios = [
    {
      icon: FlaskConical,
      title: 'Ensayo de Materiales',
      servicios: [
        'Resistencia de concreto',
        'Granulometría de agregados',
        'Contenido de humedad',
        'Peso específico'
      ]
    },
    {
      icon: Microscope,
      title: 'Control de Calidad',
      servicios: [
        'Diseño de mezclas',
        'Pruebas de suelos',
        'Análisis de cemento',
        'Certificación de ensayos'
      ]
    },
    {
      icon: ClipboardList,
      title: 'Servicios Técnicos',
      servicios: [
        'Asesoría en proyectos',
        'Informes técnicos',
        'Supervisión de obra',
        'Peritaje técnico'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-[#E31E24] to-[#B01117] mx-auto mb-6 rounded-full"
          />
          <h2 className="text-[#E31E24] mb-4">Servicios y Certificación</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Certificación de competencias laborales y servicios de laboratorio disponibles en la Sede Trujillo.
          </p>
        </motion.div>

        {/* Certificación de Competencias */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Certificación de Competencias Laborales</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificaciones.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle2 className="text-[#E31E24] flex-shrink-0 mt-1" size={20} />
                  <h4 className="text-gray-900 group-hover:text-[#E31E24] transition-colors">
                    {cert.title}
                  </h4>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="text-xs text-gray-500 mb-2">Requisitos:</div>
                  <ul className="space-y-1">
                    {cert.requisitos.map((req, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-[#E31E24] mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Servicios de Laboratorio */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <FlaskConical className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Servicios de Laboratorio</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {laboratorios.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center mb-6 shadow-xl mx-auto"
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  <h4 className="text-gray-900 mb-4 text-center group-hover:text-[#E31E24] transition-colors">
                    {lab.title}
                  </h4>

                  <ul className="space-y-3">
                    {lab.servicios.map((servicio, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#E31E24] rounded-full flex-shrink-0"></div>
                        <span>{servicio}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#E31E24]"
        >
          <div className="flex items-start gap-4">
            <FileCheck className="text-[#E31E24] flex-shrink-0" size={32} />
            <div>
              <h4 className="text-gray-900 mb-2">Proceso de Certificación</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                La certificación de competencias laborales valida tu experiencia y conocimientos técnicos 
                mediante evaluaciones teóricas y prácticas. El certificado tiene reconocimiento nacional 
                y mejora tu empleabilidad en el sector construcción.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contacto"
                className="inline-block bg-gradient-to-r from-[#E31E24] to-[#B01117] text-white px-6 py-2 rounded-full text-sm hover:shadow-lg transition-all"
              >
                Consultar Proceso
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
