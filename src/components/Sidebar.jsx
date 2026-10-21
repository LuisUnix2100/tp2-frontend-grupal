import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #22d3ee; box-shadow: 0 0 12px rgba(34, 211, 238, 0.8), inset 0 0 8px rgba(34, 211, 238, 0.3); }
          50% { border-color: #38bdf8; box-shadow: 0 0 22px rgba(56, 189, 248, 1), inset 0 0 12px rgba(56, 189, 248, 0.4); }
          100% { border-color: #22d3ee; box-shadow: 0 0 12px rgba(34, 211, 238, 0.8), inset 0 0 8px rgba(34, 211, 238, 0.3); }
        }

        /* Botones con fondo violáceo sutil y elegante */
        .sidebar-container .neon-button {
          position: relative;
          color: #cbd5e1 !important;
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          background: rgba(88, 28, 135, 0.25) !important; /* Fondo violáceo traslúcido */
          border: 1px solid rgba(147, 51, 234, 0.3) !important;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        /* Hover con destello violeta e inicio de luz celeste */
        .sidebar-container .neon-button:hover {
          color: #ffffff !important;
          background: rgba(126, 34, 206, 0.4) !important;
          border-color: rgba(34, 211, 238, 0.6) !important;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.4);
        }

        /* Botón ACTIVO: Fondo violáceo vivo con el borde intenso celeste y animación fluida */
        .sidebar-container .neon-button.active {
          color: #ffffff !important;
          font-weight: 600;
          background: linear-gradient(135deg, rgba(88, 28, 135, 0.6) 0%, rgba(126, 34, 206, 0.4) 100%) !important;
          animation: borderGlow 2.5s infinite ease-in-out;
          text-shadow: 0 0 10px rgba(34, 211, 238, 0.9);
        }
      `}</style>

      <aside className="sidebar-container" style={{ 
        width: '250px', 
        minHeight: '100vh', 
        background: '#090d16', 
        padding: '1.5rem 1rem', 
        display: 'flex', 
        flexDirection: 'column',
        borderRight: '1px solid rgba(147, 51, 234, 0.25)'
      }}>
        {/* Título de la app con resplandor */}
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
        
        {/* Navegación según Consigna TP2 */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <NavLink to="/" className="neon-button">
            <span>🏠</span> Inicio
          </NavLink>

          <NavLink to="/integrantes" className="neon-button">
            <span>👥</span> Integrantes
          </NavLink>
          
          <NavLink to="/recursos" className="neon-button">
            <span>🛠️</span> Recursos
          </NavLink>
          
          <NavLink to="/api" className="neon-button">
            <span>🌐</span> API
          </NavLink>

          <NavLink to="/arbol" className="neon-button">
            <span>🌳</span> Árbol de componentes
          </NavLink>

          <NavLink to="/bitacora" className="neon-button">
            <span>📖</span> Bitácora
          </NavLink>
        </nav>

        {/* Footer */}
        <div style={{ 
          marginTop: 'auto', 
          paddingTop: '1rem', 
          fontSize: '0.78rem', 
          color: '#a855f7', 
          borderTop: '1px solid rgba(147, 51, 234, 0.15)',
          textAlign: 'center'
        }}>
          TP2 - Frontend Grupal
        </div>
      </aside>
    </>
  );
};

export default Sidebar;