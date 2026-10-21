import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      color: '#ffffff',
      padding: '2rem'
    }}>
      <span style={{ 
        color: '#22d3ee', 
        fontSize: '0.9rem', 
        letterSpacing: '2px', 
        fontWeight: 'bold',
        marginBottom: '1rem' 
      }}>
        TP2 · DESARROLLO FRONTEND
      </span>

      <h1 style={{ 
        fontSize: '3.5rem', 
        fontWeight: '800', 
        margin: '0 0 1rem 0',
        lineHeight: '1.2'
      }}>
        Bienvenidos a <span style={{ color: '#22d3ee', textShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }}>&lt;EquipoDev/&gt;</span>
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '3rem' }}>
        Construimos este sitio como equipo.
      </p>

      <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '2rem', fontWeight: '500' }}>
        Cinco perfiles. Cinco estilos. Un solo equipo.
      </p>

      <Link to="/integrantes" style={{
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        color: '#ffffff',
        padding: '0.8rem 2.2rem',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.1rem',
        boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}>
        Ingresar →
      </Link>
    </div>
  );
}