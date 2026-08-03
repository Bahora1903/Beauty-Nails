import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe, Menu, X, Sparkles, PhoneCall, ChevronDown } from 'lucide-react';

const Navbar = ({ theme, setTheme }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('beauty_nails_lang', lang);
    setLangDropdownOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const currentLangLabel = {
    uz: 'O\'zbek',
    ru: 'Русский',
    en: 'English'
  }[i18n.language] || 'O\'zbek';

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.8rem 0' : '1.2rem 0',
        background: isScrolled 
          ? (theme === 'dark' ? 'rgba(18, 18, 18, 0.95)' : 'rgba(255, 248, 247, 0.95)')
          : (theme === 'dark' ? 'rgba(18, 18, 18, 0.6)' : 'rgba(255, 248, 247, 0.6)'),
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
        borderBottom: '1px solid var(--glass-border)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <img 
            src="/favicon.png" 
            alt="Beauty Nails Favicon Logo" 
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--primary)',
              boxShadow: 'var(--shadow-glow)',
              transition: 'transform 0.3s ease'
            }} 
            className="logo-icon" 
          />
          <div>
            <span style={{ 
              fontFamily: 'var(--font-headline)', 
              fontWeight: 800, 
              fontSize: '1.4rem', 
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-deep) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Beauty Nails
            </span>
            <span style={{ display: 'block', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7, marginTop: '-3px', color: 'var(--on-surface)' }}>
              Luxury Manicure
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-menu">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            {t('nav.home')}
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            {t('nav.about')}
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
            {t('nav.services')}
          </Link>
          <Link to="/masters" className={`nav-link ${isActive('/masters') ? 'active' : ''}`}>
            {t('nav.masters')}
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            {t('nav.contact')}
          </Link>
          <Link to="/help" className={`nav-link ${isActive('/help') ? 'active' : ''}`}>
            {t('nav.help')}
          </Link>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          
          {/* Custom Stylized Language Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-toggle-btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'var(--surface-container-high)',
                color: 'var(--on-surface)',
                border: '1px solid var(--outline-variant)',
                padding: '0.45rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <Globe size={16} color="var(--primary)" />
              <span className="lang-label-text">{currentLangLabel}</span>
              <ChevronDown size={14} className="lang-chevron" style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
            </button>

            {langDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  background: 'var(--card-bg)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '1rem',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '0.5rem',
                  minWidth: '130px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                  zIndex: 1001,
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                {[
                  { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
                  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
                  { code: 'en', label: 'English', flag: '🇺🇸' }
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => changeLanguage(item.code)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.55rem 0.8rem',
                      borderRadius: 'var(--radius-md)',
                      background: i18n.language === item.code ? 'var(--primary-container)' : 'transparent',
                      color: i18n.language === item.code ? 'var(--on-primary-container)' : 'var(--on-surface)',
                      border: 'none',
                      fontWeight: i18n.language === item.code ? 700 : 500,
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--surface-container-high)',
              border: '1px solid var(--outline-variant)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--on-surface)',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            className="theme-btn"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} color="#FFD700" />}
          </button>

          {/* Book Now Button (Hidden on small mobile screens to prevent overflow; available in bottom nav) */}
          <Link to="/contact" className="btn-primary header-book-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
            <PhoneCall size={16} />
            <span>{t('nav.bookNow')}</span>
          </Link>

          {/* Hamburger Mobile Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Menu toggle"
            style={{
              display: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--surface-container-high)',
              border: '1px solid var(--outline-variant)',
              color: 'var(--on-surface)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Styled Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          background: 'var(--card-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          padding: '1.8rem 1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-lg)',
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto',
          animation: 'slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
            {t('nav.home')}
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
            {t('nav.about')}
          </Link>

          {/* Services Header & Categories Submenu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/services') ? 'active' : ''}`}>
              {t('nav.services')}
            </Link>
            
            {/* Category Quick Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingLeft: '0.5rem', paddingTop: '0.2rem' }}>
              <Link to="/services/manicure" onClick={() => setMobileMenuOpen(false)} className="mobile-cat-chip">
                💅 {t('services.manicure')}
              </Link>
              <Link to="/services/pedicure" onClick={() => setMobileMenuOpen(false)} className="mobile-cat-chip">
                🦶 {t('services.pedicure')}
              </Link>
              <Link to="/services/extension" onClick={() => setMobileMenuOpen(false)} className="mobile-cat-chip">
                ✨ {t('services.extension')}
              </Link>
              <Link to="/services/design" onClick={() => setMobileMenuOpen(false)} className="mobile-cat-chip">
                🎨 {t('services.design')}
              </Link>
            </div>
          </div>

          <Link to="/masters" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/masters') ? 'active' : ''}`}>
            {t('nav.masters')}
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
            {t('nav.contact')}
          </Link>
          <Link to="/help" onClick={() => setMobileMenuOpen(false)} className={`mobile-nav-link ${isActive('/help') ? 'active' : ''}`}>
            {t('nav.help')}
          </Link>

          {/* Mobile Language Switcher */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.5rem' }}>
            {[
              { code: 'uz', label: 'UZ 🇺🇿' },
              { code: 'ru', label: 'RU 🇷🇺' },
              { code: 'en', label: 'EN 🇺🇸' }
            ].map(m => (
              <button 
                key={m.code}
                onClick={() => changeLanguage(m.code)}
                style={{
                  flex: 1,
                  padding: '0.6rem',
                  borderRadius: 'var(--radius-md)',
                  background: i18n.language === m.code ? 'var(--primary)' : 'var(--surface-container-high)',
                  color: i18n.language === m.code ? '#fff' : 'var(--on-surface)',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--on-surface);
          opacity: 0.85;
          position: relative;
          transition: all 0.3s ease;
          padding: 0.2rem 0;
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--primary);
        }
        .nav-link.active {
          fontWeight: 700;
          color: var(--primary);
          opacity: 1;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
          border-radius: var(--radius-full);
        }

        .theme-btn:hover, .logo-icon:hover {
          transform: scale(1.08);
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--on-surface);
          padding: 0.4rem 0;
          border-bottom: 1px dashed var(--glass-border);
          transition: color 0.3s ease;
        }
        .mobile-nav-link.active {
          color: var(--primary);
          font-weight: 700;
        }

        .mobile-cat-chip {
          font-size: 0.78rem;
          font-weight: 600;
          padding: 0.35rem 0.75rem;
          background: var(--surface-container-high);
          color: var(--on-surface);
          border-radius: var(--radius-full);
          border: 1px solid var(--outline-variant);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .mobile-cat-chip:hover {
          background: var(--primary);
          color: #ffffff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 960px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }

        @media (max-width: 768px) {
          .header-book-btn { display: none !important; }
          .lang-label-text { display: none !important; }
          .lang-chevron { display: none !important; }
          .lang-toggle-btn {
            padding: 0.5rem !important;
            border-radius: 50% !important;
            width: 40px !important;
            height: 40px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
