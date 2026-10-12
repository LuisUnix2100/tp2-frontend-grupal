export default function SearchBar({
  busqueda,
  setBusqueda,
  categoria,
  setCategoria
}) {
  return (
    <div className="resource-filters">
      <div className="resource-search">
        <label htmlFor="buscar-recurso">Buscar tecnología</label>
        <input
          id="buscar-recurso"
          type="search"
          placeholder="Ej.: Java, React, Git..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="resource-category">
        <label htmlFor="filtrar-categoria">Filtrar por categoría</label>
        <select
          id="filtrar-categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Todas">Todas las categorías</option>
          <option value="Lenguajes">Lenguajes</option>
          <option value="Frameworks">Frameworks</option>
          <option value="Herramientas">Herramientas</option>
        </select>
      </div>
    </div>
  );
}