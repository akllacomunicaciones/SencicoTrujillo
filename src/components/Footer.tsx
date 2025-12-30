import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/SencicoSedeTrujillo', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sencico_trujillo?igsh=MWE0cTNqcWt6cnpmZA%3D%3D', label: 'Instagram' },
    { icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ), href: '#', label: 'TikTok' }
  ];

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'La Sede', path: '/sede' },
    { name: 'Formación', path: '/formacion' },
    { name: 'Trámites', path: '/tramites' },
    { name: 'Embajadores', path: '/comunidad' },
    { name: 'Nuestro Equipo', path: '/equipo' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#E31E24] via-[#C81A1F] to-[#B01117] text-white relative overflow-hidden">
      {/* Animated geometric shapes - formas cuadradas y circulares */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-40 h-40 border-4 border-white"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-white"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [0, -90, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 w-32 h-32 border-4 border-white transform -translate-y-1/2"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-32 right-1/4 w-24 h-24 rounded-full bg-white"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Header creativo con logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <Link to="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-5 cursor-pointer bg-white/10 backdrop-blur-md rounded-3xl px-8 py-6 shadow-2xl border border-white/20"
            >
              <motion.img 
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                src="/images/logo-sencico.png" 
                alt="SENCICO Logo" 
                className="w-24 h-24 drop-shadow-2xl" 
              />
              <div className="text-left">
                <div className="tracking-widest text-3xl mb-1">SENCICO</div>
                <div className="opacity-90 tracking-wide">SEDE TRUJILLO</div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Grid con descripción y enlaces */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Descripción - 3 columnas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="relative">
              <div className="absolute -left-2 top-0 w-1 h-full bg-white rounded-full"></div>
              <p className="text-xl leading-relaxed pl-6 opacity-95">
                Institución líder en formación y capacitación de profesionales 
                del sector <span className="font-bold text-white">construcción</span> comprometidos 
                con el desarrollo del país.
              </p>
            </div>
            
            {/* Social Links con estilo único */}
            <div className="flex gap-3 mt-8 pl-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      backgroundColor: "rgba(255, 255, 255, 1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-white/15 hover:text-[#E31E24] rounded-2xl flex items-center justify-center transition-colors backdrop-blur-md shadow-xl border border-white/20"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Enlaces rápidos - 2 columnas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20">
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={item.path}>
                      <motion.div
                        whileHover={{ x: 8, color: "#FFFFFF" }}
                        className="text-lg cursor-pointer py-2 px-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-3"
                      >
                        <motion.span 
                          className="w-2 h-2 bg-white rounded-full"
                          whileHover={{ scale: 1.5 }}
                        ></motion.span>
                        {item.name}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar más creativa */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t-2 border-white/30 pt-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80 mb-3">© 2025 SENCICO Sede Trujillo. Todos los derechos reservados.</p>
              <motion.p 
                className="text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Diseñado y desarrollado por{' '}
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="https://linktr.ee/akllacomunicaciones?fbclid=PAZXh0bgNhZW0CMTEAAaa4Wcz31SDy1m439EFraaEcRJRi41O39oX9LDBvyVEeN0ZXwEMe7t34Gdg_aem_N38EnUGBO2UH8erJM7iAsA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-white/80 transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-2xl">✦</span> Aklla Group <span className="text-2xl">✦</span>
                </motion.a>
              </motion.p>
            </div>
            <div className="flex gap-6">
              {['Política de Privacidad', 'Términos de Uso'].map((text, i) => (
                <motion.a 
                  key={text}
                  whileHover={{ y: -3 }}
                  href="#" 
                  className="text-sm opacity-90 hover:opacity-100 transition-all relative group"
                >
                  {text}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  ></motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}