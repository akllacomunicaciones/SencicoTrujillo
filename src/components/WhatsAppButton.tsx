import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappNumber = '51985018186'; // Número de WhatsApp de SENCICO Trujillo
  const message = 'Hola, me gustaría obtener información sobre SENCICO Trujillo.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Tooltip de Sencito */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header con el asistente Sencito */}
              <div className="bg-gradient-to-r from-[#E31E24] to-[#B01117] p-4 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <div className="font-semibold">SENCICO BOT</div>
                    <div className="text-xs opacity-90">Asistente Virtual</div>
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div className="p-4 bg-gray-50">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Hola, soy <strong>SENCICO BOT</strong>. Estoy aquí para ayudarte con tus consultas sobre <strong>SENCICO Trujillo</strong>. Escríbeme por WhatsApp.
                  </p>
                </div>
              </div>

              {/* Botón de cerrar */}
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={14} className="text-white" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Botón principal de WhatsApp */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowTooltip(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-2xl hover:shadow-gray-900/50 transition-all"
        >
          {/* Animación de pulso */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gray-900 rounded-full"
          />

          {/* Icono de WhatsApp */}
          <MessageCircle className="text-white relative z-10" size={28} strokeWidth={2} />

          {/* Badge de notificación */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#E31E24] rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        </motion.a>
      </motion.div>
    </>
  );
}