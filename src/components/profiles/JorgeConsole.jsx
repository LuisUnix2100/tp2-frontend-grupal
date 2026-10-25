// src/components/profiles/JorgeConsole.jsx
import { useState } from 'react';

const JORGE_COMMANDS = {
  python: "Python 3.12: Scripts de automatización, lógica algorítmica y estructuras de datos activas.",
  music: "Now Playing: BAND-MAID, Ling Tosite Sigure y Lorihen. Riffs potentes y melodías envolventes.",
  game: "Juego favorito: Dungeons & Dragons: Shadow over Mystara (Capcom, 1996). Arcade RPG de culto.",
  inferno: "🔥 INFERNO MODE ON: Creatividad desatada. Pensando diez soluciones al mismo tiempo.",
  random: "Dato curioso: Instructor de artes marciales y practicante de acrobacia."
};

export default function JorgeConsole() {
  const [output, setOutput] = useState("esperando comando_");

  const runCommand = (cmdKey) => {
    setOutput(JORGE_COMMANDS[cmdKey] || "Comando no reconocido.");
  };

  return (
    <div className="jorge-console">
      <div className="jorge-console__header">
        <div className="terminal__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span aria-label="Archivo activo: jorge_system.py">jorge_system.py</span>
      </div>

      <div className="jorge-console__body">
        <div className="jorge-console__buttons" role="group" aria-label="Comandos de la consola de Jorge">
          <button
            type="button"
            className="jorge-console-button"
            onClick={() => runCommand('python')}
          >
            run python
          </button>
          <button
            type="button"
            className="jorge-console-button"
            onClick={() => runCommand('music')}
          >
            load music
          </button>
          <button
            type="button"
            className="jorge-console-button"
            onClick={() => runCommand('game')}
          >
            favorite_game
          </button>
          <button
            type="button"
            className="jorge-console-button"
            onClick={() => runCommand('inferno')}
          >
            activate_inferno
          </button>
          <button
            type="button"
            className="jorge-console-button"
            onClick={() => runCommand('random')}
          >
            random
          </button>
        </div>

        <div
          className="jorge-console__output"
          id="jorgeConsoleOutput"
          aria-live="polite"
          aria-atomic="true"
        >
          <p>
            <span aria-hidden="true">root@jorge:~$ </span>
            {output}
          </p>
        </div>
      </div>
    </div>
  );
}