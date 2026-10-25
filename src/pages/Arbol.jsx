import React from 'react';

export default function Arbol() {
  return (
    <div style={{ padding: '2rem', color: '#fff', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.5rem', color: '#61dafb' }}>🌳 Árbol de Componentes</h2>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>
      </p>
      
      <div style={{ 
        background: '#121212', 
        padding: '1.5rem', 
        borderRadius: '8px', 
        border: '1px solid #333', 
        fontFamily: 'monospace', 
        lineHeight: '1.8',
        fontSize: '0.95rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
      }}>
        <div style={{ color: '#e06c75', fontWeight: 'bold' }}>App</div>
        <div style={{ paddingLeft: '20px', color: '#abb2bf' }}>├── BrowserRouter</div>
        <div style={{ paddingLeft: '20px', color: '#abb2bf' }}>├── ScrollToTop</div>
        <div style={{ paddingLeft: '20px', color: '#abb2bf' }}>└── Routes</div>
        <div style={{ paddingLeft: '40px', color: '#e5c07b' }}>└── Layout</div>
        <div style={{ paddingLeft: '60px', color: '#98c379' }}>├── Sidebar <span style={{ color: '#5c6370' }}>(Navegación fija e indicador activo)</span></div>
        <div style={{ paddingLeft: '60px', color: '#98c379' }}>└── Main / Outlet <span style={{ color: '#5c6370' }}>(Contenido dinámico por ruta)</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>├── Home <span style={{ color: '#5c6370' }}>( / )</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>├── Integrantes <span style={{ color: '#5c6370' }}>( /integrantes )</span></div>
        <div style={{ paddingLeft: '100px', color: '#d19a66' }}>└── MemberCard <span style={{ color: '#5c6370' }}>(Tarjetas de los 5 integrantes)</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>├── Perfil Individual <span style={{ color: '#5c6370' }}>( /integrantes/:id )</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>├── Recursos y Tecnologías <span style={{ color: '#5c6370' }}>( /recursos )</span></div>
        <div style={{ paddingLeft: '100px', color: '#d19a66' }}>├── SearchBar <span style={{ color: '#5c6370' }}>(Búsqueda por texto)</span></div>
        <div style={{ paddingLeft: '100px', color: '#d19a66' }}>└── ResourceCard <span style={{ color: '#5c6370' }}>(20 registros + filtro por categoría)</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>├── Api Pública <span style={{ color: '#5c6370' }}>( /api - Manejo de estados: Cargando, Éxito, Error )</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>├── Arbol de Componentes <span style={{ color: '#5c6370' }}>( /arbol )</span></div>
        <div style={{ paddingLeft: '80px', color: '#61dafb' }}>└── Bitácora <span style={{ color: '#5c6370' }}>( /bitacora )</span></div>
      </div>
    </div>
  );
}