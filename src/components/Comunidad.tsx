import { Users, Heart, Handshake, Star, Quote, Briefcase, Award, Trophy, Target, Users2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { VideoModal } from './VideoModal';

const embajador3Image = "https://images.unsplash.com/photo-1603516270950-26e4f5004ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlciUyMGhlbG1ldCUyMHZlc3R8ZW58MXx8fHwxNzY1Nzc0NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const nuevaImagenTarjeta12 = "https://images.unsplash.com/photo-1764328165995-0624c280a6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU4MTU2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Comunidad() {
  const [isPlayingComunidad, setIsPlayingComunidad] = useState(false);
  const [isPlayingComunidad2, setIsPlayingComunidad2] = useState(false);
  const [isPlayingComunidad3, setIsPlayingComunidad3] = useState(false);
  const [modalVideo, setModalVideo] = useState<{ id: string; title: string } | null>(null);

  const historias = [
    {
      nombre: 'Carlos Rodríguez',
      profesion: 'Técnico en Construcción Civil',
      testimonio: 'SENCICO cambió mi vida. Hoy trabajo como supervisor de obra en una empresa constructora importante de Trujillo.',
      año: 'Egresado 2022',
      imagen: '👷'
    },
    {
      nombre: 'María Vásquez',
      profesion: 'Operadora de Maquinaria Pesada',
      testimonio: 'La certificación me abrió puertas. Ahora manejo equipos en proyectos de infraestructura vial.',
      año: 'Certificada 2023',
      imagen: '🚜'
    },
    {
      nombre: 'Luis Paredes',
      profesion: 'Maestro de Obra',
      testimonio: 'Los conocimientos adquiridos me permitieron independizarme y formar mi propia empresa constructora.',
      año: 'Egresado 2021',
      imagen: '👨‍🔧'
    }
  ];

  const aliados = [
    {
      icon: Briefcase,
      nombre: 'Cámara de Comercio de La Libertad',
      tipo: 'Aliado Estratégico',
      descripcion: 'Colaboración en programas de inserción laboral y desarrollo empresarial.'
    },
    {
      icon: Handshake,
      nombre: 'Gobierno Regional La Libertad',
      tipo: 'Convenio Institucional',
      descripcion: 'Capacitación para trabajadores de obras públicas regionales.'
    },
    {
      icon: Users,
      nombre: 'Constructoras Locales',
      tipo: 'Red de Empleadores',
      descripcion: 'Convenios para prácticas preprofesionales y bolsa de trabajo.'
    }
  ];

  const proyectos = [
    {
      titulo: 'Capacitación Comunitaria',
      descripcion: 'Talleres gratuitos de albañilería básica para comunidades vulnerables de Trujillo.',
      impacto: '120 beneficiarios en 2024'
    },
    {
      titulo: 'Mujeres en Construcción',
      descripcion: 'Programa de formación y certificación para mujeres en oficios técnicos del sector.',
      impacto: '45 mujeres certificadas'
    },
    {
      titulo: 'Construcción Sostenible',
      descripcion: 'Iniciativa regional de capacitación en técnicas constructivas ecoamigables.',
      impacto: 'En desarrollo permanente'
    }
  ];

  const embajadores = [
    {
      nombre: 'Juan Carlos Méndez',
      profesion: 'Ingeniero Civil',
      empresa: 'Constructora del Norte SAC',
      año: 'Promoción 2018',
      logros: 'Supervisor de obra en proyecto habitacional de 500 viviendas',
      testimonio: 'SENCICO me dio las herramientas para liderar proyectos importantes. Hoy soy referente en mi empresa.',
      imagen: '👷‍♂️'
    },
    {
      nombre: 'Rosa Miranda Díaz',
      profesion: 'Técnica en Topografía',
      empresa: 'Consultora Geodésica Trujillo',
      año: 'Promoción 2020',
      logros: 'Especialista en levantamientos con drones y tecnología GPS',
      testimonio: 'Como mujer en construcción, SENCICO me dio la confianza y preparación para destacar en un sector retador.',
      imagen: '👩‍💼'
    },
    {
      nombre: 'Miguel Ángel Ruiz',
      profesion: 'Maestro de Obra Certificado',
      empresa: 'Independiente',
      año: 'Certificado 2019',
      logros: 'Fundador de su propia empresa constructora con 15 trabajadores',
      testimonio: 'La certificación de competencias validó mi experiencia. Ahora tengo mi propia empresa y genero empleo.',
      imagen: '👨‍🔧'
    },
    {
      nombre: 'Carmen Vega Sánchez',
      profesion: 'Arquitecta de Interiores',
      empresa: 'Estudio Creativo CV',
      año: 'Promoción 2021',
      logros: 'Ganadora del premio regional de diseño sostenible 2024',
      testimonio: 'SENCICO combinó teoría y práctica perfectamente. Hoy diseño espacios que transforman vidas.',
      imagen: '👩‍🎨'
    },
    {
      nombre: 'Luis Paredes Torres',
      profesion: 'Operador de Maquinaria Pesada',
      empresa: 'Obras Públicas Regionales',
      año: 'Certificado 2022',
      logros: 'Operador principal en proyecto de infraestructura vial',
      testimonio: 'La certificación abrió puertas que nunca imaginé. Trabajo en proyectos de alto nivel.',
      imagen: '🚜'
    },
    {
      nombre: 'Ana Becerra Flores',
      profesion: 'Instaladora Sanitaria',
      empresa: 'Servicios Técnicos AB',
      año: 'Certificada 2023',
      logros: 'Primera mujer gasfitero certificada en La Libertad',
      testimonio: 'Rompí estereotipos gracias a SENCICO. Soy prueba de que las mujeres podemos destacar en cualquier oficio.',
      imagen: '👩‍🔧'
    }
  ];

  const beneficios = [
    {
      icon: Trophy,
      title: 'Reconocimiento Oficial',
      description: 'Certificación y distintivo de Embajador SENCICO con reconocimiento institucional.'
    },
    {
      icon: Users2,
      title: 'Red de Networking',
      description: 'Conexión con otros profesionales destacados y oportunidades de colaboración.'
    },
    {
      icon: Star,
      title: 'Visibilidad Profesional',
      description: 'Difusión de tu historia y logros en nuestros canales oficiales y eventos.'
    },
    {
      icon: Heart,
      title: 'Mentoría',
      description: 'Oportunidad de inspirar y guiar a nuevas generaciones de estudiantes.'
    }
  ];

  const requisitos = [
    'Ser egresado o certificado de SENCICO Trujillo',
    'Destacar en el sector construcción con logros verificables',
    'Compromiso con valores de excelencia y responsabilidad',
    'Disponibilidad para participar en eventos institucionales',
    'Carta de postulación y CV documentado'
  ];

  return (
    <section id="comunidad" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E31E24] rounded-full blur-3xl"></div>
      </div>

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
          <h2 className="text-[#E31E24] mb-4">Embajadores</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Somos más que una institución educativa. Somos una comunidad de profesionales, 
            aliados y proyectos que transforman vidas y construyen el futuro de La Libertad.
          </p>
        </motion.div>

        {/* Historias de Éxito */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <Star className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Historias de Éxito</h3>
          </motion.div>

          <div className="space-y-12">
            {historias.map((historia, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden"
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Contenido de texto */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Ícono y título */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <span className="text-3xl">{historia.imagen}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-1">{historia.nombre}</h4>
                        <p className="text-[#E31E24]">{historia.profesion}</p>
                      </div>
                    </div>

                    {/* Descripción/Testimonio */}
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        {historia.testimonio}
                      </p>
                      
                      {/* Tags/Metadata */}
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-[#E31E24] bg-[#E31E24]/5 px-4 py-1.5 rounded-full">
                          {historia.año}
                        </span>
                        {index === 0 && (
                          <>
                            <span className="text-sm text-purple-600">Historia de éxito</span>
                            <span className="text-sm text-purple-600">• Testimonio</span>
                            <span className="text-sm text-purple-600">• Inspiración</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="text-sm text-purple-600">Certificación</span>
                            <span className="text-sm text-purple-600">• Trayectoria</span>
                            <span className="text-sm text-purple-600">• Logros</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="text-sm text-purple-600">Emprendimiento</span>
                            <span className="text-sm text-purple-600">• Liderazgo</span>
                            <span className="text-sm text-purple-600">• Empresa</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Video/Imagen */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    {index === 0 ? (
                      /* Video de YouTube en la primera tarjeta */
                      <div 
                        className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 relative bg-black cursor-pointer group"
                        onClick={() => setModalVideo({ id: 'DcM1_x1t_KU', title: 'Video Comunidad SENCICO' })}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {/* Miniatura del video como fondo */}
                          <div 
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                            style={{ 
                              backgroundImage: 'url(https://img.youtube.com/vi/DcM1_x1t_KU/maxresdefault.jpg)',
                            }}
                          >
                            {/* Overlay oscuro para mejor contraste */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
                          </div>
                          
                          {/* Botón de Play personalizado */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              scale: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                            whileHover={{ 
                              scale: 1.15,
                              transition: { duration: 0.2 }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-[#E31E24] rounded-full flex items-center justify-center shadow-2xl border-4 border-white pointer-events-none"
                          >
                            {/* Efecto de anillo pulsante */}
                            <motion.div
                              className="absolute inset-0 bg-[#E31E24] rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 0, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                            
                            {/* Ícono de play */}
                            <svg 
                              className="w-8 h-8 text-white relative z-10 ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    ) : index === 1 ? (
                      /* Video de YouTube en la segunda tarjeta */
                      <div 
                        className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 relative bg-black cursor-pointer group"
                        onClick={() => setModalVideo({ id: 'vu6h5P8n7TM', title: 'Video Historia de Éxito SENCICO' })}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {/* Miniatura del video como fondo */}
                          <div 
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                            style={{ 
                              backgroundImage: 'url(https://img.youtube.com/vi/vu6h5P8n7TM/maxresdefault.jpg)',
                            }}
                          >
                            {/* Overlay oscuro para mejor contraste */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
                          </div>
                          
                          {/* Botón de Play personalizado */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              scale: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                            whileHover={{ 
                              scale: 1.15,
                              transition: { duration: 0.2 }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-[#E31E24] rounded-full flex items-center justify-center shadow-2xl border-4 border-white pointer-events-none"
                          >
                            {/* Efecto de anillo pulsante */}
                            <motion.div
                              className="absolute inset-0 bg-[#E31E24] rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 0, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                            
                            {/* Ícono de play */}
                            <svg 
                              className="w-8 h-8 text-white relative z-10 ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    ) : (
                      /* Video de YouTube en la tercera tarjeta */
                      <div 
                        className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 relative bg-black cursor-pointer group"
                        onClick={() => setModalVideo({ id: 'JYbDRCf5TsY', title: 'Video Emprendimiento SENCICO' })}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {/* Miniatura del video como fondo */}
                          <div 
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                            style={{ 
                              backgroundImage: 'url(https://img.youtube.com/vi/JYbDRCf5TsY/maxresdefault.jpg)',
                            }}
                          >
                            {/* Overlay oscuro para mejor contraste */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
                          </div>
                          
                          {/* Botón de Play personalizado */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ 
                              opacity: 1, 
                              scale: [1, 1.05, 1],
                            }}
                            transition={{
                              scale: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                            whileHover={{ 
                              scale: 1.15,
                              transition: { duration: 0.2 }
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-[#E31E24] rounded-full flex items-center justify-center shadow-2xl border-4 border-white pointer-events-none"
                          >
                            {/* Efecto de anillo pulsante */}
                            <motion.div
                              className="absolute inset-0 bg-[#E31E24] rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 0, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                            />
                            
                            {/* Ícono de play */}
                            <svg 
                              className="w-8 h-8 text-white relative z-10 ml-1" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Aliados y Convenios */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <Handshake className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Aliados Regionales</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {aliados.map((aliado, index) => {
              const Icon = aliado.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="text-xs text-[#E31E24] mb-1">{aliado.tipo}</div>
                      <h4 className="text-gray-900 mb-2">{aliado.nombre}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{aliado.descripcion}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Proyectos Comunitarios */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Proyectos e Iniciativas</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-[#E31E24]"
              >
                <h4 className="text-gray-900 mb-3">{proyecto.titulo}</h4>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div className="bg-[#E31E24]/5 rounded-lg px-3 py-2 inline-block">
                  <span className="text-xs text-[#E31E24]">
                    <strong>Impacto:</strong> {proyecto.impacto}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Separador visual - Embajadores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-3xl p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center">
            <Award className="mx-auto mb-4 text-white" size={64} />
            <h3 className="text-white mb-4">Programa de Embajadores</h3>
            <p className="max-w-2xl mx-auto opacity-95 mb-8">
              Reconocemos a nuestros egresados y certificados que destacan en el sector, 
              convirtiéndolos en referentes e inspiración para futuras generaciones de profesionales.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#postular"
              className="inline-block bg-white text-[#E31E24] px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-xl"
            >
              Postula Como Embajador
            </motion.a>
          </div>
        </motion.div>

        {/* Embajadores Grid */}
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
            <h3 className="text-gray-900">Nuestros Embajadores</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {embajadores.map((embajador, index) => (
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
                
                <div className="p-8">
                  <div className="mb-4">
                    <ImageWithFallback
                      src={index < 2 ? embajador3Image : nuevaImagenTarjeta12}
                      alt="Embajador SENCICO" 
                      className="w-full h-auto rounded-2xl mx-auto shadow-lg"
                    />
                  </div>
                  
                  <h4 className="text-gray-900 mb-1 text-center group-hover:text-[#E31E24] transition-colors">
                    {embajador.nombre}
                  </h4>
                  <p className="text-[#E31E24] text-center mb-1">{embajador.profesion}</p>
                  <p className="text-sm text-gray-600 text-center mb-4">{embajador.empresa}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="text-xs text-gray-500 mb-1">Logro destacado:</div>
                    <p className="text-sm text-gray-700">{embajador.logros}</p>
                  </div>

                  <div className="border-l-4 border-[#E31E24] pl-4 py-2 bg-[#E31E24]/5 rounded-r-xl">
                    <p className="text-sm text-gray-700 italic">"{embajador.testimonio}"</p>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {embajador.año}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beneficios del Programa */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Beneficios del Programa</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
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
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <h4 className="text-gray-900 mb-2">{beneficio.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{beneficio.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cómo Postular */}
        <motion.div
          id="postular"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-gray-900">¿Cómo Postular?</h3>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si eres egresado o certificado de SENCICO Trujillo y destacas en el sector construcción, 
              te invitamos a ser parte de nuestro programa de embajadores. Comparte tu historia y 
              sé inspiración para otros.
            </p>

            <div className="space-y-3">
              <h4 className="text-gray-900">Requisitos:</h4>
              <ul className="space-y-2">
                {requisitos.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-[#E31E24] rounded-full mt-2 flex-shrink-0"></div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Users className="mx-auto mb-4 text-white" size={56} />
            <h3 className="text-white mb-4">Forma Parte de Nuestra Comunidad</h3>
            <p className="mb-8 opacity-90 max-w-2xl mx-auto">
              Únete a cientos de profesionales que han transformado sus vidas a través de SENCICO Trujillo. 
              Juntos construimos el futuro de La Libertad.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://forms.gle/QgmgeXrAdq2ALLpYA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#E31E24] px-10 py-4 rounded-full hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl"
            >
              ¡Inscríbete Aquí!
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalVideo !== null}
        onClose={() => setModalVideo(null)}
        videoId={modalVideo?.id || ''}
        title={modalVideo?.title || ''}
      />
    </section>
  );
}