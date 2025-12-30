import { FileText, CreditCard, Download, RefreshCw, CheckSquare, Clipboard } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

export function Tramites() {
  const [modalVideo, setModalVideo] = useState<{ id: string; title: string } | null>(null);

  const tramites = [
    {
      icon: FileText,
      title: 'Constancias de Estudios',
      description: 'Solicita constancias de matrícula, notas o estudios realizados en SENCICO.',
      requisitos: ['DNI original y copia', 'Código de estudiante', 'Pago de derecho S/ 15.00'],
      plazo: '2 días hábiles'
    },
    {
      icon: CheckSquare,
      title: 'Certificados de Estudios',
      description: 'Obtén tu certificado oficial de egreso de carrera técnica o programa corto.',
      requisitos: ['DNI original y copia', 'No tener deudas pendientes', 'Pago de derecho S/ 50.00'],
      plazo: '5 días hábiles'
    },
    {
      icon: Download,
      title: 'Duplicado de Certificado',
      description: 'Solicita una copia adicional de tu certificado de estudios o competencias.',
      requisitos: ['DNI original y copia', 'Recibo del certificado original', 'Pago de derecho S/ 40.00'],
      plazo: '3 días hábiles'
    },
    {
      icon: RefreshCw,
      title: 'Rectificación de Datos',
      description: 'Corrige nombres, apellidos o datos personales en tus documentos académicos.',
      requisitos: ['DNI o partida de nacimiento actualizada', 'Documento a rectificar', 'Pago de derecho S/ 30.00'],
      plazo: '7 días hábiles'
    },
    {
      icon: Clipboard,
      title: 'Récord Académico',
      description: 'Documento detallado con todas tus notas y cursos aprobados en SENCICO.',
      requisitos: ['DNI original y copia', 'Código de estudiante', 'Pago de derecho S/ 20.00'],
      plazo: '3 días hábiles'
    },
    {
      icon: CreditCard,
      title: 'Pagos y Consultas',
      description: 'Realiza pagos de matrículas, pensiones o consulta tu estado de cuenta.',
      requisitos: ['DNI', 'Código de estudiante (si aplica)'],
      plazo: 'Inmediato'
    }
  ];

  const mediosPago = [
    { metodo: 'Yape', horario: 'Pagos inmediatos 24/7' }
  ];

  return (
    <section id="tramites" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E31E24]/5 rounded-full blur-3xl"></div>

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
          <h2 className="text-[#E31E24] mb-4 px-4">Trámites</h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed px-4">
            Gestiona tus documentos, certificados y pagos de manera rápida y sencilla. 
            Todo lo que necesitas en un solo lugar.
          </p>
        </motion.div>

        {/* Trámites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tramites.map((tramite, index) => {
            const Icon = tramite.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                <h4 className="text-gray-900 mb-2 group-hover:text-[#E31E24] transition-colors">
                  {tramite.title}
                </h4>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {tramite.description}
                </p>

                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="text-xs text-gray-500 mb-2">Requisitos:</div>
                  <ul className="space-y-1">
                    {tramite.requisitos.map((req, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-[#E31E24] mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 bg-[#E31E24] rounded-full"></div>
                  <span className="text-gray-600">Plazo: <strong>{tramite.plazo}</strong></span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Medios de Pago */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E31E24] to-[#B01117] rounded-xl flex items-center justify-center shadow-lg">
              <CreditCard className="text-white" size={28} />
            </div>
            <h3 className="text-gray-900">Medios de Pago</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {mediosPago.map((medio, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#E31E24] transition-all"
              >
                <div className="text-gray-900 mb-1">{medio.metodo}</div>
                <div className="text-sm text-gray-600">{medio.horario}</div>
              </motion.div>
            ))}
          </div>

          {/* Video Instructivo Yape */}
          <div 
            className="mb-4 rounded-xl overflow-hidden shadow-lg border-[3px] border-[#E31E24] relative bg-black cursor-pointer group"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setModalVideo({ id: 'c9u5eUXa7K8', title: 'Tutorial de Pago por Yape - SENCICO Trujillo' });
            }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {/* Miniatura del video como fondo */}
              <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center pointer-events-none"
                style={{ 
                  backgroundImage: 'url(https://img.youtube.com/vi/c9u5eUXa7K8/maxresdefault.jpg)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 group-hover:from-[#E31E24]/60 group-hover:to-[#B01117]/40 transition-all duration-500"></div>
              </div>

              {/* Botón de play */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-l-[20px] border-l-[#E31E24] border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1.5"></div>
                </div>
              </div>

              {/* Texto overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm text-center">Tutorial de pago por Yape</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#E31E24]/5 rounded-xl border-l-4 border-[#E31E24]">
            <p className="text-sm text-gray-700">
              <strong>Importante:</strong> Conserva tu comprobante de pago para cualquier trámite. 
              Los pagos realizados en bancos demoran 24 horas en reflejarse en nuestro sistema.
            </p>
          </div>
        </motion.div>

        {/* Info adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            ¿Necesitas ayuda con tus trámites administrativos? Contáctanos por WhatsApp y te brindaremos asesoría inmediata.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/51985018186?text=Hola%2C%20necesito%20ayuda%20con%20un%20trámite%20administrativo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#E31E24] to-[#B01117] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
          >
            Solicitar Ayuda
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