import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'La Sede', path: '/sede' },
    { name: 'Formación', path: '/formacion' },
    { name: 'Trámites', path: '/tramites' },
    { name: 'Embajadores', path: '/comunidad' },
    { name: 'Nuestro Equipo', path: '/equipo' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 flex items-center justify-between p-6 lg:px-12 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <Link to="/">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 sm:gap-4 cursor-pointer"
        >
          <motion.img 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            src="/images/logo-sencico.png" 
            alt="SENCICO Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 drop-shadow-lg" 
          />
          <div className="text-[#E31E24]">
            <div className="tracking-wider text-sm sm:text-base">SENCICO</div>
            <div className="tracking-wide text-xs sm:text-sm opacity-90">SEDE TRUJILLO</div>
          </div>
        </motion.div>
      </Link>

      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-[#E31E24] p-2 hover:bg-gray-100 rounded-xl transition-all"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden lg:flex items-center gap-6"
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
          >
            <motion.div
              whileHover={{ y: -2 }}
              className={`transition-all relative group cursor-pointer ${
                location.pathname === item.path 
                  ? 'text-[#E31E24]' 
                  : 'text-gray-700 hover:text-[#E31E24]'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#E31E24] transition-all duration-300 ${
                location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
        >
          <div className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
              >
                <div
                  className={`transition-all hover:translate-x-2 transform duration-300 ${
                    location.pathname === item.path 
                      ? 'text-[#E31E24]' 
                      : 'text-gray-700 hover:text-[#E31E24]'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}