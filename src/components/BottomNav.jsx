import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Sparkles, Calendar, Users, PhoneCall } from 'lucide-react';

const BottomNav = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav-container">
        
        {/* Home */}
        <Link 
          to="/" 
          className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}
        >
          <Home size={20} />
          <span>{t('nav.home')}</span>
        </Link>

        {/* Services */}
        <Link 
          to="/services" 
          className={`bottom-nav-item ${isActive('/services') ? 'active' : ''}`}
        >
          <Sparkles size={20} />
          <span>{t('nav.services')}</span>
        </Link>

        {/* Book Now (Center CTA Button) */}
        <Link 
          to="/contact" 
          className="bottom-nav-cta"
          aria-label={t('nav.bookNow')}
        >
          <Calendar size={22} color="#ffffff" />
          <span className="cta-label">{t('nav.bookNow')}</span>
        </Link>

        {/* Masters */}
        <Link 
          to="/masters" 
          className={`bottom-nav-item ${isActive('/masters') ? 'active' : ''}`}
        >
          <Users size={20} />
          <span>{t('nav.masters')}</span>
        </Link>

        {/* Contact */}
        <Link 
          to="/contact" 
          className={`bottom-nav-item ${isActive('/contact') ? 'active' : ''}`}
        >
          <PhoneCall size={20} />
          <span>{t('nav.contact')}</span>
        </Link>

      </nav>

      <style>{`
        .bottom-nav-wrapper {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 0.5rem 1rem 0.8rem 1rem;
          pointer-events: none;
        }

        .bottom-nav-container {
          pointer-events: auto;
          max-width: 500px;
          margin: 0 auto;
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          padding: 0.4rem 0.6rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          box-shadow: 0 10px 30px rgba(184, 0, 73, 0.2);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          color: var(--on-surface);
          opacity: 0.65;
          text-decoration: none;
          font-size: 0.68rem;
          font-weight: 600;
          padding: 0.4rem 0.6rem;
          border-radius: var(--radius-lg);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex: 1;
          text-align: center;
        }

        .bottom-nav-item:hover, .bottom-nav-item.active {
          opacity: 1;
          color: var(--primary);
          transform: translateY(-2px);
        }

        .bottom-nav-item.active svg {
          stroke-width: 2.5px;
          filter: drop-shadow(0 2px 6px rgba(184, 0, 73, 0.3));
        }

        .bottom-nav-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.1rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-deep) 100%);
          color: #ffffff !important;
          text-decoration: none;
          padding: 0.55rem 0.9rem;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 15px rgba(184, 0, 73, 0.4);
          transform: translateY(-8px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bottom-nav-cta .cta-label {
          font-size: 0.62rem;
          font-weight: 800;
          color: #ffffff;
          white-space: nowrap;
        }

        .bottom-nav-cta:hover {
          transform: translateY(-11px) scale(1.05);
          box-shadow: var(--shadow-glow);
        }

        @media (max-width: 768px) {
          .bottom-nav-wrapper {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default BottomNav;
