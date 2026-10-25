// src/components/profiles/MediaFlipCard.jsx
// Tarjeta giratoria con trailer bajo demanda (WATCH LIST de Martín).
// El estado "abierta/cerrada" lo maneja el padre (Perfil.jsx) para que,
// como en el TP1, al abrir una tarjeta se cierren las demás.
import { useState, useEffect } from 'react';

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';

export default function MediaFlipCard({
  number,
  type,
  title,
  description,
  videoUrl,
  isFlipped = false,
  onOpen,
  onClose
}) {
  // El iframe se monta al abrir y se quita 300 ms después de cerrar:
  // así el trailer se corta, pero no desaparece durante la animación de giro.
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isFlipped) {
      setShowVideo(true);
      return undefined;
    }

    const timer = setTimeout(() => setShowVideo(false), 300);
    return () => clearTimeout(timer);
  }, [isFlipped]);

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
            onClick={onOpen}
          >
            Ver trailer ▶
          </button>
        </div>

        {/* CARA TRASERA */}
        <div className="media-card__back">
          <div className="media-video-wrapper">
            {showVideo && (
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0`}
                title={`Trailer de ${title}`}
                allow={IFRAME_ALLOW}
                allowFullScreen
              />
            )}
          </div>
          <button
            type="button"
            className="btn-flip-back"
            aria-label={`Cerrar trailer de ${title}`}
            onClick={onClose}
          >
            ✕ Cerrar trailer
          </button>
        </div>
      </article>
    </div>
  );
}
