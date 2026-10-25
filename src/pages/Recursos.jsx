import { useState } from 'react';
import recursos from '../data/recursos.json';
import ResourceCard from '../components/ResourceCard';
import SearchBar from '../components/SearchBar';

export default function Recursos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const handleResetFilters = () => {
    setBusqueda('');
    setCategoria('Todos');
  };

  const recursosFiltrados = recursos.filter((recurso) => {
    const texto = busqueda.toLowerCase().trim();

    const coincideBusqueda =
      !texto ||
      recurso.nombre.toLowerCase().includes(texto) ||
      recurso.descripcion.toLowerCase().includes(texto) ||
      recurso.integrante.toLowerCase().includes(texto) ||
      (recurso.tags && recurso.tags.some((t) => t.toLowerCase().includes(texto))) ||
      (recurso.caracteristicas && recurso.caracteristicas.toLowerCase().includes(texto)) ||
      (recurso.usoEnProyecto && recurso.usoEnProyecto.toLowerCase().includes(texto));

    const coincideCategoria =
      categoria === 'Todos' ||
      categoria === 'Todas' ||
      recurso.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section className="section recursos-page">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">
            Recursos y Tecnologías
          </span>

          <h1>Catálogo Tecnológico del Equipo</h1>

          <p>
            Explorá los lenguajes, frameworks, librerías y herramientas que
            dominamos y utilizamos en nuestro flujo de desarrollo. Cada recurso
            incluye información extendida, casos de uso en el proyecto y documentación oficial.
          </p>
        </div>

        <SearchBar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          categoria={categoria}
          setCategoria={setCategoria}
          onReset={handleResetFilters}
        />

        <div className="resources-status-bar">
          <p className="resources-count" aria-live="polite">
            {recursosFiltrados.length === 0
              ? 'No se encontraron recursos que coincidan con tu búsqueda.'
              : `Mostrando ${recursosFiltrados.length} de ${recursos.length} recursos disponibles`}
          </p>

          {(busqueda.trim() !== '' || (categoria !== 'Todos' && categoria !== 'Todas')) && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="resources-clear-inline"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {recursosFiltrados.length === 0 ? (
          <div className="resources-empty-box">
            <div className="resources-empty-icon" aria-hidden="true">🔎</div>
            <h3>Sin resultados disponibles</h3>
            <p className="resources-empty-message">
              No se encontraron recursos que coincidan con tu búsqueda.
            </p>
            <p className="resources-empty-subtext">
              Probá modificando los términos de búsqueda o cambiando la categoría seleccionada.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="resource-reset-btn resource-reset-btn--active"
            >
              🔄 Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="resources-grid">
            {recursosFiltrados.map((recurso) => (
              <ResourceCard key={recurso.id} recurso={recurso} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
