// src/components/profiles/JorgeConsole.jsx
import { useState, useRef, useEffect } from 'react';

const JORGE_COMMANDS = {
  python:
    "python3 -c 'import jorge; jorge.vibe_check()'<br>" +
    "<span style='color: #888;'>[+] Initializing runtime v3.12... <span style='color: #f55; font-weight: bold;'>OK</span></span><br>" +
    "<span style='color: #888;'>[+] Loading modules (creativity, logic, persistence)... <span style='color: #f55; font-weight: bold;'>OK</span></span><br>" +
    ">>> print('Creatividad + lógica + curiosidad')<br>" +
    "<span style='color: #0ff; font-weight: bold;'>Creatividad + lógica + curiosidad</span><br>" +
    "<span style='color: #0f0;'>[Process finished with exit code 0]</span>",

  music:
    "<span style='color: #0ff;'>♪ DECK STATUS: ONLINE [320kbps]</span><br>" +
    "<span style='color: #888;'>EQ: █▇▆▅▄▃▂ ▃▄▅▆▇█ </span><br><br>" +
    "SELECT TRACK:<br>" +
    "▸ <span style='color: #ffa500;'>[01] Band-Maid (Secret My Lips)</span> → <a href='https://www.youtube.com/watch?v=1Vuca7V-5Ec' target='_blank' rel='noopener noreferrer'>[STREAM]</a><br>" +
    "▸ <span style='color: #ff3333;'>[02] Ling Tosite Sigure (Abnormalize)</span> → <a href='https://www.youtube.com/watch?v=DOKM9QWJG3g' target='_blank' rel='noopener noreferrer'>[STREAM]</a><br>" +
    "▸ <span style='color: #990033;'>[03] Lörihen (Presa Fácil)</span> → <a href='https://www.youtube.com/watch?v=vT9Kd0noyJ4' target='_blank' rel='noopener noreferrer'>[STREAM]</a>",

  game:
    "<span style='color: #ffaa00;'>[COIN INSERTED - CREDIT 01/99]</span><br>" +
    "TITLE: D&D: Shadow over Mystara <span style='color: #888;'>(Capcom, 1996)</span><br>" +
    "CLASS: <span style='color: #0ff;'>Mystic / Beat 'em Up Legend</span><br>" +
    "HP/MP: [██████████████████] MAX<br>" +
    "STATUS: Joyita inigualable → <a href='https://www.youtube.com/watch?v=FaKDO9RyzfU' target='_blank' rel='noopener noreferrer'>[VER ARCADE / INTRO]</a>"
};

const RANDOM_JORGE_FACTS = [
  "Soy instructor de artes marciales 🥋.",
  "Practiqué acrobacia 🤸.",
  "Tengo facilidad para aprender instrumentos musicales 🎸.",
  "Me gusta jugar rol de mesa 🎲.",
  "El desarrollo de videojuegos es una de las áreas que más me interesan 🎮.",
  "Probablemente esté sobrepensando este mensaje."
];

export default function JorgeConsole({ onToggleInferno, isInfernoMode }) {
  const [activeCmd, setActiveCmd] = useState(null);
  const outputContentRef = useRef(null);
  const renderIdRef = useRef(0);

  // Instancias de audio (en /public/audio/)
  const infernoAudioRef = useRef(null);
  const noMercyAudioRef = useRef(null);

  useEffect(() => {
    infernoAudioRef.current = new Audio('/audio/shao_kahn_laugh.mp3');
    noMercyAudioRef.current = new Audio('/audio/no_mercy.mp3');
  }, []);

  // Motor Typewriter que respeta nodos HTML
  const typewriteHTML = async (htmlContent) => {
    const currentId = ++renderIdRef.current;
    if (!outputContentRef.current) return;

    outputContentRef.current.innerHTML = "";

    const temp = document.createElement("div");
    temp.innerHTML = htmlContent;

    async function appendNode(source, target) {
      if (source.nodeType === Node.TEXT_NODE) {
        const textVal = source.textContent;
        const textNode = document.createTextNode("");
        target.appendChild(textNode);
        for (const char of textVal) {
          if (currentId !== renderIdRef.current) return false;
          textNode.nodeValue += char;
          await new Promise((r) => setTimeout(r, 12));
        }
      } else if (source.nodeType === Node.ELEMENT_NODE) {
        const clone = source.cloneNode(false);
        target.appendChild(clone);
        for (const child of source.childNodes) {
          const ok = await appendNode(child, clone);
          if (!ok) return false;
        }
      }
      return true;
    }

    for (const child of temp.childNodes) {
      if (currentId !== renderIdRef.current) break;
      await appendNode(child, outputContentRef.current);
    }
  };

  const handleCommand = (cmdKey) => {
    setActiveCmd(cmdKey);

    if (cmdKey === 'random') {
      const index = Math.floor(Math.random() * RANDOM_JORGE_FACTS.length);
      typewriteHTML(RANDOM_JORGE_FACTS[index]);
      return;
    }

    if (cmdKey === 'inferno') {
      const nextInfernoState = !isInfernoMode;
      if (onToggleInferno) onToggleInferno();

      if (nextInfernoState) {
        if (infernoAudioRef.current) {
          infernoAudioRef.current.currentTime = 0;
          infernoAudioRef.current.play().catch(() => {});
        }
        typewriteHTML(
          "🔥 WARNING: OUTWORLD REALM MERGE DETECTED<br>" +
          "> <span style='color: #f55; font-weight: bold;'>FINISH THEM.</span> [INFERNO CORE: 100%]<br>" +
          "> STATUS: Burn everything down."
        );
      } else {
        if (noMercyAudioRef.current) {
          noMercyAudioRef.current.currentTime = 0;
          noMercyAudioRef.current.play().catch(() => {});
        }
        typewriteHTML("❄️ REALM STABILIZED. Returning to Earthrealm...");
      }
      return;
    }

    if (JORGE_COMMANDS[cmdKey]) {
      typewriteHTML(JORGE_COMMANDS[cmdKey]);
    }
  };

  return (
    <div className="jorge-console">
      {/* HEADER */}
      <div className="jorge-console__header">
        <div className="terminal__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span aria-label="Archivo activo: jorge_system.py">
          jorge_system.py
        </span>
      </div>

      {/* BODY */}
      <div className="jorge-console__body">
        <div className="jorge-console__buttons" role="group" aria-label="Comandos de la consola">
          <button
            type="button"
            className={`jorge-console-button ${activeCmd === 'python' ? 'active' : ''}`}
            onClick={() => handleCommand('python')}
          >
            run python
          </button>

          <button
            type="button"
            className={`jorge-console-button ${activeCmd === 'music' ? 'active' : ''}`}
            onClick={() => handleCommand('music')}
          >
            load music
          </button>

          <button
            type="button"
            className={`jorge-console-button ${activeCmd === 'game' ? 'active' : ''}`}
            onClick={() => handleCommand('game')}
          >
            favorite_game
          </button>

          <button
            type="button"
            className={`jorge-console-button ${isInfernoMode ? 'active' : ''}`}
            onClick={() => handleCommand('inferno')}
          >
            activate_inferno
          </button>

          <button
            type="button"
            className={`jorge-console-button ${activeCmd === 'random' ? 'active' : ''}`}
            onClick={() => handleCommand('random')}
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
            <span ref={outputContentRef}>esperando comando_</span>
          </p>
        </div>
      </div>
    </div>
  );
}