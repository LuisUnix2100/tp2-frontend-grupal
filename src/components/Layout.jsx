import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/layout.css';

export const Layout = () => {
  return (
    <div className="app-layout">
      <aside className="sidebar-wrapper">
        <Sidebar />
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;