// src/components/profiles/MartinaMusic.jsx
// Port del "MUSIC EXPLORER" de martina.js
import { useState } from 'react';

const MUSIC_ITEMS = [
  {
    number: '01',
    album: 'Por Colectora',
    artist: 'Las Pastillas del Abuelo',
    url: 'https://youtu.be/cqFO_ppcbsw?si=z3RuDshJ_H2MN3h0'
  },
  {
    number: '02',
    album: 'Paradojas',
    artist: 'Las Pastillas del Abuelo',
    url: 'https://youtu.be/GbyE9BFGaws?si=XmqqDMh4e5MM7qa5'
  },
  {
    number: '03',
    album: '2020',
    artist: 'Las Pastillas del Abuelo',
    url: 'https://youtu.be/Vz28Lm6Xe_I?si=G5BQRFJ4qXDA2R7k'
  }
];

export default function MartinaMusic() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  return (
    <div className="favorites-group" id="martinaMusic">
      <div className="favorites-group__header">
        <span aria-hidden="true">🎧</span>
        <h3>Música</h3>
      </div>

      <div className="favorites-cards">
        {MUSIC_ITEMS.map((item) => {
          const isPlaying = activeAlbum?.number === item.number;

          return (
            <article
              key={item.number}
              // "is-playing" es la clase del TP1; "active" se mantiene por compatibilidad
              className={`favorite-card music-card ${isPlaying ? 'is-playing active' : ''}`}
              tabIndex={0}
              onMouseEnter={() => setActiveAlbum(item)}
              onFocus={() => setActiveAlbum(item)}
              onClick={() => setActiveAlbum(item)}
            >
              <span className="favorite-card__number">{item.number}</span>
              <div className="music-card__content">
                <h4>{item.album}</h4>
                <p>{item.artist}</p>
                <span className="music-card__hint">
                  Pasá el mouse, usá Tab o tocá para explorar
                </span>
                <a
                  className="music-youtube-button"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Escuchar ${item.album} de ${item.artist} en YouTube`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span aria-hidden="true">▶</span> VER EN YOUTUBE
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* PANTALLA NOW PLAYING */}
      <div
        className="martina-now-playing"
        id="martinaNowPlaying"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="martina-now-playing__record" aria-hidden="true">
          <span>♪</span>
        </div>

        <div className="martina-now-playing__info">
          <span className="martina-now-playing__label">MUSIC_EXPLORER</span>
          <strong id="nowPlayingAlbum">
            {activeAlbum ? activeAlbum.album : 'Elegí un álbum'}
          </strong>
          <p id="nowPlayingArtist">
            {activeAlbum ? activeAlbum.artist : 'Explorá mis discos favoritos.'}
          </p>
        </div>
      </div>
    </div>
  );
}
