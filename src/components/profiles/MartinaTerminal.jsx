// src/components/profiles/MartinaTerminal.jsx
import { useState, useRef, useEffect } from 'react';

const RESPONSES = {
  about: [
    "> martina.about()",
    "Estudiante de Desarrollo de Software.",
    "Trabajo en Sistemas (distribución y logística).",
    "Enfocada en diseño web funcional, moderno y accesible."
  ],
  skills: [
    "> martina.skills()",
    "Frontend: HTML5, CSS3, JavaScript, Responsive Design.",
    "Herramientas: Git, GitHub, Figma, VS Code.",
    "Habilidades: UI/UX, resolución, proactividad."
  ],
  study: [
    "> martina.study()",
    "Carrera: Tecnicatura Superior en Desarrollo de Software.",
    "Institución: IFTS N.º 29.",
    "Estado: Cursando materias de desarrollo y frontend."
  ],
  random: [
    "> martina.random()",
    "Fan de Mortal Kombat 🕹️",
    "Amante de la fotografía y los viajes ✈️",
    "Tengo un gato llamado Odin 🐈",
    "Interés actual: Psicología 🧠"
  ],
  odin: [
    "> odin.exe",
    "🐈 Miau. Odin ha despertado por unos segundos.",
    "Vuelve a dormir plácidamente..."
  ],
  help: [
    "> Comandos disponibles:",
    "about · skills · study · random · odin · clear"
  ]
};

export default function MartinaTerminal() {
  const [history, setHistory] = useState([
    "Iniciando sistema martina.exe...",
    "Sistema listo. Escribí 'help' o usá los botones rápidos_"
  ]);
  const [inputValue, setInputValue] = useState("");
  const [commandCount, setCommandCount] = useState(0);
  const [odinStatus, setOdinStatus] = useState("SLEEPING");
  const odinTimerRef = useRef(null);

  // Cancela el timer de Odin si se sale del perfil antes de que termine.
  useEffect(() => {
    return () => clearTimeout(odinTimerRef.current);
  }, []);

  const runCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    setCommandCount((prev) => prev + 1);

    if (cleanCmd === "clear") {
      setHistory(["Sistema limpio. Ingresá un comando_"]);
      return;
    }

    if (cleanCmd === "odin") {
      setOdinStatus("AWAKE 🐾");
      // Reinicia el timer si se ejecuta "odin" varias veces seguidas.
      clearTimeout(odinTimerRef.current);
      odinTimerRef.current = setTimeout(() => setOdinStatus("SLEEPING"), 4000);
    }

    const output = RESPONSES[cleanCmd] || [
      `> '${cleanCmd}' no es reconocido como un comando.`,
      "Escribí 'help' para ver las opciones disponibles."
    ];

    setHistory((prev) => [...prev, ...output]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    runCommand(inputValue);
    setInputValue("");
  };

  return (
    <div className="terminal" id="martinaTerminal">
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
        <div className="martina-system__item">
          <span>FRONTEND</span>
          <strong>ONLINE</strong>
        </div>
        <div className="martina-system__item">
          <span>CREATIVITY</span>
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
          <strong id="odinStatus" className="odin-status">{odinStatus}</strong>
        </div>
      </div>

      {/* CUERPO */}
      <div className="terminal__body">
        {/* BOTONES RÁPIDOS */}
        <div className="terminal__options" role="group" aria-label="Comandos rápidos">
          <button type="button" className="terminal-button" onClick={() => runCommand('about')}>about</button>
          <button type="button" className="terminal-button" onClick={() => runCommand('skills')}>skills</button>
          <button type="button" className="terminal-button" onClick={() => runCommand('study')}>study</button>
          <button type="button" className="terminal-button" onClick={() => runCommand('random')}>random</button>
          <button type="button" className="terminal-button" onClick={() => runCommand('odin')}>odin</button>
          <button type="button" className="terminal-button" onClick={() => runCommand('help')}>help</button>
        </div>

        {/* HISTORIAL */}
        <div className="terminal-history" id="terminalHistory" role="log" aria-live="polite">
          {history.map((line, idx) => (
            <p key={idx} className={idx === 0 ? "terminal-history__boot" : ""}>{line}</p>
          ))}
        </div>

        {/* INPUT DE COMANDOS */}
        <form className="terminal-command" id="terminalForm" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="terminalInput" className="sr-only">Escribí un comando</label>
          <span className="terminal__prompt" aria-hidden="true">martina@perfil:~$</span>
          <input
            type="text"
            id="terminalInput"
            className="terminal-command__input"
            placeholder="escribí help..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            spellCheck="false"
            autoComplete="off"
          />
          <button type="submit" className="terminal-command__send" aria-label="Ejecutar comando">RUN</button>
        </form>

        <p className="terminal-command__hint" id="terminalHint">
          Probá: about · skills · study · random · odin · clear
        </p>
      </div>
    </div>
  );
}
