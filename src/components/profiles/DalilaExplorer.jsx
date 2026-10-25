// src/components/profiles/DalilaExplorer.jsx
import { useState } from 'react';

const CURIOSITIES = {
  tortugas: {
    icon: "🐢",
    title: "Tortugas",
    text: "Las tortugas son uno de los animales que más me gustan. Son animales tranquilos, resistentes y pacientes, y algunas especies pueden recorrer enormes distancias guiándose por el campo magnético de la Tierra. ¡Una brújula incorporada!"
  },
  astronomia: {
    icon: "🔭",
    title: "Astronomía",
    text: "El universo y sus misterios son fascinantes. La observación del cosmos y la astrofísica nos recuerdan lo inmenso que es el espacio y lo mucho que queda por explorar y comprender."
  },
  egipto: {
    icon: "🏺",
    title: "Civilizaciones Antiguas",
    text: "El Antiguo Egipto es una de mis culturas favoritas. Su arquitectura monumental, sus avances matemáticos y su mitología reflejan un ingenio humano asombroso para su época."
  },
  creatividad: {
    icon: "🧶",
    title: "Creatividad & Amigurumis",
    text: "Diseñar amigurumis y dibujar estimula la concentración y el pensamiento espacial. Tejer estructuras punto por punto es muy similar a escribir código modular y ordenado."
  },
  carmelucha: {
    icon: "🐾",
    title: "Carmelucha",
    text: "Carmelucha es mi perra y asistente oficial de desarrollo. Siempre atenta, acompañando cada sesión de código y asegurando que todo funcione con tranquilidad."
  }
};

export default function DalilaExplorer() {
  const [activeKey, setActiveKey] = useState('tortugas');
  const current = CURIOSITIES[activeKey];

  const handleRandom = () => {
    const keys = Object.keys(CURIOSITIES);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setActiveKey(randomKey);
  };

  return (
    <div className="dalila-terminal">
      <div className="dalila-terminal__header">
        <div className="dalila-terminal__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="dalila-terminal__filename">dalila_explorer.sh</span>
        <span className="dalila-terminal__status">ONLINE</span>
      </div>

      <div className="dalila-terminal__boot">
        <p>&gt; initializing dalila.exe...</p>
        <p>&gt; loading curiosity.module... OK</p>
        <p>&gt; loading creativity.module... OK</p>
        <p>&gt; accessibility.check... OK</p>
        <p>&gt; system ready.</p>
        <p>&gt; seleccioná una curiosidad para continuar_</p>
      </div>

      <div className="dalila-explorer">
        <div className="dalila-explorer__menu" role="group" aria-label="Curiosidades de Dalila">
          <button
            type="button"
            className={`dalila-interest-button ${activeKey === 'tortugas' ? 'active' : ''}`}
            onClick={() => setActiveKey('tortugas')}
          >
            🐢 Tortugas
          </button>
          <button
            type="button"
            className={`dalila-interest-button ${activeKey === 'astronomia' ? 'active' : ''}`}
            onClick={() => setActiveKey('astronomia')}
          >
            🔭 Astronomía
          </button>
          <button
            type="button"
            className={`dalila-interest-button ${activeKey === 'egipto' ? 'active' : ''}`}
            onClick={() => setActiveKey('egipto')}
          >
            🏺 Civilizaciones
          </button>
          <button
            type="button"
            className={`dalila-interest-button ${activeKey === 'creatividad' ? 'active' : ''}`}
            onClick={() => setActiveKey('creatividad')}
          >
            🧶 Creatividad
          </button>
          <button
            type="button"
            className="dalila-interest-button"
            onClick={handleRandom}
          >
            ✨ Sorprendeme
          </button>
          <button
            type="button"
            className={`dalila-interest-button ${activeKey === 'carmelucha' ? 'active' : ''}`}
            onClick={() => setActiveKey('carmelucha')}
          >
            🐾 Carmelucha
          </button>
        </div>

        <div className="dalila-explorer__content" id="dalilaExplorer" aria-live="polite">
          <span className="dalila-explorer__icon" id="dalilaExplorerIcon" aria-hidden="true">
            {current.icon}
          </span>
          <div>
            <span className="profile-kicker">CURIOSIDAD</span>
            <h3 id="dalilaExplorerTitle">{current.title}</h3>
            <p id="dalilaExplorerText">{current.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}