import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      {/* Animación CSS para el borde de luz dinámico y vivo */}
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #22d3ee; box-shadow: 0 0 8px rgba(34, 211, 238, 0.6), inset 0 0 6px rgba(34, 211, 238, 0.2); }
          50% { border-color: #38bdf8; box-shadow: 0 0 16px rgba(56, 189, 248, 0.9), inset 0 0 10px rgba(56, 189, 248, 0.3); }
          100% { border-color: #22d3ee; box-shadow: 0 0 8px rgba(34, 211, 238, 0.6), inset 0 0 6px rgba(34, 211, 238, 0.2); }
        }

        .neon-button {
          position: relative;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.4); /* Fondo más claro/traslúcido */
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .neon-button:hover {
          color: #38bdf8;
          background: rgba(30, 41, 59, 0.6);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
        }

        .neon-button.active {
          color: #ffffff !important;
          font-weight: 600;
          background: rgba(14, 165, 233, 0.15) !important; /* Fondo suave menos negro */
          animation: borderGlow 2.5s infinite ease-in-out; /* Luz viva pulsante en el borde */
        }
      `}</style>

      <aside style={{ 
        width: '250px', 
        minHeight: '100vh', 
        background: '#090d16', /* Fondo sutil para la barra */
        padding: '1.5rem 1rem', 
        display: 'flex', 
        flexDirection: 'column',
        borderRight: '1px solid rgba(34, 211, 238, 0.15)'
      }}>
        {/* Título de la app con resplandor neón */}
        <div style={{ 
          fontWeight: 'bold', 
          color: '#22d3ee', 
          fontSize: '1.3rem', 
          marginBottom: '2.5rem',
          paddingLeft: '0.5rem',
          textShadow: '0 0 12px rgba(34, 211, 238, 0.8)'
        }}>
          &lt;EquipoDev/&gt;
        </div>
        
        {/* Navegación con los botones vivos */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <NavLink to="/integrantes" className="neon-button">
            Integrantes
          </NavLink>
          
          <NavLink to="/recursos" className="neon-button">
            Recursos
          </NavLink>
          
          <NavLink to="/api" className="neon-button">
            API
          </NavLink>
        </nav>

        {/* Footer de la Sidebar */}
        <div style={{ 
          marginTop: 'auto', 
          paddingTop: '1rem', 
          fontSize: '0.78rem', 
          color: '#475569', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center'
        }}>
          TP2 - Frontend Grupal
        </div>
      </aside>
    </>
  );
};

export default Sidebar;