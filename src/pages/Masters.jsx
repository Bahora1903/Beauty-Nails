import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Star, Award, Calendar } from 'lucide-react';
import { MASTERS_DATA } from '../data/mockData';

const Masters = () => {
  const { t } = useTranslation();

  return (
    <div className="page-transition" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
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
            <Award size={16} />
            <span>{t('masters.badge')}</span>
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem' }}>{t('masters.title')}</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{t('masters.subtitle')}</p>
        </div>

        {/* Masters Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {MASTERS_DATA.map((master) => (
            <div key={master.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '1.2rem 1.2rem 0 0', overflow: 'hidden' }}>
                <img src={master.photo} alt={master.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Rating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(0, 0, 0, 0.75)',
                  backdropFilter: 'blur(8px)',
                  color: '#fff',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}>
                  <Star size={15} fill="#FFD700" color="#FFD700" />
                  <span>{master.rating}</span>
                </div>
              </div>

              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.2rem' }}>{master.name}</h3>
                <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                  {master.role}
                </span>

                {/* Master Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  background: 'var(--surface-container-low)',
                  padding: '0.8rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6 }}>{t('masters.exp')}</span>
                    <strong style={{ fontSize: '0.95rem' }}>{master.experience}</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6 }}>{t('masters.clients')}</span>
                    <strong style={{ fontSize: '0.95rem' }}>{master.completedClients}</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6 }}>{t('masters.reviews')}</span>
                    <strong style={{ fontSize: '0.95rem' }}>{master.reviewsCount}</strong>
                  </div>
                </div>

                {/* Skills Tags */}
                <div style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.7, marginBottom: '0.5rem', fontWeight: 600 }}>
                    {t('masters.specialityLabel')}
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {master.skills.map((skill, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.6rem',
                        background: 'var(--surface-container-high)',
                        borderRadius: 'var(--radius-sm)',
                        fontWeight: 500
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                  <Calendar size={18} />
                  <span>{t('masters.bookMaster')}</span>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Masters;
