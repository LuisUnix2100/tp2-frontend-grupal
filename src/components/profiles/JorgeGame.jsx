// src/components/profiles/JorgeGame.jsx
import { useState } from 'react';

export default function JorgeGame() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [log, setLog] = useState("Python Pygame Engine iniciado. Esperando loop...");

  const handleAction = () => {
    const newScore = score + 10;
    setScore(newScore);
    if (newScore % 30 === 0) {
      const nextLevel = level + 1;
      setLevel(nextLevel);
      setLog(`[LVL UP] Nivel ${nextLevel} alcanzado. Frame rate: 60 FPS.`);
    } else {
      setLog(`[ACTION] Evento capturado en el Game Loop. Puntos: ${newScore}`);
    }
  };

  const handleReset = () => {
    setScore(0);
    setLevel(1);
    setLog("Loop reiniciado.");
  };

  return (
    <div style={{
      background: '#0b130f',
      border: '1px solid #34d399',
      borderRadius: '12px',
      padding: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'monospace'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(52, 211, 153, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <span style={{ color: '#34d399' }}>jorge@pygame-runtime:~$</span>
        <span style={{ color: '#6ee7b7' }}>GAME LOOP: ACTIVE</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', background: '#050a07', padding: '0.8rem', borderRadius: '6px', marginBottom: '1rem' }}>
        <span style={{ color: '#34d399' }}>Score: <strong>{score}</strong></span>
        <span style={{ color: '#34d399' }}>Nivel: <strong>{level}</strong></span>
        <span style={{ color: '#6ee7b7' }}>FPS: <strong>60</strong></span>
      </div>

      <p style={{ color: '#a7f3d0', fontSize: '0.85rem', margin: '0 0 1rem 0' }}>{log}</p>

      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={handleAction}
          style={{
            background: '#34d399',
            color: '#0b130f',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          INTERACTUAR (+10 PTS)
        </button>
        <button
          type="button"
          onClick={handleReset}
          style={{
            background: 'transparent',
            color: '#34d399',
            border: '1px solid #34d399',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          REINICIAR
        </button>
      </div>
    </div>
  );
}