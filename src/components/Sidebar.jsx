// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-brand">
        &lt;EquipoDev/&gt;
      </div>

      <nav className="sidebar-nav">
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

      <div className="sidebar-footer">
        TP2 - Frontend Grupal
      </div>
    </div>
  );
};

export default Sidebar;