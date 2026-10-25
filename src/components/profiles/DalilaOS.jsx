
import { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  tecnologias: [
    '> Cargando tecnologías...',
    'HTML / CSS / Diseño web',
    'Java / C# / Kotlin',
    'Git / GitHub / Bases de datos',
    'Explorando nuevas herramientas...',
    'STATUS: LEARNING MODE ACTIVE'
  ],

  tortugas: [
    '> Abriendo módulo de curiosidades...',
    'Interés detectado: TORTUGAS 🐢',
    'Pequeñas, tranquilas y sorprendentes.',
    'STATUS: CURIOSITY ACTIVE'
  ],

  astronomia: [
    '> Explorando el universo...',
    'Planetas, estrellas y galaxias.',
    'Siempre hay algo nuevo por descubrir.',
    'STATUS: EXPLORATION ACTIVE'
  ],

  egipto: [
    '> Accediendo a civilizaciones antiguas...',
    'Antiguo Egipto detectado.',
    'Historia, misterios y jeroglíficos.',
    'STATUS: HISTORY MODULE ACTIVE'
  ],

  creatividad: [
    '> Iniciando módulo creativo...',
    'Dibujo / Amigurumis / Diseño',
    'Ideas que se convierten en proyectos.',
    'STATUS: CREATIVE MODE ACTIVE'
  ],

  carmelucha: [
    '> Buscando asistente...',
    'CARMELUCHA DETECTADA 🐶',
    'Guau. Todo tranquilo por acá,',
    'cuidando el proyecto.',
    'STATUS: GOOD COMPANION FOUND'
  ]
};

const BOOT_LINES = [
  'DALILA OS v1.0',
  'Inicializando sistema...',
  'Cargando perfil de Gabriela Dalila Contrera... OK',
  'Verificando tecnologías y creatividad... OK',
  'SYSTEM READY.',
  '¡Bienvenida! Seleccioná una opción.'
];

export default function DalilaOS({ onToggleTheme }) {
  const [lines, setLines] = useState([
    'DALILA OS v1.0',
    'Sistema listo.',
    'Seleccioná un comando_'
  ]);

  const [booting, setBooting] = useState(false);
  const bootIntervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(bootIntervalRef.current);
  }, []);

  const handleCommand = (command) => {
    if (booting) return;

    if (command === 'boot') {
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

    if (command === 'eclipse') {
      onToggleTheme?.();

      setLines([
        '> CAMBIANDO MODO VISUAL...',
        'Paleta del perfil actualizada.',
        'STATUS: THEME SWITCHED'
      ]);

      return;
    }

    if (COMMANDS[command]) {
      setLines(COMMANDS[command]);
    }
  };

  const buttons = [
    { key: 'boot', label: 'BOOT' },
    { key: 'tecnologias', label: 'TECNOLOGÍAS' },
    { key: 'tortugas', label: 'TORTUGAS' },
    { key: 'astronomia', label: 'ASTRONOMÍA' },
    { key: 'egipto', label: 'EGIPTO' },
    { key: 'creatividad', label: 'CREATIVIDAD' },
    { key: 'carmelucha', label: 'CARMELUCHA' },
    { key: 'eclipse', label: 'MODO ECLIPSE' }
  ];

  return (
    <div className="martin-console" style={{ marginTop: '2rem' }}>
      <div className="martin-console__header">
        <span>●</span>
        <p>dalila@equipo:~$</p>
        <span className="martin-console__status">
          {booting ? 'BOOTING...' : 'ONLINE'}
        </span>
      </div>

      <div
        className="martin-console__screen"
        aria-live="polite"
        aria-atomic="true"
      >
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <div className="martin-console__commands">
        {buttons.map((button) => (
          <button
            key={button.key}
            type="button"
            className="martin-command"
            onClick={() => handleCommand(button.key)}
            disabled={booting}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
