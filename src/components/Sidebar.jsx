import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <>
      <style>{`
        @keyframes borderGlow {
          0% { border-color: #22d3ee; box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
          50% { border-color: #38bdf8; box-shadow: 0 0 18px rgba(56, 189, 248, 0.8); }
          100% { border-color: #22d3ee; box-shadow: 0 0 10px rgba(34, 211, 238, 0.5); }
        }

        .neon-button {
          position: relative;
          color: #94a3b8;
          text-decoration: none;
          font-weight: 500;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          background: transparent; /* Sin fondo molesto */
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .neon-button:hover {
          color: #22d3ee;
          background: rgba(34, 211, 238, 0.05); /* Un destello mínimo al pasar el mouse */
          border-color: rgba(34, 211, 238, 0.3);
        }

        .neon-button.active {
          color: #ffffff !important;
          font-weight: 600;
          background: transparent !important; /* Cero fondo sólido */
          animation: borderGlow 2.5s infinite ease-in-out;
        }
      `}</style>

      <aside style={{ 
        width: '250px', 
        minHeight: '100vh', 
        background: '#090d16', 
        padding: '1.5rem 1rem', 
        display: 'flex', 
        flexDirection: 'column',
        borderRight: '1px solid rgba(34, 211, 238, 0.15)'
      }}>
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