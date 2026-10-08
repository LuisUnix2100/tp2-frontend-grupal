// src/components/profiles/MartinOS.jsx
import { useState, useRef } from 'react';

const COMMANDS = {
  stack: [
    "> loading stack...",
    "HTML / CSS / JavaScript",
    "React / Node.js",
    "Python / Django",
    "STATUS: FULLSTACK PATH ACTIVE"
  ],
  games: [
    "> accessing game library...",
    "STARCRAFT detected.",
    "DIABLO detected.",
    "Publisher: Blizzard Entertainment",
    "STATUS: READY TO PLAY"
  ],
  pets: [
    "> scanning pets...",
    "Dogs detected: 3 🐶",
    "Cats detected: 8 🐈",
    "Total companions: 11",
    "STATUS: HOUSE FULL"
  ],
  goal: [
    "> loading mission...",
    "Current job: Logistics",
    "Target career: Software Development",
    "Specialization target: Fullstack",
    "MISSION STATUS: IN PROGRESS 🚀"
  ]
};

export const BOOT_LINES = [
  "MARTIN OS v1.0",
  "Initializing system...",
  "Loading React....... OK",
  "Checking resilience. OK",
  "FULLSTACK MODE READY.",
  "Welcome, Player 1."
];

export default function MartinOS({ onToggleTheme }) {
  const [lines, setLines] = useState([
    "MARTIN OS v1.0",
    "Sistema listo.",
    "Seleccioná un comando_"
  ]);
  const [booting, setBooting] = useState(false);
  const bootIntervalRef = useRef(null);

  const handleCommand = (cmd) => {
    if (booting) return;

    if (cmd === 'boot') {
      setBooting(true);
      setLines([]);
      let index = 0;
      bootIntervalRef.current = setInterval(() => {
        setLines((prev) => [...prev, BOOT_LINES[index]]);
        index++;
        if (index >= BOOT_LINES.length) {
          clearInterval(bootIntervalRef.current);
          setBooting(false);
        }
      }, 250);
      return;
    }

    if (cmd === 'theme') {
      onToggleTheme?.();
      setLines(["> THEME SWITCHED", "Palette changed successfully."]);
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
        <span className="martin-console__status">{booting ? 'BOOTING...' : 'ONLINE'}</span>
      </div>

      <div className="martin-console__screen" aria-live="polite" aria-atomic="true">
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