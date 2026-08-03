import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, Award, ShieldCheck, HeartHandshake, ArrowRight, Star, Clock } from 'lucide-react';
import { SERVICES_DATA, MASTERS_DATA, TESTIMONIALS_DATA } from '../data/mockData';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="page-transition" style={{ paddingTop: '5.5rem' }}>
      
      {/* HERO SECTION */}
      <section style={{ padding: '4rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--surface-container-high)',
              color: 'var(--primary)',
              padding: '0.45rem 1.3rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              border: '1px solid var(--outline-variant)'
            }}>
              {t('hero.badge')}
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, var(--on-surface) 30%, var(--primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {t('hero.title')}
            </h1>
            <p style={{ fontSize: '1.15rem', opacity: 0.85, marginBottom: '2.5rem', maxWidth: '540px', lineHeight: '1.7' }}>
              {t('hero.subtitle')}
            </p>

            <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '1rem 2.2rem' }}>
                <Calendar size={18} />
                <span>{t('hero.bookBtn')}</span>
              </Link>
              <Link to="/services" className="btn-secondary" style={{ padding: '1rem 2.2rem' }}>
                <span>{t('hero.servicesBtn')}</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--outline-variant)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>5000+</h3>
                <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>{t('hero.stats.clients')}</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>12+</h3>
                <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>{t('hero.stats.masters')}</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>15+</h3>
                <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>{t('hero.stats.services')}</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>8+</h3>
                <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>{t('hero.stats.experience')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hero-image-col"
          >
            <div style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid var(--glass-border)',
              aspectRatio: '4/3',
              maxHeight: '500px'
            }}>
              <img 
                src="/images/hero/hero-manicure.webp" 
                alt="Manicure Hero" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)'
              }} />
            </div>

            {/* Floating Glass Badge */}
            <div className="glass-panel hero-floating-badge">
              <div className="hero-badge-icon">
                <Award className="hero-badge-award" size={24} />
              </div>
              <div>
                <h4 className="hero-badge-title">{t('advantages.sterile')}</h4>
                <p className="hero-badge-sub">{t('advantages.sterileDesc')}</p>
              </div>
            </div>
          </motion.div>

        </div>

        <style>{`
          .hero-image-col {
          position: relative;
        }
        .hero-floating-badge {
          position: absolute;
          bottom: -22px;
          left: -15px;
          z-index: 10;
          padding: 1rem 1.4rem;
          border-radius: 1.4rem;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          box-shadow: 0 12px 35px rgba(184, 0, 73, 0.2);
          max-width: 90%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
        .hero-badge-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-deep, #b80049) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(184, 0, 73, 0.3);
        }
        .hero-badge-title {
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.25;
        }
        .hero-badge-sub {
          font-size: 0.78rem;
          opacity: 0.8;
          line-height: 1.3;
        }

        @media (max-width: 768px) {
          .hero-image-col {
            margin-bottom: 30px;
          }
          .hero-floating-badge {
            position: absolute;
            bottom: -20px;
            left: 0;
            right: auto;
            padding: 0.7rem 1rem;
            border-radius: 1.2rem;
            gap: 0.75rem;
            max-width: calc(100% - 15px);
            box-shadow: 0 10px 30px rgba(184, 0, 73, 0.25);
          }
          .hero-badge-icon {
            width: 36px;
            height: 36px;
          }
          .hero-badge-award {
            width: 18px !important;
            height: 18px !important;
          }
          .hero-badge-title {
            font-size: 0.85rem;
            font-weight: 700;
          }
          .hero-badge-sub {
            font-size: 0.7rem;
            opacity: 0.85;
            line-height: 1.25;
          }
        }
        `}</style>
      </section>

      {/* ADVANTAGES */}
      <section style={{ padding: '5rem 0', background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>{t('advantages.title')}</h2>
            <p style={{ opacity: 0.8 }}>{t('advantages.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.2rem' }}>
                <ShieldCheck size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{t('advantages.sterile')}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('advantages.sterileDesc')}</p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.2rem' }}>
                <Sparkles size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{t('advantages.materials')}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('advantages.materialsDesc')}</p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.2rem' }}>
                <Award size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{t('advantages.masters')}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('advantages.mastersDesc')}</p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.2rem' }}>
                <HeartHandshake size={30} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>{t('advantages.quality')}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('advantages.qualityDesc')}</p>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section style={{ padding: '4.5rem 0 1rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'var(--surface-container-high)',
              color: 'var(--primary)',
              padding: '0.4rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.88rem',
              fontWeight: 600,
              marginBottom: '0.8rem'
            }}>
              <Sparkles size={16} />
              <span>{t('categoriesSection.badge')}</span>
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.6rem' }}>{t('categoriesSection.title')}</h2>
            <p style={{ opacity: 0.8 }}>{t('categoriesSection.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { id: 'manicure', label: t('services.manicure'), icon: '💅', img: '/images/services/service-1-classic-manicure.webp', count: `7 ${t('categoriesSection.countServices')}` },
              { id: 'pedicure', label: t('services.pedicure'), icon: '🦶', img: '/images/services/service-9-pedicure.webp', count: `3 ${t('categoriesSection.countServices')}` },
              { id: 'extension', label: t('services.extension'), icon: '✨', img: '/images/services/service-8-nail-extension.webp', count: `2 ${t('categoriesSection.countServices')}` },
              { id: 'design', label: t('services.design'), icon: '🎨', img: '/images/services/service-5-french-manicure.webp', count: `4 ${t('categoriesSection.countServices')}` }
            ].map((cat) => (
              <Link 
                key={cat.id}
                to={`/services/${cat.id}`}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1.5rem'
                }}
              >
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  border: '3px solid var(--primary-container)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <img src={cat.img} alt={cat.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--on-surface)' }}>
                  {cat.icon} {cat.label}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 700 }}>
                  {cat.count}
                </span>
                <span style={{
                  marginTop: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--primary)'
                }}>
                  <span>{t('categoriesSection.viewAll')}</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES PREVIEW */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>{t('homeServices.title')}</h2>
              <p style={{ opacity: 0.8 }}>{t('homeServices.subtitle')}</p>
            </div>
            <Link to="/services" className="btn-secondary">
              <span>{t('homeServices.allBtn')}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {SERVICES_DATA.slice(0, 4).map((service) => {
              const translatedTitle = t(`services.items.${service.id}.title`, { defaultValue: service.title });
              const translatedDesc = t(`services.items.${service.id}.desc`, { defaultValue: service.description });

              return (
                <div key={service.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                    <img src={service.image} alt={translatedTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{translatedTitle}</h3>
                      <span style={{ 
                        fontSize: '0.82rem', 
                        padding: '0.3rem 0.8rem', 
                        borderRadius: 'var(--radius-full)', 
                        background: 'var(--surface-container-high)', 
                        color: 'var(--primary)', 
                        border: '1px solid var(--outline-variant)',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <Clock size={14} color="var(--primary)" />
                        <span>{service.duration} {t('services.duration')}</span>
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9rem', opacity: 0.85, marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.5' }}>
                      {translatedDesc}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {service.price.toLocaleString()} so'm
                      </span>
                      <Link to="/contact" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                        {t('homeServices.selectBtn')}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '5rem 0', background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>{t('testimonials.title')}</h2>
            <p style={{ opacity: 0.8 }}>{t('testimonials.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {TESTIMONIALS_DATA.map((item) => (
              <div key={item.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                  ))}
                </div>
                <p style={{ fontSize: '0.95rem', opacity: 0.85, fontStyle: 'italic', lineHeight: '1.6' }}>
                  "{item.comment}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  <img src={item.avatar} alt={item.name} style={{ width: 46, height: 46, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{item.name}</h4>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="glass-panel" style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent-deep) 100%)',
            color: '#fff',
            borderRadius: '2rem',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
              {t('cta.title')}
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem auto', color: '#fff' }}>
              {t('cta.subtitle')}
            </p>
            <Link to="/contact" style={{ 
              background: '#ffffff', 
              color: '#121212', 
              padding: '1rem 2.5rem', 
              fontSize: '1.1rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <Calendar size={20} color="#121212" />
              <span style={{ color: '#121212', fontWeight: 800 }}>{t('cta.bookBtn')}</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
