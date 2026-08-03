import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ paddingTop: '10rem', paddingBottom: '6rem', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Sahifa Topilmadi</h2>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.</p>
        <Link to="/" className="btn-primary">Bosh sahifaga qaytish</Link>
      </div>
    </div>
  );
};

export default NotFound;
