import { GraduationCap, BookOpen, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Formacion() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingTopografia, setIsPlayingTopografia] = useState(false);
  const [isPlayingDiseno, setIsPlayingDiseno] = useState(false);
  const [modalVideo, setModalVideo] = useState<{ id: string; title: string } | null>(null);

  const carreras = [
    {
      title: 'Edificaciones',
      duration: '3 años',
      modality: 'Presencial',
      description: 'Formación integral en técnicas constructivas, lectura de planos, supervisión de obras y control de calidad.',
      competencias: ['Lectura de planos', 'Supervisión de obras', 'Control de calidad', 'Metrados y presupuestos']
    },
    {
      title: 'Topografía',
      duration: '3 años',
      modality: 'Presencial',
      description: 'Programa técnico especializado en levantamientos topográficos, georreferenciación y uso de instrumentos modernos.',
      competencias: ['Levantamientos topográficos', 'Uso de estación total', 'GPS y drones', 'Replanteo de obras']
    },
    {
      title: 'Diseño de Interiores',
      duration: '3 años',
      modality: 'Presencial',
      description: 'Carrera enfocada en diseño de espacios, mobiliario, iluminación y acabados para proyectos residenciales y comerciales.',
      competencias: ['Diseño de espacios', 'Renderizado 3D', 'Mobiliario', 'Iluminación técnica']
    }
  ];

  const programas = [
    {
      icon: BookOpen,
      title: 'AutoCAD 2D',
      duration: '60 horas',
      modality: 'Presencial',
      description: 'AutoCAD 2D: Dibujos técnicos precisos y profesional.',
      imagen: '/images/autocad-2d.png'
    },
    {
      icon: BookOpen,
      title: 'AutoCAD 3D',
      duration: '40 horas',
      modality: 'Presencial',
      description: 'AutoCAD 3D: Modelado 3D, renderizado y visualización profesional.',
      imagen: '/images/autocad-3d.png'
    },
    {
      icon: BookOpen,
      title: 'AutoCAD Civil 3D',
      duration: '80 horas',
      modality: 'Presencial',
      description: 'Civil 3D: Diseño de infraestructura vial, topografía y obras civiles.',
      imagen: '/images/autocad-civil-3d.png'
    },
    {
      icon: BookOpen,
      title: 'Costos y presupuestos con S10',
      duration: '80 horas',
      modality: 'Presencial',
      description: 'S10 Costos y Presupuestos: Análisis unitario, valorizaciones y gestión eficiente de proyectos.',
      imagen: '/images/costos-presupuestos-s10.png'
    },
    {
      icon: BookOpen,
      title: 'Revit Architecture',
      duration: '100 horas',
      modality: 'Presencial',
      description: 'Revit Architecture: Modelado, documentación y recorridos virtuales en BIM arquitectónico.',
      imagen: '/images/revit-architecture.png'
    },
    {
      icon: BookOpen,
      title: 'Revit MEP',
      duration: '40 horas',
      modality: 'Presencial',
      description: 'Revit MEP: Modelado 3D de instalaciones MEP y coordinación interdisciplinaria.',
      imagen: '/images/revit-mep.png'
    },
    {
      icon: BookOpen,
      title: 'Revit Structure',
      duration: '60 horas',
      modality: 'Presencial',
      description: 'Revit Structure: Modelado 3D de estructuras, documentación BIM y análisis normativo.',
      imagen: '/images/revit-structure.png'
    },
    {
      icon: BookOpen,
      title: 'Valorización y liquidación de obra',
      duration: '50 horas',
      modality: 'Presencial',
      description: 'Valorización y Liquidación en Excel: Formatos, fórmulas y gestión de obra.',
      imagen: '/images/valorización-liquidación.png'
    },
    {
      icon: BookOpen,
      title: 'Análisis y diseño de estructuras SAP 2000',
      duration: '100 horas',
      modality: 'Presencial',
      description: 'SAP 2000: Análisis y diseño de estructuras con normativas técnicas.',
      imagen: '/images/estructuras-sap2000.png'
    },
    {
      icon: BookOpen,
      title: 'Análisis y diseño de cimentaciones y losas SAFE',
      duration: '80 horas',
      modality: 'Presencial',
      description: 'SAFE: Análisis y diseño de cimentaciones y losas con normativas técnicas.',
      imagen: '/images/cimentaciones-losas-safe.png'
    },
    {
      icon: BookOpen,
      title: 'Análisis y diseño de edificaciones ETABS',
      duration: '80 horas',
      modality: 'Presencial',
      description: 'ETABS: Análisis y diseño de edificaciones con normativas técnicas.',
      imagen: '/images/edificaciones-etabs.png'
    },
    {
      icon: BookOpen,
      title: 'Modelado en arquitectura e interiorismo Sketchup',
      duration: '60 horas',
      modality: 'Presencial',
      description: 'Sketchup: Modelado 3D arquitectura e interiorismo con normativas técnicas.',
      imagen: '/images/modelado-sketchup.png'
    }
  ];

  return (
    <section id="formacion" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E31E24] via-[#FF6B6B] to-[#E31E24]"></div>

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
          <h2 className="text-[#E31E24] mb-4">Formación</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Carreras técnicas profesionales y cursos especializados, con <span className="font-bold text-[#E31E24]">títulos a nombre de la Nación</span>.
          </p>
        </motion.div>

        {/* Carreras Técnicas */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-[#E31E24]" size={32} />
            Carreras Técnicas Profesionales
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {carreras.map((carrera, index) => (
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
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="text-white" size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{carrera.duration}</div>
                      <div className="text-xs text-[#E31E24]">{carrera.modality}</div>
                    </div>
                  </div>

                  <h4 className="text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                    {carrera.title}
                  </h4>
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {carrera.description}
                  </p>

                  {/* Video de YouTube solo para Edificaciones */}
                  {index === 0 && (
                    <>
                      {/* Contenedor del video con borde rojo visible */}
                      <div 
                        className="mb-4 rounded-xl overflow-hidden shadow-lg border-[3px] border-[#E31E24] relative bg-black cursor-pointer group"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Click en video Edificaciones');
                          setModalVideo({ id: 'CXQnSK_ZHJE', title: 'Video Edificaciones' });
                        }}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {/* Miniatura del video como fondo */}
                          <div 
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center pointer-events-none"
                            style={{ 
                              backgroundImage: 'url(https://img.youtube.com/vi/CXQnSK_ZHJE/maxresdefault.jpg)',
                            }}
                          >
                            {/* Overlay oscuro para mejor contraste con el botón */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all"></div>
                          </div>
                          
                          {/* Botón de Play personalizado mejorado */}
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
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-full p-5 shadow-2xl border-4 border-white pointer-events-none"
                          >
                            {/* Anillo pulsante suave alrededor del botón */}
                            <motion.div
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.6, 0, 0.6],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 rounded-full border-3 border-[#E31E24]"
                            />
                            
                            {/* Icono de Play con sombra */}
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative z-10 drop-shadow-lg"
                            >
                              <path
                                d="M14 10L30 20L14 30V10Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Botón de Postular con animación llamativa */}
                      <motion.div
                        className="relative mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        {/* Anillos animados de fondo */}
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-xl blur-md"
                        />
                        
                        <motion.a
                          href="https://wa.me/51985018186?text=Hola%2C%20quiero%20postular%20a%20la%20carrera%20de%20Edificaciones"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: "0 20px 40px rgba(227, 30, 36, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{
                            y: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          className="relative block w-full bg-gradient-to-r from-[#E31E24] to-[#B01117] text-white text-center py-4 px-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden group"
                        >
                          {/* Efecto de brillo animado */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatDelay: 1
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          />
                          
                          {/* Texto con animación */}
                          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:scale-110 transition-transform">
                            <motion.span
                              animate={{
                                rotate: [0, 10, -10, 0],
                              }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            >
                              🎓
                            </motion.span>
                            Solicitar Información
                          </span>
                        </motion.a>
                      </motion.div>
                    </>
                  )}

                  {/* Video de YouTube solo para Topografía */}
                  {index === 1 && (
                    <>
                      {/* Contenedor del video con borde rojo visible */}
                      <div 
                        className="mb-4 rounded-xl overflow-hidden shadow-lg border-[3px] border-[#E31E24] relative bg-black cursor-pointer group"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('🎬 Click en video Topografía - Abriendo modal con ID: 1FJY9hUxteQ');
                          setModalVideo({ id: '1FJY9hUxteQ', title: 'Carrera de Topografía - SENCICO Trujillo' });
                        }}
                        onMouseDown={(e) => e.stopPropagation()}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {/* Miniatura del video como fondo */}
                          <div 
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center pointer-events-none"
                            style={{ 
                              backgroundImage: 'url(https://img.youtube.com/vi/1FJY9hUxteQ/maxresdefault.jpg)',
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
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-full p-5 shadow-2xl border-4 border-white pointer-events-none"
                          >
                            {/* Anillo pulsante suave alrededor del botón */}
                            <motion.div
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.6, 0, 0.6],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 rounded-full border-3 border-[#E31E24]"
                            />
                            
                            {/* Icono de Play con sombra */}
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative z-10 drop-shadow-lg"
                            >
                              <path
                                d="M14 10L30 20L14 30V10Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Botón de Postular con animación llamativa */}
                      <motion.div
                        className="relative mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        {/* Anillos animados de fondo */}
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-xl blur-md"
                        />
                        
                        <motion.a
                          href="https://wa.me/51985018186?text=Hola%2C%20quiero%20postular%20a%20la%20carrera%20de%20Topografía"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: "0 20px 40px rgba(227, 30, 36, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{
                            y: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          className="relative block w-full bg-gradient-to-r from-[#E31E24] to-[#B01117] text-white text-center py-4 px-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden group"
                        >
                          {/* Efecto de brillo animado */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatDelay: 1
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          />
                          
                          {/* Texto con animación */}
                          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:scale-110 transition-transform">
                            <motion.span
                              animate={{
                                rotate: [0, 10, -10, 0],
                              }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            >
                              🎓
                            </motion.span>
                            Solicitar Información
                          </span>
                        </motion.a>
                      </motion.div>
                    </>
                  )}

                  {/* Video de YouTube solo para Diseño de Interiores */}
                  {index === 2 && (
                    <>
                      {/* Contenedor del video con borde rojo visible */}
                      <div 
                        className="mb-4 rounded-xl overflow-hidden shadow-lg border-[3px] border-[#E31E24] relative bg-black cursor-pointer group"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Click en video Diseño de Interiores');
                          setModalVideo({ id: 'hp5Ty8hFHgM', title: 'Video Diseño de Interiores' });
                        }}
                      >
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                          {/* Miniatura del video como fondo */}
                          <div 
                            className="absolute top-0 left-0 w-full h-full bg-cover bg-center pointer-events-none"
                            style={{ 
                              backgroundImage: 'url(https://img.youtube.com/vi/hp5Ty8hFHgM/maxresdefault.jpg)',
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
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-full p-5 shadow-2xl border-4 border-white pointer-events-none"
                          >
                            {/* Anillo pulsante suave alrededor del botón */}
                            <motion.div
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.6, 0, 0.6],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="absolute inset-0 rounded-full border-3 border-[#E31E24]"
                            />
                            
                            {/* Icono de Play con sombra */}
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative z-10 drop-shadow-lg"
                            >
                              <path
                                d="M14 10L30 20L14 30V10Z"
                                fill="white"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Botón de Postular con animación llamativa */}
                      <motion.div
                        className="relative mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        {/* Anillos animados de fondo */}
                        <motion.div
                          animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-xl blur-md"
                        />
                        
                        <motion.a
                          href="https://wa.me/51985018186?text=Hola%2C%20quiero%20postular%20a%20la%20carrera%20de%20Diseño%20de%20Interiores"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ 
                            scale: 1.05, 
                            y: -5,
                            boxShadow: "0 20px 40px rgba(227, 30, 36, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{
                            y: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                          className="relative block w-full bg-gradient-to-r from-[#E31E24] to-[#B01117] text-white text-center py-4 px-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden group"
                        >
                          {/* Efecto de brillo animado */}
                          <motion.div
                            animate={{
                              x: ['-100%', '200%'],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              repeatDelay: 1
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                          />
                          
                          {/* Texto con animación */}
                          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:scale-110 transition-transform">
                            <motion.span
                              animate={{
                                rotate: [0, 10, -10, 0],
                              }}
                              transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            >
                              🎓
                            </motion.span>
                            Solicitar Información
                          </span>
                        </motion.a>
                      </motion.div>
                    </>
                  )}

                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="text-sm text-gray-600 mb-2">Competencias principales:</div>
                    <div className="flex flex-wrap gap-2">
                      {carrera.competencias.map((comp, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programas Cortos */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-900 mb-8 flex items-center gap-3"
          >
            <BookOpen className="text-[#E31E24]" size={32} />
            Cursos Especializados
          </motion.h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {programas.map((programa, index) => {
              const Icon = programa.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className="h-3 bg-gradient-to-r from-[#E31E24] to-[#B01117]"></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{programa.duration}</div>
                        <div className="text-xs text-[#E31E24]">{programa.modality}</div>
                      </div>
                    </div>

                    <h4 className="text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                      {programa.title}
                    </h4>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {programa.description}
                    </p>

                    {/* Contenedor de imagen con borde rojo visible */}
                    <div className="mb-4 rounded-xl overflow-hidden shadow-lg border-[3px] border-[#E31E24] relative bg-gray-100">
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        {/* Imagen del curso */}
                        <ImageWithFallback
                          src={programa.imagen}
                          alt={programa.title}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                        {/* Overlay sutil para mejor integración */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Botón de Solicitar Información con animación */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {/* Anillos animados de fondo */}
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-xl blur-md"
                      />
                      
                      <motion.a
                        href={`https://wa.me/51985018186?text=Hola%2C%20quiero%20información%20sobre%20el%20curso%20de%20${encodeURIComponent(programa.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05, 
                          y: -5,
                          boxShadow: "0 20px 40px rgba(227, 30, 36, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                        className="relative block w-full bg-gradient-to-r from-[#E31E24] to-[#B01117] text-white text-center py-3 px-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden group"
                      >
                        {/* Efecto de brillo animado */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 1
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                        
                        {/* Texto con animación */}
                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:scale-110 transition-transform text-sm">
                          <motion.span
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          >
                            📚
                          </motion.span>
                          Solicitar Información
                        </span>
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#E31E24] to-[#B01117] rounded-3xl p-8 text-center text-white shadow-2xl"
        >
          <Award className="mx-auto mb-4 text-white" size={48} />
          <h3 className="text-white mb-3">📚 Impulsa tu carrera profesional</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Descubre toda nuestra oferta formativa en construcción, software especializado y certificaciones técnicas. Descarga el catálogo completo.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://drive.google.com/uc?export=download&id=1EKcib6Y_tj7YfiZ7b48e4WfWB0k0rw7l"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#E31E24] px-8 py-3 rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl"
          >
            Descargar Catálogo de Cursos
          </motion.a>
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