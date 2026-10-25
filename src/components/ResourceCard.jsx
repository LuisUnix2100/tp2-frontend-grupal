import { useState } from 'react';

export default function ResourceCard({ recurso }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`resource-card ${isExpanded ? 'resource-card--expanded' : ''}`}>
      <div className="resource-card__header">
        <span className="resource-card__category">
          {recurso.categoria}
        </span>

        <span className="resource-card__level">
          {recurso.nivel}
        </span>
      </div>

      <h3 className="resource-card__title">
        {recurso.nombre}
      </h3>

      <p className="resource-card__description">
        {recurso.descripcion}
      </p>

      {/* Detalle interactivo desplegable (Nivel Propone) */}
      <div className="resource-card__interactive-area">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="resource-card__toggle-btn"
          aria-expanded={isExpanded}
          aria-controls={`details-${recurso.id}`}
        >
          <span>{isExpanded ? '▲ Ocultar detalles' : '▼ Ver más detalles'}</span>
        </button>

        {isExpanded && (
          <div
            id={`details-${recurso.id}`}
            className="resource-card__details animate-fade-in"
          >
            {recurso.usoEnProyecto && (
              <div className="resource-card__detail-item">
                <span className="resource-card__detail-label">🎯 Aplicación en el equipo:</span>
                <p className="resource-card__detail-text">{recurso.usoEnProyecto}</p>
              </div>
            )}

            {recurso.caracteristicas && (
              <div className="resource-card__detail-item">
                <span className="resource-card__detail-label">⚡ Características clave:</span>
                <p className="resource-card__detail-text">{recurso.caracteristicas}</p>
              </div>
            )}

            {recurso.tags && recurso.tags.length > 0 && (
              <div className="resource-card__tags">
                {recurso.tags.map((tag, idx) => (
                  <span key={idx} className="resource-tag-pill">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {recurso.documentacion && (
              <a
                href={recurso.documentacion}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card__doc-link"
              >
                <span>Documentación oficial</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="resource-card__footer">
        <span>Integrante de referencia:</span>
        <strong>{recurso.integrante}</strong>
      </div>
    </article>
  );
}
