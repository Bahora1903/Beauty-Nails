import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, MASTERS_DATA } from '../data/mockData';

const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: '',
    master: '',
    date: '',
    time: '',
    message: ''
  });

const getPublicIp = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const response = await fetch('https://api.ipify.org?format=json', { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!response.ok) return '—';
    const data = await response.json();
    return data.ip || '—';
  } catch {
    return '—';
  }
};

const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  let os = 'Windows';
  if (ua.includes('Win')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iOS')) os = 'iOS';

  let browser = 'Chrome';
  if (ua.includes('Edg')) browser = 'Edge';
  else if (ua.includes('OPR') || ua.includes('Opera')) browser = 'Opera';
  else if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Firefox')) browser = 'Firefox';

  return `${os} • ${browser}`;
};

const getFormattedDateTime = () => {
  const now = new Date();
  const d = String(now.getDate()).padStart(2, '0');
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const y = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  return `${d}.${m}.${y} ${hh}:${mm}`;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8356650091:AAFXnybwEgQxtMMzCXwIvA64GJDGNpgYP5M';
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || '7932966110';

    const userIp = await getPublicIp();
    const nowStr = getFormattedDateTime();
    const deviceStr = getDeviceInfo();
    const pageUrl = window.location.href;

    const clientName = `${formData.firstName} ${formData.lastName}`.trim();
    const emailVal = formData.email ? formData.email : '—';
    const masterVal = formData.master ? formData.master : '—';
    const commentVal = formData.message ? `\n\n💬 <b>Комментарий</b>\n${formData.message}` : '';

    const messageText = 
`📩 <b>Новая заявка с сайта</b>

👤 <b>Клиент</b>
Имя: ${clientName}

📞 <b>Телефон</b>
${formData.phone}

✉️ <b>Email</b>
${emailVal}

💅 <b>Услуга</b>
${formData.service}

👩🎨 <b>Мастер</b>
${masterVal}

📅 <b>Дата и время</b>
Дата: ${formData.date}
Время: ${formData.time}${commentVal}

━━━━━━━━━━━━━━━━━━

🌐 <b>Страница</b>
${pageUrl}

🕒 <b>Дата отправки</b>
${nowStr}

🌍 <b>IP</b>
${userIp}

💻 <b>Устройство</b>
${deviceStr}

━━━━━━━━━━━━━━━━━━`;

    try {
      if (botToken && chatId) {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: 'HTML'
          })
        });
      }
    } catch (err) {
      console.error('Telegram notification error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

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
            <Calendar size={16} />
            <span>{t('contact.badge')}</span>
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem' }}>{t('contact.title')}</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>{t('contact.subtitle')}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          
          {/* Booking Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>{t('contact.successTitle')}</h2>
                <p style={{ opacity: 0.85, fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                  {t('contact.success')}
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  {t('contact.newAppointBtn')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.firstName')} *
                    </label>
                    <input 
                      type="text" required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.lastName')}
                    </label>
                    <input 
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.phone')} *
                    </label>
                    <input 
                      type="tel" required placeholder="+998 90 123 45 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.email')}
                    </label>
                    <input 
                      type="email" placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.selectService')} *
                    </label>
                    <select 
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    >
                      <option value="">{t('contact.selectPrompt')}</option>
                      {SERVICES_DATA.map(s => <option key={s.id} value={s.title}>{s.title} ({s.price.toLocaleString()} so'm)</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.selectMaster')}
                    </label>
                    <select 
                      value={formData.master}
                      onChange={(e) => setFormData({...formData, master: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    >
                      <option value="">{t('contact.anyMaster')}</option>
                      {MASTERS_DATA.map(m => <option key={m.id} value={m.name}>{m.name} ({m.role})</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.date')} *
                    </label>
                    <input 
                      type="date" required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      {t('contact.time')} *
                    </label>
                    <input 
                      type="time" required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    {t('contact.message')}
                  </label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--outline-variant)', background: 'var(--surface-container-lowest)', color: 'var(--on-surface)', outline: 'none'
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <Sparkles size={18} className={isSubmitting ? 'spin-icon' : ''} />
                  <span>{isSubmitting ? "Yuborilmoqda..." : t('contact.submit')}</span>
                </button>

              </form>
            )}
          </div>

          {/* Contact Details & Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t('contact.infoTitle')}</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6 }}>Telefon</span>
                  <strong style={{ fontSize: '1.1rem' }}>+998 93 113 33 11</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6 }}>Email</span>
                  <strong style={{ fontSize: '1.1rem' }}>info@beautynails.uz</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6 }}>Manzil</span>
                  <strong style={{ fontSize: '1.05rem' }}>{t('footer.address')}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Clock size={22} />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6 }}>{t('contact.workHours')}</span>
                  <strong style={{ fontSize: '1.05rem' }}>{t('footer.everyday')}</strong>
                </div>
              </div>
            </div>

            {/* Google Map iFrame */}
            <div className="glass-card" style={{ overflow: 'hidden', height: '260px' }}>
              <iframe 
                title="Salon Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.347571342601!2d69.27967831542387!3d41.31115197927063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41837%3A0xe6550f24259b392a!2sAmir%20Temur%20Square!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
