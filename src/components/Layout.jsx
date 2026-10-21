import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export const Layout = () => {
  return (
    <div className="d-flex">
      {/* Sidebar fija a la izquierda */}
      <Sidebar />
      
      {/* Área principal donde se cargará cada sección/página */}
      <main className="flex-grow-1 p-4 bg-light" style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;