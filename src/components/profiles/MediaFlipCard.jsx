// src/components/profiles/MediaFlipCard.jsx
import { useState } from 'react';

export default function MediaFlipCard({ number, type, title, description, videoUrl }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleOpen = () => setIsFlipped(true);
  const handleClose = () => setIsFlipped(false);

  return (
    <div className="media-flip-container">
      <article className={`martin-media-card ${isFlipped ? 'is-flipped' : ''}`}>
        {/* CARA FRONTAL */}
        <div className="media-card__front">
          <span className="martin-media-card__number">{number}</span>
          <span className="martin-media-card__type">{type}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <button
            type="button"
            className="btn-flip"
            aria-expanded={isFlipped}
            aria-label={`Ver trailer de ${title}`}
            onClick={handleOpen}
          >
            Ver trailer ▶
          </button>
        </div>

        {/* CARA TRASERA */}
        <div className="media-card__back">
          <div className="media-video-wrapper">
            {isFlipped && (
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0`}
                title={`Trailer oficial de ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <button
            type="button"
            className="btn-flip-back"
            aria-label={`Cerrar trailer de ${title}`}
            onClick={handleClose}
          >
            ✕ Cerrar trailer
          </button>
        </div>
      </article>
    </div>
  );
}