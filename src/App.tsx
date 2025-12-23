import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { SedePage } from './pages/SedePage';
import { FormacionPage } from './pages/FormacionPage';
import { TramitesPage } from './pages/TramitesPage';
import { ComunidadPage } from './pages/ComunidadPage';
import { NuestroEquipoPage } from './pages/NuestroEquipoPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sede" element={<SedePage />} />
            <Route path="/formacion" element={<FormacionPage />} />
            <Route path="/tramites" element={<TramitesPage />} />
            <Route path="/comunidad" element={<ComunidadPage />} />
            <Route path="/embajadores" element={<Navigate to="/comunidad" replace />} />
            <Route path="/equipo" element={<NuestroEquipoPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}