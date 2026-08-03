import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sparkles, Phone, Mail, MapPin, Send, Heart, Share2, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{
      background: 'var(--surface-container-low)',
      borderTop: '1px solid var(--outline-variant)',
      padding: '4rem 0 2rem 0',
      marginTop: '5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Brand Col */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem', textDecoration: 'none' }}>
              <img 
                src="/favicon.png" 
                alt="Beauty Nails Favicon Logo" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--primary)',
                  boxShadow: 'var(--shadow-glow)'
                }} 
              />
              <span style={{ 
                fontFamily: 'var(--font-headline)', 
                fontWeight: 800, 
                fontSize: '1.3rem',
                color: 'var(--primary)'
              }}>
                Beauty Nails
              </span>
            </Link>
            <p style={{ opacity: 0.8, fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {t('footer.desc')}
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <Share2 size={18} />
              </a>
              <a href="https://t.me/beautynails_uz" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <Send size={18} />
              </a>
              <a href="https://beautynails.uz" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--on-surface)' }}>
              {t('footer.quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              <li><Link to="/about" style={{ opacity: 0.8, textDecoration: 'none' }}>{t('nav.about')}</Link></li>
              <li><Link to="/services" style={{ opacity: 0.8, textDecoration: 'none' }}>{t('nav.services')}</Link></li>
              <li><Link to="/masters" style={{ opacity: 0.8, textDecoration: 'none' }}>{t('nav.masters')}</Link></li>
              <li><Link to="/contact" style={{ opacity: 0.8, textDecoration: 'none' }}>{t('nav.contact')}</Link></li>
              <li><Link to="/help" style={{ opacity: 0.8, textDecoration: 'none' }}>{t('nav.help')}</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--on-surface)' }}>
              {t('footer.hours')}
            </h4>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>{t('footer.everyday')}</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{t('footer.everydaySub')}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: 'var(--on-surface)' }}>
              {t('nav.contact')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', opacity: 0.85 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Phone size={18} color="var(--primary)" />
                <span>+998 93 113 33 11</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="var(--primary)" />
                <span>info@beautynails.uz</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={18} color="var(--primary)" />
                <span>{t('footer.address')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid var(--outline-variant)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.9rem',
          opacity: 0.7
        }}>
          <div>© 2026 Beauty Nails. {t('footer.rights')}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span>Coded with</span>
            <Heart size={14} fill="var(--primary)" color="var(--primary)" />
            <span>for Beauty & Elegance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
