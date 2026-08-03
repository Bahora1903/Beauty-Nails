import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, ChevronDown, ChevronUp, Send, Phone } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

const Help = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

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
            <HelpCircle size={16} />
            <span>{t('helpPage.badge')}</span>
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem' }}>{t('helpPage.title')}</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{t('helpPage.subtitle')}</p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto 4rem auto', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const translatedQ = t(`helpPage.faqList.${faq.id}.q`, { defaultValue: faq.q });
            const translatedA = t(`helpPage.faqList.${faq.id}.a`, { defaultValue: faq.a });

            return (
              <div 
                key={faq.id} 
                className="glass-card"
                style={{ overflow: 'hidden', transition: 'all 0.3s ease' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    color: 'var(--on-surface)',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <span>{translatedQ}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', opacity: 0.85, lineHeight: '1.6', fontSize: '0.98rem', borderTop: '1px dashed var(--glass-border)', paddingTop: '1rem' }}>
                    {translatedA}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Support Section */}
        <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem 2rem', borderRadius: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.8rem' }}>{t('helpPage.noAnswerTitle')}</h3>
          <p style={{ opacity: 0.8, marginBottom: '2rem' }}>{t('helpPage.noAnswerSub')}</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://t.me/beautynails_uz" target="_blank" rel="noreferrer" className="btn-primary">
              <Send size={18} />
              <span>{t('helpPage.tgBtn')}</span>
            </a>
            <a href="tel:+998931133311" className="btn-secondary">
              <Phone size={18} />
              <span>{t('helpPage.callBtn')}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Help;
