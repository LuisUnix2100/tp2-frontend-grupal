import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside style={{ width: '250px', minHeight: '100vh', background: '#10152b', padding: '1.5rem', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontWeight: 'bold', color: '#22d3ee', fontSize: '1.2rem', marginBottom: '2rem' }}>
        &lt;EquipoDev/&gt;
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <NavLink 
          to="/integrantes" 
          style={({ isActive }) => ({
            color: isActive ? '#22d3ee' : '#fff',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Integrantes
        </NavLink>
        
        <NavLink 
          to="/recursos" 
          style={({ isActive }) => ({
            color: isActive ? '#22d3ee' : '#fff',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          Recursos
        </NavLink>
        
        <NavLink 
          to="/api" 
          style={({ isActive }) => ({
            color: isActive ? '#22d3ee' : '#fff',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          API
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;