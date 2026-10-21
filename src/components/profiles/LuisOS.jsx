// src/components/profiles/LuisOS.jsx
import { useState } from 'react';

const COMMANDS = {
  stack: [
    "> Cargando stack de tecnologías...",
    "HTML5 / CSS3 / JavaScript (ES6+)",
    "C# / .NET / Programación Orientada a Objetos",
    "Bases de Datos: MySQL & MongoDB",
    "Kotlin / Android Studio",
    "Unix / Linux & Git / GitHub",
    "STATUS: PROFILE STACK LOADED"
  ],
  sistemas: [
    "> Accediendo a módulos de sistemas e infraestructura...",
    "Unix/Linux: Bash scripts, gestión de procesos y entornos.",
    "Bases de Datos: Diseño, modelado y consultas relacionales.",
    "C#: Desarrollo de software, POO y arquitectura.",
    "STATUS: INFRASTRUCTURE READY"
  ],
  mobile: [
    "> Consultando tecnologías mobile...",
    "Kotlin: Desarrollo de interfaces y apps móviles en Android Studio.",
    "Figma: Prototipado e interacción UI/UX.",
    "STATUS: MOBILE CORE ACTIVE"
  ],
  equipo: [
    "> Información de Equipo 8...",
    "Rol: Desarrollo Web & Sistemas",
    "Colaboración: Integración React + Vite, Git / GitHub",
    "STATUS: SYNC WITH TEAM 100%"
  ]
};

export const LuisOS = () => {
  const [output, setOutput] = useState([
    "Initializing system...",
    "Loading React...... OK",
    "Checking Francisco Luis Bronzi profile... OK",
    "SYSTEM CONSOLE READY.",
    "Bienvenido. Selecciona un comando para inspeccionar mis habilidades."
  ]);
  const [activeTab, setActiveTab] = useState('BOOT');

  const handleCommand = (cmdKey, label) => {
    setActiveTab(label);
    if (COMMANDS[cmdKey]) {
      setOutput(COMMANDS[cmdKey]);
    } else {
      setOutput([
        "Initializing system...",
        "Loading React...... OK",
        "Checking Francisco Luis Bronzi profile... OK",
        "SYSTEM CONSOLE READY.",
        "Bienvenido. Selecciona un comando para inspeccionar mis habilidades."
      ]);
    }
  };

  return (
    <div style={{
      background: '#070a12',
      border: '1px solid #22d3ee',
      borderRadius: '12px',
      padding: '1.5rem',
      fontFamily: 'monospace',
      color: '#22d3ee',
      boxShadow: '0 0 20px rgba(34, 211, 238, 0.15)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {/* Encabezado Consola */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(34, 211, 238, 0.3)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <span>● luis@equipo:~$</span>
        <span style={{ color: '#a855f7' }}>ONLINE</span>
      </div>

      {/* Salida de la Pantalla */}
      <div style={{ minHeight: '180px', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        {output.map((line, index) => (
          <p key={index} style={{ margin: '0.3rem 0', color: line.startsWith('>') ? '#a855f7' : '#e2e8f0' }}>
            {line}
          </p>
        ))}
      </div>

      {/* Botones de Comandos */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => handleCommand('boot', 'BOOT')}
          style={buttonStyle(activeTab === 'BOOT')}
        >
          BOOT
        </button>
        <button 
          onClick={() => handleCommand('stack', 'STACK')}
          style={buttonStyle(activeTab === 'STACK')}
        >
          STACK
        </button>
        <button 
          onClick={() => handleCommand('sistemas', 'SISTEMAS')}
          style={buttonStyle(activeTab === 'SISTEMAS')}
        >
          SISTEMAS
        </button>
        <button 
          onClick={() => handleCommand('mobile', 'MOBILE')}
          style={buttonStyle(activeTab === 'MOBILE')}
        >
          MOBILE
        </button>
        <button 
          onClick={() => handleCommand('equipo', 'EQUIPO')}
          style={buttonStyle(activeTab === 'EQUIPO')}
        >
          EQUIPO 8
        </button>
      </div>
    </div>
  );
};

// Estilo de los botones interactivos
const buttonStyle = (isActive) => ({
  background: isActive ? '#22d3ee' : 'transparent',
  color: isActive ? '#070a12' : '#22d3ee',
  border: '1px solid #22d3ee',
  padding: '0.4rem 0.8rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '0.8rem',
  transition: 'all 0.2s ease'
});

export default LuisOS;