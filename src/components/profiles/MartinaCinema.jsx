// src/components/profiles/MartinaCinema.jsx
// Port del "CINEMA EXPLORER" de martina.js
import { useState, useRef } from 'react';

const CINEMA_ITEMS = [
  {
    id: 'speed',
    number: '01',
    title: 'Rápidos y Furiosos',
    subtitle: 'Autos · Motos · Acción',
    type: 'ACTION_MODE',
    icon: '🏎️',
    format: 'Saga',
    vibe: 'Adrenalina',
    focus: 'Autos & motos',
    description: 'Autos · Motos · Acción'
  },
  {
    id: 'science',
    number: '02',
    title: 'The Big Bang Theory',
    subtitle: 'Ciencia · Comedia',
    type: 'SCIENCE_MODE',
    icon: '⚛️',
    format: 'Serie',
    vibe: 'Comedia',
    focus: 'Ciencia',
    description: 'Ciencia · Comedia · Curiosidad'
  },
  {
    id: 'city',
    number: '03',
    title: 'Sex and the City',
    subtitle: 'Serie favorita',
    type: 'CITY_MODE',
    icon: '👠',
    format: 'Serie',
    vibe: 'Urbano',
    focus: 'Moda & amistad',
    description: 'Moda · Amistad · Nueva York'
  }
];

export default function MartinaCinema() {
  const [selected, setSelected] = useState(null);
  const screenRef = useRef(null);

  const explore = (item) => {
    setSelected(item);

    // Reinicia la animación "is-changing" en cada selección (igual que el TP1)
    const screen = screenRef.current;
    if (screen) {
      screen.classList.remove('is-changing');
      void screen.offsetWidth;
      screen.classList.add('is-changing');
    }
  };

  return (
    <div className="favorites-group" id="martinaCinema">
      <div className="favorites-group__header">
        <span aria-hidden="true">🎬</span>
        <h3>Películas & series</h3>
      </div>

      <div className="favorites-cards">
        {CINEMA_ITEMS.map((item) => {
          const isActive = selected?.id === item.id;

          return (
            <article
              key={item.id}
              // "is-active" es la clase del TP1; "active" se mantiene por compatibilidad
              className={`favorite-card cinema-card ${isActive ? 'is-active active' : ''}`}
              tabIndex={0}
              onMouseEnter={() => explore(item)}
              onFocus={() => explore(item)}
              onClick={() => explore(item)}
            >
              <span className="favorite-card__number">{item.number}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
                <span className="cinema-card__hint">HOVER · TAB · TAP</span>
              </div>
            </article>
          );
        })}
      </div>

      {/* PANTALLA CINEMA EXPLORER */}
      <div
        className="martina-cinema-screen"
        id="martinaCinemaScreen"
        ref={screenRef}
        data-cinema-mode={selected?.id || ''}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="martina-cinema-screen__icon" id="cinemaIcon" aria-hidden="true">
          {selected ? selected.icon : '🎬'}
        </div>

        <div className="martina-cinema-screen__content">
          <span className="martina-cinema-screen__mode" id="cinemaMode">
            {selected ? selected.type : 'CINEMA_EXPLORER'}
          </span>
          <strong id="cinemaTitle">
            {selected ? selected.title : 'Elegí una película o serie'}
          </strong>
          <p id="cinemaDescription">
            {selected ? selected.description : 'Pasá el mouse, usá Tab o tocá una tarjeta.'}
          </p>

          <div className="cinema-details" aria-label="Detalles de la selección">
            <div className="cinema-detail">
              <span>FORMATO</span>
              <strong id="cinemaFormat">{selected ? selected.format : '—'}</strong>
            </div>
            <div className="cinema-detail">
              <span>VIBE</span>
              <strong id="cinemaVibe">{selected ? selected.vibe : '—'}</strong>
            </div>
            <div className="cinema-detail">
              <span>FOCO</span>
              <strong id="cinemaFocus">{selected ? selected.focus : '—'}</strong>
            </div>
          </div>
        </div>

        <span className="martina-cinema-screen__status" aria-hidden="true">
          ● ONLINE
        </span>
      </div>
    </div>
  );
}
