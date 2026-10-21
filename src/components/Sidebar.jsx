import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside style={{ 
      width: '250px', 
      minHeight: '100vh', 
      background: '#0d1222', 
      padding: '1.5rem', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column',
      borderRight: '1px solid rgba(34, 211, 238, 0.2)' 
    }}>
      {/* Título del equipo con efecto de texto brillante/neón */}
      <div style={{ 
        fontWeight: 'bold', 
        color: '#22d3ee', 
        fontSize: '1.3rem', 
        marginBottom: '2.5rem',
        textShadow: '0 0 10px rgba(34, 211, 238, 0.6)'
      }}>
        &lt;EquipoDev/&gt;
      </div>
      
      {/* Navegación con botones estilo Neón */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <NavLink 
          to="/integrantes" 
          style={({ isActive }) => ({
            color: isActive ? '#22d3ee' : '#94a3b8',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : '500',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
            border: isActive ? '1px solid #22d3ee' : '1px solid transparent',
            boxShadow: isActive ? '0 0 12px rgba(34, 211, 238, 0.4)' : 'none',
            transition: 'all 0.3s ease'
          })}
        >
          Integrantes
        </NavLink>
        
        <NavLink 
          to="/recursos" 
          style={({ isActive }) => ({
            color: isActive ? '#22d3ee' : '#94a3b8',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : '500',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
            border: isActive ? '1px solid #22d3ee' : '1px solid transparent',
            boxShadow: isActive ? '0 0 12px rgba(34, 211, 238, 0.4)' : 'none',
            transition: 'all 0.3s ease'
          })}
        >
          Recursos
        </NavLink>
        
        <NavLink 
          to="/api" 
          style={({ isActive }) => ({
            color: isActive ? '#22d3ee' : '#94a3b8',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : '500',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            background: isActive ? 'rgba(34, 211, 238, 0.1)' : 'transparent',
            border: isActive ? '1px solid #22d3ee' : '1px solid transparent',
            boxShadow: isActive ? '0 0 12px rgba(34, 211, 238, 0.4)' : 'none',
            transition: 'all 0.3s ease'
          })}
        >
          API
        </NavLink>
      </nav>

      {/* Pie de la Sidebar */}
      <div style={{ marginTop: 'auto', paddingTop: '1rem', fontSize: '0.8rem', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        TP2 - Frontend Grupal
      </div>
    </aside>
  );
};

export default Sidebar;