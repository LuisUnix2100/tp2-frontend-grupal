// src/components/profiles/MartinOS.jsx
// Port de "MARTIN OS - CONSOLA RETRO INTERACTIVA" (martin.js del TP1)
import { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  stack: [
    '> loading stack...',
    'HTML / CSS / JavaScript',
    'React / Node.js',
    'Python / Django',
    'STATUS: FULLSTACK PATH ACTIVE'
  ],
  games: [
    '> accessing game library...',
    'STARCRAFT detected.',
    'DIABLO detected.',
    'Publisher: Blizzard Entertainment',
    'STATUS: READY TO PLAY'
  ],
  pets: [
    '> scanning pets...',
    'Dogs detected: 3 🐶',
    'Cats detected: 8 🐈',
    'Total companions: 11',
    'STATUS: HOUSE FULL'
  ],
  goal: [
    '> loading mission...',
    'Current job: Logistics',
    'Target career: Software Development',
    'Specialization target: Fullstack',
    'MISSION STATUS: IN PROGRESS 🚀'
  ]
};

// Secuencia de arranque completa del TP1
const BOOT_LINES = [
  'MARTIN OS v1.0',
  'Initializing system...',
  'Loading HTML........ OK',
  'Loading CSS......... OK',
  'Loading JavaScript.. OK',
  'Loading React....... OK',
  'Loading Node........ OK',
  'Loading Python...... OK',
  'Loading Django...... OK',
  'Checking resilience. OK',
  'Loading curiosity... OK',
  'FULLSTACK MODE READY.',
  'Welcome, Player 1.'
];

const INITIAL_LINES = ['MARTIN OS v1.0', 'Sistema listo.', 'Seleccioná un comando_'];

/*
  isGreenMode: indica si el perfil está actualmente en modo verde
  (la clase "green-mode" la maneja Perfil.jsx sobre .martin-theme).
  onToggleTheme: alterna ese modo.
*/
export default function MartinOS({ isGreenMode = false, onToggleTheme }) {
  const [lines, setLines] = useState(INITIAL_LINES);
  const [booting, setBooting] = useState(false);
  const bootIntervalRef = useRef(null);

  // Si el usuario sale del perfil mientras arranca, se detiene el intervalo.
  useEffect(() => {
    return () => clearInterval(bootIntervalRef.current);
  }, []);

  const handleCommand = (cmd) => {
    if (booting) return;

    if (cmd === 'boot') {
      clearInterval(bootIntervalRef.current);
      setBooting(true);
      setLines([]);

      let index = 0;
      bootIntervalRef.current = setInterval(() => {
        const line = BOOT_LINES[index];
        setLines((prev) => [...prev, line]);
        index += 1;

        if (index >= BOOT_LINES.length) {
          clearInterval(bootIntervalRef.current);
          setBooting(false);
        }
      }, 250);
      return;
    }

    if (cmd === 'theme') {
      // Estado al que pasa tras el click (el actual todavía no se actualizó)
      const willBeGreen = !isGreenMode;

      onToggleTheme?.();
      setLines(
        willBeGreen
          ? ['> GREEN MODE ENABLED', 'Retro terminal palette activated.']
          : ['> BLUE MODE ENABLED', 'Default player palette restored.']
      );
      return;
    }

    if (COMMANDS[cmd]) {
      setLines(COMMANDS[cmd]);
    }
  };

  return (
    <div className="martin-console" style={{ marginTop: '2rem' }}>
      <div className="martin-console__header">
        <span>●</span>
        <p>tincho@fullstack:~$</p>
        <span className="martin-console__status">ONLINE</span>
      </div>

      <div
        className="martin-console__screen"
        id="martinConsole"
        aria-live="polite"
        aria-atomic="true"
      >
        {lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      <div className="martin-console__commands">
        <button type="button" className="martin-command" onClick={() => handleCommand('boot')}>BOOT</button>
        <button type="button" className="martin-command" onClick={() => handleCommand('stack')}>STACK</button>
        <button type="button" className="martin-command" onClick={() => handleCommand('games')}>GAMES</button>
        <button type="button" className="martin-command" onClick={() => handleCommand('pets')}>PETS</button>
        <button type="button" className="martin-command" onClick={() => handleCommand('goal')}>MISSION</button>
        <button type="button" className="martin-command" onClick={() => handleCommand('theme')}>SWITCH COLOR</button>
      </div>
    </div>
  );
}
