// src/components/profiles/MartinaUI.jsx
import { useState } from 'react';

const PALETTES = [
  { name: "Cyberpunk Glow", primary: "#ec4899", bg: "#1f1024", text: "#fbcfe8" },
  { name: "Nordic Minimal", primary: "#38bdf8", bg: "#0c1929", text: "#e0f2fe" },
  { name: "Emerald Focus", primary: "#10b981", bg: "#06241a", text: "#d1fae5" },
  { name: "Amber Sunset", primary: "#f59e0b", bg: "#261a06", text: "#fef3c7" }
];

export default function MartinaUI() {
  const [activePalette, setActivePalette] = useState(PALETTES[0]);
  const [componentState, setComponentState] = useState("Default");

  return (
    <div style={{
      background: activePalette.bg,
      border: `1px solid ${activePalette.primary}`,
      borderRadius: '12px',
      padding: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
        <span style={{ color: activePalette.primary, fontWeight: 'bold', fontSize: '0.9rem' }}>
          UI/UX COMPONENT LAB · FIGMA TO REACT
        </span>
        <span style={{ color: activePalette.text, fontSize: '0.8rem' }}>{activePalette.name}</span>
      </div>

      <div style={{
        background: 'rgba(255, 255, 255, 0.04)',
        padding: '1.5rem',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        <p style={{ color: activePalette.text, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          Estado del componente: <strong>{componentState}</strong>
        </p>
        <button
          type="button"
          onClick={() => setComponentState(componentState === "Default" ? "Interacting (Active)" : "Default")}
          style={{
            background: activePalette.primary,
            color: '#0a0e1a',
            border: 'none',
            padding: '0.6rem 1.4rem',
            borderRadius: '8px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: `0 0 14px ${activePalette.primary}88`,
            transition: 'transform 0.15s ease'
          }}
        >
          Botón Primario Dinámico
        </button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {PALETTES.map((pal) => (
          <button
            key={pal.name}
            type="button"
            onClick={() => setActivePalette(pal)}
            style={{
              background: activePalette.name === pal.name ? pal.primary : 'transparent',
              color: activePalette.name === pal.name ? '#0a0e1a' : '#fff',
              border: `1px solid ${pal.primary}`,
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 600
            }}
          >
            {pal.name}
          </button>
        ))}
      </div>
    </div>
  );
}