import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
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
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link to="/">
              <div className="flex items-center gap-4 mb-6 cursor-pointer">
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/images/logo-sencico.png" 
                  alt="SENCICO Logo" 
                  className="w-16 h-16 drop-shadow-xl" 
                />
                <div>
                  <div className="tracking-wider">SENCICO</div>
                  <div className="opacity-90">SEDE TRUJILLO</div>
                </div>
              </div>
            </Link>
            <p className="opacity-90 mb-6 leading-relaxed">
              SENCICO es la institución líder en formación y capacitación de profesionales 
              del sector construcción comprometidos con el desarrollo del país.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 bg-white/20 hover:bg-white hover:text-[#E31E24] rounded-full flex items-center justify-center transition-all backdrop-blur-sm shadow-lg"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3 opacity-90">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="hover:opacity-80 transition-all inline-flex items-center group cursor-pointer"
                    >
                      <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                      {item.name}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4">Recursos</h3>
            <ul className="space-y-3 opacity-90">
              {['Carreras Técnicas', 'Certificación', 'Laboratorios', 'Mesa de Partes', 'Bolsa de Trabajo'].map((item) => (
                <li key={item}>
                  <Link to="/servicios">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="hover:opacity-80 transition-all inline-flex items-center group cursor-pointer"
                    >
                      <span className="w-0 h-0.5 bg-white group-hover:w-4 transition-all mr-0 group-hover:mr-2"></span>
                      {item}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-90">
            <div className="text-center md:text-left">
              <p className="mb-2 text-sm md:text-base">© 2025 SENCICO Sede Trujillo</p>
              <p className="text-base md:text-lg font-bold opacity-100">
                Diseñado y desarrollado por{' '}
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="https://linktr.ee/akllacomunicaciones?fbclid=PAZXh0bgNhZW0CMTEAAaa4Wcz31SDy1m439EFraaEcRJRi41O39oX9LDBvyVEeN0ZXwEMe7t34Gdg_aem_N38EnUGBO2UH8erJM7iAsA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors underline decoration-2 underline-offset-4"
                >
                  Aklla Group
                </motion.a>
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 text-sm md:text-base">
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="hover:opacity-80 transition-all"
              >
                Política de Privacidad
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="hover:opacity-80 transition-all"
              >
                Términos de Uso
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#E31E24] hover:bg-[#B01117] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}