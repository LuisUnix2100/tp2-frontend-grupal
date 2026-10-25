// src/components/profiles/MartinaTerminal.jsx
// Port a React de "MARTINA TERMINAL 2.0" (martina.js del TP1).
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import odinImg from '../../assets/avatares/odin.jpg';

/* ==========================================
   DATOS
========================================== */

// Botones rápidos (igual que el HTML original)
const QUICK_COMMANDS = ['about', 'skills', 'study', 'random', 'theme', 'help'];

const RANDOM_FACTS = [
  'Mi videojuego favorito es Mortal Kombat 🎮.',
  'Tengo un gato llamado Odin 🐈.',
  'Me gusta investigar y profundizar temas nuevos 📚.',
  'La fotografía es uno de mis hobbies 📸.',
  'Me gusta viajar y conocer lugares nuevos ✈️.',
  'Actualmente estoy profundizando en psicología 🧠.'
];

const ODIN_MESSAGES = [
  '¿Otra vez tocando el CSS? 🐾',
  'Yo no rompí el código. Esta vez.',
  'Compiló. Podés agradecerme después.',
  'Productividad supervisada por Odin.',
  '¿Ya hiciste git push?',
  'Si funciona, no lo toques.',
  'Miau.exe ejecutado correctamente.',
  'Frontend revisado. Podés continuar.',
  'Detecté una humana programando. Vine a supervisar.',
  'No veo errores... sospechoso.',
  'STATUS: Martina programando. Odin observando.',
  'El código está aprobado. Ahora dame comida.'
];

const COMMANDS = {
  help: `
Comandos disponibles:

about        → quién soy
personal     → cosas que me gustan
skills       → habilidades técnicas
work         → experiencia actual
game         → videojuego favorito
study        → qué me gusta aprender
psychology   → interés actual
photography  → activar CAMERA_MODE
travel       → activar TRAVEL_MODE
design       → activar DESIGN_MODE
music        → abrir Music Explorer
status       → estado del sistema
theme        → cambiar colores
random       → dato aleatorio
clear        → limpiar terminal
tip          → descubrir una pista
  `,

  about: `
Soy estudiante de Desarrollo de Software y trabajo
en el área de Sistemas, combinando desarrollo web,
mantenimiento de aplicaciones y soporte técnico.
  `,

  skills: `
HTML
CSS
JavaScript
Git
GitHub
Responsive Design
UI/UX
  `,

  work: `
Actualmente trabajo en Sistemas realizando tareas
de desarrollo web, mantenimiento y asistencia
tecnológica a usuarios.
  `,

  personal: `
Fuera del código disfruto la fotografía,
viajar, estudiar temas nuevos, jugar Mortal Kombat
y pasar tiempo con Odin 🐈.
  `,

  game: `
Mortal Kombat 🎮
  `,

  study: `
Me gusta estudiar, investigar y profundizar
en temas nuevos.
  `,

  psychology: `
Actualmente uno de los temas que estoy
explorando es la psicología 🧠.
  `,

  music: `
Las Pastillas del Abuelo 🎧

Álbumes seleccionados:
Por Colectora
Paradojas
2020
  `,

  photography: `
La fotografía es uno de mis hobbies 📸.

Me gusta su lado visual y creativo,
y la posibilidad de capturar momentos
desde una mirada propia.
  `,

  travel: `
Me gusta viajar y conocer lugares nuevos ✈️.

Disfruto descubrir nuevos ambientes,
experiencias y perspectivas.
  `,

  design: `
El diseño es una de las áreas que más
me interesa combinar con desarrollo web 🎨.

Me gusta trabajar con colores,
composición, interfaces y experiencia de usuario.
  `,

  tip: `
No todas las funciones del sistema
aparecen documentadas...

Tal vez existan módulos ocultos 👀.
  `,

  status: `
FRONTEND    ONLINE
CREATIVITY  ONLINE
LEARNING    ACTIVE
SYSTEM      READY
  `
};

const MUSIC_OUTPUT = `
Opening music.module...

Las Pastillas del Abuelo 🎧

Por Colectora
Paradojas
2020
`;

const ODIN_OUTPUT = `
> searching hidden modules...
> feline module detected.

🐈 ODIN.exe

status: ONLINE
role: frontend supervisor
priority: treats
`;

// Modos visuales (photography / travel / design)
const PROFILE_MODES = {
  photography: {
    label: 'CAMERA_MODE',
    title: 'Fotografía 📸',
    text: 'Capturando creatividad, detalles y nuevas perspectivas.'
  },
  travel: {
    label: 'TRAVEL_MODE',
    title: 'Explorar ✈️',
    text: 'Buscando nuevos lugares, experiencias y formas de ver el mundo.'
  },
  design: {
    label: 'DESIGN_MODE',
    title: 'Diseño 🎨',
    text: 'Cargando la identidad visual del perfil de Martina.'
  }
};

const THEMES = ['CYAN MODE', 'PINK MODE', 'PURPLE MODE'];

const BOOT_MESSAGES = [
  'initializing martina.exe...',
  'loading frontend.module... OK',
  'loading creativity.module... OK',
  'loading curiosity.module... OK',
  'accessibility.check... OK',
  'system ready.'
];

/* ==========================================
   UTILIDADES
========================================== */

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

const hasCommand = (name) => Object.prototype.hasOwnProperty.call(COMMANDS, name);

// Desplaza hasta una sección y la resalta un momento
function goToSection(selector) {
  const section = document.querySelector(selector);
  if (!section) return;

  const reduced = prefersReducedMotion();

  section.scrollIntoView({
    behavior: reduced ? 'auto' : 'smooth',
    block: 'center'
  });

  section.classList.add('terminal-target');
  setTimeout(() => section.classList.remove('terminal-target'), reduced ? 0 : 1200);
}

/* ==========================================
   COMPONENTE
========================================== */

export default function MartinaTerminal() {
  const [history, setHistory] = useState([
    { id: 0, command: '', text: 'Iniciando sistema...', type: 'boot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [commandCount, setCommandCount] = useState(0);
  const [activeCommand, setActiveCommand] = useState('');
  const [odin, setOdin] = useState({
    visible: false,
    message: 'Miau.exe ejecutado correctamente.',
    key: 0
  });
  const [mode, setMode] = useState({
    visible: false,
    key: 0,
    id: '',
    label: '',
    title: '',
    text: ''
  });

  // Elemento donde se dibujan los paneles flotantes (el .profile-page, que define las variables CSS)
  const [portalTarget, setPortalTarget] = useState(null);

  const terminalRef = useRef(null);
  const historyRef = useRef(null);
  const mountedRef = useRef(false);
  const bootStartedRef = useRef(false);
  const nextIdRef = useRef(1);
  const commandLogRef = useRef([]);
  const historyPosRef = useRef(0);
  const themeIndexRef = useRef(0);
  const odinTimerRef = useRef(null);
  const modeTimerRef = useRef(null);

  /* ---------- Historial: entradas y typewriter ---------- */

  const addEntry = (command, type = 'normal') => {
    const id = nextIdRef.current++;
    setHistory((prev) => [...prev, { id, command, text: '', type }]);
    return id;
  };

  const setEntryText = (id, text) => {
    setHistory((prev) => prev.map((e) => (e.id === id ? { ...e, text } : e)));
  };

  const typeText = async (id, text, speed = 16) => {
    const clean = text.trim();

    // Movimiento reducido: se muestra todo de una vez
    if (prefersReducedMotion()) {
      setEntryText(id, clean);
      return;
    }

    for (let i = 1; i <= clean.length; i += 1) {
      if (!mountedRef.current) return;
      setEntryText(id, clean.slice(0, i));
      await sleep(speed);
    }
  };

  /* ---------- Odin y modos visuales ---------- */

  const activateOdin = () => {
    // Oculta el panel de modo si estaba abierto
    clearTimeout(modeTimerRef.current);
    setMode((prev) => ({ ...prev, visible: false }));

    clearTimeout(odinTimerRef.current);
    // "key" nuevo = el panel se vuelve a montar y reinicia su animación
    setOdin((prev) => ({
      visible: true,
      message: pickRandom(ODIN_MESSAGES),
      key: prev.key + 1
    }));

    odinTimerRef.current = setTimeout(
      () => setOdin((prev) => ({ ...prev, visible: false })),
      prefersReducedMotion() ? 3000 : 5000
    );
  };

  const activateProfileMode = (modeId) => {
    const data = PROFILE_MODES[modeId];
    if (!data) return;

    // Odin se duerme
    clearTimeout(odinTimerRef.current);
    setOdin((prev) => ({ ...prev, visible: false }));

    clearTimeout(modeTimerRef.current);
    setMode((prev) => ({ visible: true, key: prev.key + 1, id: modeId, ...data }));

    modeTimerRef.current = setTimeout(
      () => setMode((prev) => ({ ...prev, visible: false })),
      prefersReducedMotion() ? 3000 : 5000
    );
  };

  /* ---------- Tema y easter egg ---------- */

  // En el TP1 las clases iban en <body class="martina-theme">.
  // En React ese elemento es el .martina-theme del perfil, y el CSS exige
  // ".martina-theme.martina-pink" y ".martina-theme.fatality-mode" juntas.
  const getThemeRoot = () =>
    terminalRef.current?.closest('.martina-theme') ?? document.body;

  const changeTheme = () => {
    const root = getThemeRoot();
    root.classList.remove('martina-pink', 'martina-purple');

    themeIndexRef.current = (themeIndexRef.current + 1) % THEMES.length;

    if (themeIndexRef.current === 1) root.classList.add('martina-pink');
    if (themeIndexRef.current === 2) root.classList.add('martina-purple');

    return `Theme changed → ${THEMES[themeIndexRef.current]}`;
  };

  const activateFatality = () => {
    // Requiere el archivo en public/audio/fatality.mp3
    const sound = new Audio(`${import.meta.env.BASE_URL}audio/fatality.mp3`);
    sound.play().catch(() => {});

    const root = getThemeRoot();
    root.classList.add('fatality-mode');
    setTimeout(
      () => root.classList.remove('fatality-mode'),
      prefersReducedMotion() ? 0 : 1000
    );

    return 'FATALITY.\n\nDefault styles have been defeated.';
  };

  /* ---------- Ejecutar comando ---------- */

  const executeCommand = async (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    commandLogRef.current.push(command);
    historyPosRef.current = commandLogRef.current.length;

    setCommandCount((count) => count + 1);
    setActiveCommand(command);

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    const run = async (type, text, speed, after) => {
      const id = addEntry(command, type);
      await typeText(id, text, speed);
      if (mountedRef.current) after?.();
    };

    if (command === 'random') return run('normal', pickRandom(RANDOM_FACTS));
    if (command === 'theme') return run('normal', changeTheme());
    if (command === 'odin') return run('secret', ODIN_OUTPUT, 18, activateOdin);

    if (command === 'finishhim' || command === 'fatality') {
      return run('secret', activateFatality(), 25);
    }

    if (command === 'photography' || command === 'travel' || command === 'design') {
      return run('normal', COMMANDS[command], 16, () => activateProfileMode(command));
    }

    if (command === 'music') {
      return run('normal', MUSIC_OUTPUT, 16, () => goToSection('#martinaMusic'));
    }
    if (command === 'skills') {
      return run('normal', COMMANDS.skills, 16, () => goToSection('#habilidades'));
    }
    if (command === 'about') {
      return run('normal', COMMANDS.about, 16, () => goToSection('#sobre-mi'));
    }

    if (hasCommand(command)) return run('normal', COMMANDS[command]);

    return run(
      'error',
      `Comando no reconocido: "${command}". Escribí "help" para ver los comandos disponibles.`
    );
  };

  /* ---------- Formulario y teclado ---------- */

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputValue;
    setInputValue('');
    executeCommand(value);
  };

  const handleKeyDown = (event) => {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    event.preventDefault();

    const log = commandLogRef.current;

    if (event.key === 'ArrowUp') {
      historyPosRef.current = Math.max(0, historyPosRef.current - 1);
    } else {
      historyPosRef.current = Math.min(log.length, historyPosRef.current + 1);
    }

    setInputValue(log[historyPosRef.current] ?? '');
  };

  /* ---------- Boot ---------- */

  const bootTerminal = async () => {
    if (bootStartedRef.current) return;
    bootStartedRef.current = true;

    setHistory([]);

    for (const message of BOOT_MESSAGES) {
      if (!mountedRef.current) return;
      const id = addEntry('', 'system');
      await typeText(id, `> ${message}`, 14);
      if (!prefersReducedMotion()) await sleep(180);
    }

    if (!mountedRef.current) return;
    const welcomeId = addEntry('', 'system');
    await typeText(welcomeId, '> escribí "help" para comenzar.');
  };

  // El boot arranca cuando la terminal entra en pantalla
  useEffect(() => {
    mountedRef.current = true;

    const themeRoot = getThemeRoot();
    setPortalTarget(terminalRef.current?.closest('.profile-page') ?? document.body);

    let observer;
    if (terminalRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            bootTerminal();
            observer.disconnect();
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(terminalRef.current);
    } else {
      bootTerminal();
    }

    return () => {
      mountedRef.current = false;
      observer?.disconnect();
      clearTimeout(odinTimerRef.current);
      clearTimeout(modeTimerRef.current);
      themeRoot.classList.remove('martina-pink', 'martina-purple', 'fatality-mode');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mantiene el historial desplazado hasta el último mensaje
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  /* ---------- Render ---------- */

  const entryResponseClass = (type) => {
    if (type === 'error') return 'terminal-history__response terminal-history__error';
    if (type === 'system') return 'terminal-history__response terminal-history__system';
    if (type === 'secret') return 'terminal-history__response terminal-history__secret';
    return 'terminal-history__response';
  };

  return (
    <>
    <div className="terminal" id="martinaTerminal" ref={terminalRef}>
      {/* CABECERA */}
      <div className="terminal__header">
        <div className="terminal__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>martina.exe</span>
        <span className="terminal__status" id="terminalSystemStatus">ONLINE</span>
      </div>

      {/* DASHBOARD SYSTEM */}
      <div className="martina-system">
        {/* En el HTML del TP1 estos dos van dentro del mismo item */}
        <div className="martina-system__item">
          <span>FRONTEND</span>
          <span>CREATIVITY</span>
          <strong>ONLINE</strong>
          <strong>ONLINE</strong>
        </div>
        <div className="martina-system__item">
          <span>LEARNING</span>
          <strong>ACTIVE</strong>
        </div>
        <div className="martina-system__item">
          <span>COMMANDS</span>
          <strong id="commandCounter">{String(commandCount).padStart(2, '0')}</strong>
        </div>
        <div className="martina-system__item martina-system__item--odin">
          <span>ODIN</span>
          <strong
            id="odinStatus"
            className={`odin-status ${odin.visible ? 'is-online' : ''}`}
          >
            {odin.visible ? 'ONLINE' : 'SLEEPING'}
          </strong>
        </div>
      </div>

      {/* CUERPO */}
      <div className="terminal__body">
        {/* BOTONES RÁPIDOS */}
        <div className="terminal__options" role="group" aria-label="Comandos rápidos">
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              type="button"
              className={`terminal-button ${activeCommand === cmd ? 'is-active' : ''}`}
              data-command={cmd}
              aria-controls="terminalHistory"
              aria-pressed={activeCommand === cmd}
              onClick={() => executeCommand(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* HISTORIAL */}
        <div
          className="terminal-history"
          id="terminalHistory"
          ref={historyRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {history.map((entry) => (
            <div key={entry.id} className="terminal-history__entry">
              {entry.command && (
                <p className="terminal-history__command">
                  {`martina@perfil:~$ ${entry.command}`}
                </p>
              )}
              <p
                className={
                  entry.type === 'boot'
                    ? 'terminal-history__boot'
                    : entryResponseClass(entry.type)
                }
              >
                {entry.text}
              </p>
            </div>
          ))}
        </div>

        {/* INPUT DE COMANDOS */}
        <form className="terminal-command" id="terminalForm" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="terminalInput" className="sr-only">
            Escribí un comando para la terminal
          </label>
          <span className="terminal__prompt" aria-hidden="true">martina@perfil:~$</span>
          <input
            type="text"
            id="terminalInput"
            className="terminal-command__input"
            placeholder="escribí help..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            autoComplete="off"
            aria-describedby="terminalHint"
          />
          <button type="submit" className="terminal-command__send" aria-label="Ejecutar comando">
            RUN
          </button>
        </form>

        <p className="terminal-command__hint" id="terminalHint">
          Probá: help · photography · travel · design · music · theme
        </p>
      </div>
    </div>

    {/* Paneles flotantes del TP1: fuera de la terminal, dentro de .profile-page */}
    {portalTarget && createPortal(
      <>
        <aside
          key={`mode-${mode.key}`}
          className="martina-mode-panel"
          id="martinaModePanel"
          data-mode={mode.id}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          hidden={!mode.visible}
        >
          <div className="martina-mode-panel__header">
            <span className="martina-mode-panel__status" aria-hidden="true"></span>
            <span id="martinaModeLabel">{mode.label || 'SYSTEM_MODE'}</span>
          </div>

          <strong className="martina-mode-panel__title" id="martinaModeTitle">
            {mode.title || 'Modo interactivo'}
          </strong>

          <p className="martina-mode-panel__text" id="martinaModeText">{mode.text}</p>

          {/* CAMERA MODE */}
          <div className="martina-mode-visual martina-mode-visual--camera" aria-hidden="true">
            <div className="camera-viewfinder">
              <span className="camera-rec">● REC</span>
              <span className="camera-focus">+</span>
              <div className="camera-info">
                <span>ISO 100</span>
                <span>1/125</span>
                <span>F2.8</span>
              </div>
            </div>
          </div>

          {/* TRAVEL MODE */}
          <div className="martina-mode-visual martina-mode-visual--travel" aria-hidden="true">
            <div className="travel-radar">
              <span className="travel-radar__center">✈</span>
            </div>
            <span className="travel-coordinates">DESTINATION: UNKNOWN</span>
          </div>

          {/* DESIGN MODE */}
          <div className="martina-mode-visual martina-mode-visual--design" aria-hidden="true">
            <div className="design-palette">
              <span className="design-color design-color--1"></span>
              <span className="design-color design-color--2"></span>
              <span className="design-color design-color--3"></span>
              <span className="design-color design-color--4"></span>
            </div>
            <span className="design-palette__label">MARTINA_PALETTE</span>
          </div>
        </aside>

        <aside
          key={`odin-${odin.key}`}
          className="odin-assistant"
          id="odinAssistant"
          aria-label="Odin, asistente secreto de Martina"
          hidden={!odin.visible}
        >
          <div
            className="odin-assistant__message"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className="odin-assistant__label" aria-hidden="true">ODIN.exe</span>
            <p id="odinMessage">{odin.message}</p>
          </div>

          <div className="odin-assistant__avatar">
            {/* Requiere src/assets/avatares/odin.jpg */}
            <img
              src={odinImg}
              alt="Caricatura de Odin, el gato de Martina"
            />
            <span className="odin-assistant__online" aria-hidden="true"></span>
          </div>
        </aside>
      </>,
      portalTarget
    )}
    </>
  );
}
