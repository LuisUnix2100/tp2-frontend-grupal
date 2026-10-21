import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #f97316; box-shadow: 0 0 10px rgba(249, 115, 22, 0.6); }
          50% { border-color: #fb923c; box-shadow: 0 0 18px rgba(251, 146, 60, 0.9); }
          100% { border-color: #f97316; box-shadow: 0 0 10px rgba(249, 115, 22, 0.6); }
        }

        /* Botón inactivo con un tono cobre suave */
        .sidebar-container .neon-button {
          position: relative;
          color: #d1d5db !important;
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          background: rgba(180, 83, 9, 0.15) !important; /* Tono cobre suave */
          border: 1px solid rgba(217, 119, 6, 0.25) !important;
          transition: all 0.3s ease;
        }

        /* Hover estilo cobre encendido */
        .sidebar-container .neon-button:hover {
          color: #ffedd5 !important;
          background: rgba(180, 83, 9, 0.3) !important;
          border-color: rgba(245, 158, 11, 0.5) !important;
        }

        /* Botón ACTIVO: Relleno cobre vivo con resplandor cálido */
        .sidebar-container .neon-button.active {
          color: #ffffff !important;
          font-weight: 600;
          background: linear-gradient(135deg, rgba(180, 83, 9, 0.5) 0%, rgba(217, 119, 6, 0.35) 100%) !important;
          animation: borderGlow 2.5s infinite ease-in-out;
          text-shadow: 0 0 8px rgba(251, 146, 60, 0.8);
        }
      `}</style>

      <aside className="sidebar-container" style={{ 
        width: '250px', 
        minHeight: '100vh', 
        background: '#090d16', 
        padding: '1.5rem 1rem', 
        display: 'flex', 
        flexDirection: 'column',
        borderRight: '1px solid rgba(217, 119, 6, 0.25)'
      }}>
        {/* Logo con detalle en celeste neón original */}
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
        
        {/* Navegación con el estilo Cobre */}
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

        {/* Footer */}
        <div style={{ 
          marginTop: 'auto', 
          paddingTop: '1rem', 
          fontSize: '0.78rem', 
          color: '#78350f', 
          borderTop: '1px solid rgba(217, 119, 6, 0.15)',
          textAlign: 'center'
        }}>
          TP2 - Frontend Grupal
        </div>
      </aside>
    </>
  );
};

export default Sidebar;