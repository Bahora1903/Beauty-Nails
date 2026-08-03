import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, CheckCircle } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="page-transition" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--surface-container-high)',
            color: 'var(--primary)',
            padding: '0.4rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.9rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            <Sparkles size={16} />
            <span>{t('aboutPage.badge')}</span>
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem' }}>{t('aboutPage.title')}</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.6' }}>
            {t('aboutPage.subtitle')}
          </p>
        </div>

        {/* Story Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          <div style={{ borderRadius: '2rem', overflow: 'hidden', border: '4px solid var(--glass-border)', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
              alt="Salon Interior" 
              style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.2rem' }}>{t('aboutPage.missionTitle')}</h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {t('aboutPage.missionP1')}
            </p>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              {t('aboutPage.missionP2')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <CheckCircle color="var(--primary)" size={20} />
                <span style={{ fontWeight: 600 }}>{t('aboutPage.check1')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <CheckCircle color="var(--primary)" size={20} />
                <span style={{ fontWeight: 600 }}>{t('aboutPage.check2')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <CheckCircle color="var(--primary)" size={20} />
                <span style={{ fontWeight: 600 }}>{t('aboutPage.check3')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
