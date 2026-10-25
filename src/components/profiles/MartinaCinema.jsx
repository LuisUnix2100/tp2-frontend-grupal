// src/components/profiles/MartinaCinema.jsx
import { useState } from 'react';

const CINEMA_ITEMS = [
  {
    id: "speed",
    number: "01",
    title: "Rápidos y Furiosos",
    subtitle: "Autos · Motos · Acción",
    type: "ACTION_MODE",
    icon: "🏎️",
    format: "Saga",
    vibe: "Adrenalina",
    focus: "Autos & motos",
    description: "Autos · Motos · Acción"
  },
  {
    id: "science",
    number: "02",
    title: "The Big Bang Theory",
    subtitle: "Ciencia · Comedia",
    type: "SCIENCE_MODE",
    icon: "⚛️",
    format: "Serie",
    vibe: "Comedia",
    focus: "Ciencia",
    description: "Ciencia · Comedia · Curiosidad"
  },
  {
    id: "city",
    number: "03",
    title: "Sex and the City",
    subtitle: "Serie favorita",
    type: "CITY_MODE",
    icon: "👠",
    format: "Serie",
    vibe: "Urbano",
    focus: "Moda & amistad",
    description: "Moda · Amistad · Nueva York"
  }
];

export default function MartinaCinema() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="favorites-group" id="martinaCinema">
      <div className="favorites-group__header">
        <span aria-hidden="true">🎬</span>
        <h3>Películas & series</h3>
      </div>

      <div className="favorites-cards">
        {CINEMA_ITEMS.map((item) => (
          <article
            key={item.id}
            className={`favorite-card cinema-card ${selected?.id === item.id ? 'active' : ''}`}
            tabIndex={0}
            onClick={() => setSelected(item)}
            onMouseEnter={() => setSelected(item)}
            onFocus={() => setSelected(item)}
          >
            <span className="favorite-card__number">{item.number}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
              <span className="cinema-card__hint">HOVER · TAB · TAP</span>
            </div>
          </article>
        ))}
      </div>

      {/* PANTALLA CINEMA EXPLORER */}
      <div
        className="martina-cinema-screen"
        id="martinaCinemaScreen"
        data-cinema-mode={selected?.id || ""}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="martina-cinema-screen__icon" aria-hidden="true">
          {selected ? selected.icon : "🎬"}
        </div>

        <div className="martina-cinema-screen__content">
          <span className="martina-cinema-screen__mode">
            {selected ? selected.type : "CINEMA_EXPLORER"}
          </span>
          <strong id="cinemaTitle">
            {selected ? selected.title : "Elegí una película o serie"}
          </strong>
          <p id="cinemaDescription">
            {selected ? selected.description : "Pasá el mouse, usá Tab o tocá una tarjeta."}
          </p>

          <div className="cinema-details" aria-label="Detalles de la selección">
            <div className="cinema-detail">
              <span>FORMATO</span>
              <strong>{selected ? selected.format : "—"}</strong>
            </div>
            <div className="cinema-detail">
              <span>VIBE</span>
              <strong>{selected ? selected.vibe : "—"}</strong>
            </div>
            <div className="cinema-detail">
              <span>FOCO</span>
              <strong>{selected ? selected.focus : "—"}</strong>
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