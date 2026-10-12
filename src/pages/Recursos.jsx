import { useState } from 'react';
import recursos from '../data/recursos.json';
import ResourceCard from '../components/ResourceCard';
import SearchBar from '../components/SearchBar';

export default function Recursos() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  const recursosFiltrados = recursos.filter((recurso) => {
    const texto = busqueda.toLowerCase().trim();

    const coincideBusqueda =
      recurso.nombre.toLowerCase().includes(texto) ||
      recurso.descripcion.toLowerCase().includes(texto) ||
      recurso.integrante.toLowerCase().includes(texto);

    const coincideCategoria =
      categoria === 'Todas' || recurso.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <section className="section recursos-page">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">
            Recursos del equipo
          </span>

          <h1>Tecnologías y herramientas</h1>

          <p>
            Conocé los lenguajes, frameworks y herramientas que forman
            parte de nuestro equipo de desarrollo.
          </p>
        </div>

        <SearchBar
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          categoria={categoria}
          setCategoria={setCategoria}
        />

        <p className="resources-count" aria-live="polite">
          {recursosFiltrados.length === 0
            ? 'No se encontraron recursos.'
            : `${recursosFiltrados.length} recursos encontrados`}
        </p>

        <div className="resources-grid">
          {recursosFiltrados.map((recurso) => (
            <ResourceCard key={recurso.id} recurso={recurso} />
          ))}
        </div>
      </div>
    </section>
  );
}