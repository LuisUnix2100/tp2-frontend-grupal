export default function ResourceCard({ recurso }) {
  return (
    <article className="resource-card">
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

      <div className="resource-card__footer">
        <span>Integrante:</span>
        <strong>{recurso.integrante}</strong>
      </div>
    </article>
  );
}