import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search, Clock, Sparkles, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

const Services = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const serviceTitle = t(`services.items.${service.id}.title`, { defaultValue: service.title });
    const serviceDesc = t(`services.items.${service.id}.desc`, { defaultValue: service.description });
    
    const matchesSearch = serviceTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          serviceDesc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <Sparkles size={16} />
            <span>{t('services.badge')}</span>
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem' }}>{t('services.title')}</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{t('services.subtitle')}</p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          borderRadius: '1.5rem',
          marginBottom: '3rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          
          {/* Categories */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: t('services.all') },
              { id: 'manicure', label: t('services.manicure') },
              { id: 'pedicure', label: t('services.pedicure') },
              { id: 'extension', label: t('services.extension') },
              { id: 'design', label: t('services.design') }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  background: selectedCategory === cat.id ? 'var(--primary)' : 'var(--surface-container-high)',
                  color: selectedCategory === cat.id ? '#ffffff' : 'var(--on-surface)',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '280px', flexGrow: 1, maxWidth: '400px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.6, color: 'var(--on-surface)' }} />
            <input 
              type="text" 
              placeholder={t('services.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.8rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--outline-variant)',
                background: 'var(--surface-container-lowest)',
                color: 'var(--on-surface)',
                outline: 'none',
                fontSize: '0.95rem'
              }}
            />
          </div>

        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '2.5rem' }}>
          {filteredServices.map((service) => {
            const translatedTitle = t(`services.items.${service.id}.title`, { defaultValue: service.title });
            const translatedDesc = t(`services.items.${service.id}.desc`, { defaultValue: service.description });

            return (
              <div key={service.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
                  <img src={service.image} alt={translatedTitle} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    {service.difficulty}
                  </span>
                </div>

                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>{translatedTitle}</h3>
                  
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', color: 'var(--primary)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', width: 'fit-content' }}>
                    <Clock size={15} color="var(--primary)" />
                    <span>{service.duration} {t('services.duration')}</span>
                  </div>

                  <p style={{ fontSize: '0.92rem', opacity: 0.85, marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6' }}>
                    {translatedDesc}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.2rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.6, textTransform: 'uppercase' }}>{t('services.priceLabel')}</span>
                      <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {service.price.toLocaleString()} so'm
                      </span>
                    </div>
                    <Link to="/contact" className="btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}>
                      <Check size={16} />
                      <span>{t('services.bookService')}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;
