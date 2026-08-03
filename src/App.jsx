import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Masters from './pages/Masters';
import Contact from './pages/Contact';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import './i18n/i18n';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('beauty_nails_theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('beauty_nails_theme', theme);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="app-main-content" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category" element={<Services />} />
            <Route path="/masters" element={<Masters />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .app-main-content {
            padding-bottom: 4.5rem;
          }
        }
      `}</style>
    </Router>
  );
}

export default App;
