import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #22d3ee; box-shadow: 0 0 10px rgba(34, 211, 238, 0.6); }
          50% { border-color: #38bdf8; box-shadow: 0 0 18px rgba(56, 189, 248, 0.9); }
          100% { border-color: #22d3ee; box-shadow: 0 0 10px rgba(34, 211, 238, 0.6); }
        }

        /* Fuerza a los botones a NO tener caja negra de fondo */
        .sidebar-container .neon-button {
          position: relative;
          color: #94a3b8 !important;
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          background: transparent !important; /* CERO fondo negro */
          background-color: transparent !important;
          border: 1px solid transparent !important;
          transition: all 0.3s ease;
        }

        /* Hover sutil */
        .sidebar-container .neon-button:hover {
          color: #22d3ee !important;
          border-color: rgba(34, 211, 238, 0.3) !important;
        }

        /* Estado ACTIVO: solo marco de luz neón, fondo totalmente transparente */
        .sidebar-container .neon-button.active {
          color: #ffffff !important;
          font-weight: 600;
          background: transparent !important;
          background-color: transparent !important;
          animation: borderGlow 2.5s infinite ease-in-out;
          text-shadow: 0 0 8px rgba(34, 211, 238, 0.7);
        }
      `}</style>

      <aside className="sidebar-container" style={{ 
        width: '250px', 
        minHeight: '100vh', 
        background: '#090d16', 
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
        
        {/* Navegación con los botones sin caja negra */}
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