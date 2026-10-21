import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="bg-dark text-white p-3 vh-100 d-flex flex-column" style={{ width: '250px' }}>
      <h3 className="fs-5 mb-4 text-primary fw-bold">Equipo 11</h3>
      
      <nav className="nav nav-pills flex-column mb-auto">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-link text-white mb-2 ${isActive ? 'active bg-primary' : ''}`}
        >
          Inicio
        </NavLink>
        
        <NavLink 
          to="/integrantes" 
          className={({ isActive }) => `nav-link text-white mb-2 ${isActive ? 'active bg-primary' : ''}`}
        >
          Integrantes
        </NavLink>
        
        <NavLink 
          to="/recursos" 
          className={({ isActive }) => `nav-link text-white mb-2 ${isActive ? 'active bg-primary' : ''}`}
        >
          Recursos
        </NavLink>
      </nav>
      
      <div className="border-top pt-3 text-muted small">
        TP2 - Frontend Grupal
      </div>
    </aside>
  );
};

export default Sidebar;