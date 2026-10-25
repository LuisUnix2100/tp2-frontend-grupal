export default function SearchBar({
  busqueda,
  setBusqueda,
  categoria,
  setCategoria,
  onReset
}) {
  const categorias = ['Todos', 'Lenguajes', 'Frameworks', 'Herramientas'];

  const handleReset = () => {
    if (onReset) {
      onReset();
    } else {
      setBusqueda('');
      setCategoria('Todos');
    }
  };

  const hayFiltrosActivos = busqueda.trim() !== '' || (categoria !== 'Todos' && categoria !== 'Todas');

  return (
    <div className="resource-filters">
      <div className="resource-search">
        <label htmlFor="buscar-recurso">🔍 Buscar tecnología o integrante</label>
        <div className="resource-search__input-wrapper">
          <input
            id="buscar-recurso"
            type="search"
            placeholder="Ej.: React, Python, Martina, Git, POO..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <button
              type="button"
              className="resource-search__clear-input"
              onClick={() => setBusqueda('')}
              title="Borrar texto"
              aria-label="Borrar texto"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="resource-category">
        <label htmlFor="filtrar-categoria">🏷️ Filtrar por categoría</label>
        <select
          id="filtrar-categoria"
          value={categoria === 'Todas' ? 'Todos' : categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'Todos' ? 'Todas las categorías' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="resource-reset-container">
        <button
          type="button"
          onClick={handleReset}
          className={`resource-reset-btn ${hayFiltrosActivos ? 'resource-reset-btn--active' : ''}`}
          title="Restablecer todos los filtros"
        >
          <span aria-hidden="true">🔄</span> Limpiar filtros
        </button>
      </div>
    </div>
  );
}
