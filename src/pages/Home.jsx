import React from 'react';
import { Link } from 'react-router-dom';

// Importamos las imágenes reales desde tus assets
import dalilaImg from '../assets/avatares/dalila.jpg';
import jorgeImg from '../assets/avatares/jorge.jpg';
import luisImg from '../assets/avatares/luis.jpg';
import martinImg from '../assets/avatares/martin.jpg';
import martinaImg from '../assets/avatares/martina.jpg';

export default function Home() {
  const integrantes = [
    { id: 1, nombre: 'Dalila', img: dalilaImg },
    { id: 2, nombre: 'Jorge', img: jorgeImg },
    { id: 3, nombre: 'Luis', img: luisImg },
    { id: 4, nombre: 'Martín', img: martinImg },
    { id: 5, nombre: 'Martina', img: martinaImg },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '82vh',
      textAlign: 'center',
      color: '#ffffff',
      padding: '2rem'
    }}>
      <span style={{ 
        color: '#22d3ee', 
        fontSize: '0.9rem', 
        letterSpacing: '2px', 
        fontWeight: 'bold',
        marginBottom: '0.8rem' 
      }}>
        TP2 · DESARROLLO FRONTEND
      </span>

      <h1 style={{ 
        fontSize: '3.2rem', 
        fontWeight: '800', 
        margin: '0 0 0.8rem 0',
        lineHeight: '1.2'
      }}>
        Bienvenidos a <span style={{ color: '#22d3ee', textShadow: '0 0 15px rgba(34, 211, 238, 0.6)' }}>{"<EquipoDev/>"}</span>
      </h1>

      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Construimos este sitio como equipo.
      </p>

      {/* Avatares grandes y bien destacados en fila */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '1.2rem', 
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {integrantes.map((persona) => (
          <div 
            key={persona.id} 
            style={{
              width: '76px',
              height: '76px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #22d3ee',
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)',
              transition: 'transform 0.3s ease',
            }}
          >
            <img 
              src={persona.img} 
              alt={persona.nombre} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        ))}
      </div>

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