import React from 'react';

export default function Bitacora() {
  return (
    <div style={{ padding: '2rem', color: '#fff', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '0.5rem', color: '#61dafb' }}>📝 Bitácora del Proyecto Grupal</h2>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>
        Registro histórico de evolución, toma de decisiones, arquitectura y migración tecnológica (IFTS N.º 29 - Ciclo 2026).
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Etapa TP2 */}
        <div style={{ background: '#121212', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <span style={{ fontSize: '0.85rem', color: '#61dafb', fontWeight: 'bold', textTransform: 'uppercase' }}>Etapa Actual — TP2</span>
          <h3 style={{ margin: '0.5rem 0', color: '#fff' }}>Migración a React, SPA y Modularización de Componentes</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Transición completa de la arquitectura estática anterior hacia una aplicación de página única (SPA) desarrollada con 
            <strong> Vite, React y React Router</strong>. Se organizó la interfaz bajo un layout con Sidebar fija e interactiva, 
            se incorporó un archivo JSON local con 20 registros temáticos equipados con buscador en tiempo real y filtrado por categoría, 
            se integró el consumo de una API pública con manejo asincrónico de estados (carga, éxito y error), y se estructuró 
            la documentación técnica oficial del equipo.
          </p>
        </div>

        {/* Etapa TP1 */}
        <div style={{ background: '#121212', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <span style={{ fontSize: '0.85rem', color: '#d19a66', fontWeight: 'bold', textTransform: 'uppercase' }}>Etapa Inicial — TP1</span>
          <h3 style={{ margin: '0.5rem 0', color: '#fff' }}>Fundamentos Frontend, HTML Semántico y JS Vanilla</h3>
          <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}>
            Diseño e implementación de la identidad visual colaborativa del equipo (<code style={{ color: '#98c379' }}>&lt;EquipoDev/&gt;</code>). 
            Se construyó una estructura mobile-first con HTML5 semántico, CSS3 moderno con variables dinámicas, y maquetación responsiva 
            con breakpoints definidos (400px, 900px y 1200px). Cada integrante desarrolló un perfil interactivo personalizado en JavaScript Vanilla 
            (Terminal 2.0, consolas arcade, reproductores y efectos visuales avanzados), culminando con el despliegue estático en Vercel.
          </p>
        </div>

      </div>
    </div>
  );
}