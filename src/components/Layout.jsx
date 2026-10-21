import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0e1a' }}>
      {/* Sidebar fija sin deformarse */}
      <div style={{ flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* Área principal donde se renderiza cada vista */}
      <main style={{ flexGrow: 1, minWidth: 0, overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;