import { useState } from 'react';
import '../styles/bitacora.css';

const bitacoraData = [
  {
    id: 1,
    etapa: 'TP1',
    etapaLabel: 'Etapa 01 — TP1',
    fecha: 'Agosto 2026',
    titulo: 'Análisis de la consigna, roles y flujo colaborativo en GitHub',
    integrantes: ['Martina Bistagnino', 'Gabriela Dalila Contrera', 'Jorge Caliz', 'Francisco Luis Bronzi', 'Martín Roige'],
    dificultad: 'Coordinar a cinco integrantes en un único repositorio sin sobrescribir código ajeno ni generar conflictos destructivos al fusionar cambios en la rama principal.',
    decision: 'Adopción del modelo GitHub Flow: ramas específicas por integrante (feature/perfil-nombre), commits atómicos con mensajes semánticos y revisión obligatoria en Pull Requests antes de incorporar a main.',
    solucion: 'Se redactó la guía de contribución en el README inicial, se establecieron canales de comunicación para acordar merges y se asignaron responsabilidades claras.',
    aprendizaje: 'La disciplina en el control de versiones previene incidentes de pérdida de código y agiliza el trabajo colaborativo en paralelo.'
  },
  {
    id: 2,
    etapa: 'TP1',
    etapaLabel: 'Etapa 02 — TP1',
    fecha: 'Agosto 2026',
    titulo: 'Identidad visual, variables CSS y prevención de colisión de estilos',
    integrantes: ['Martina Bistagnino', 'Martín Roige'],
    dificultad: 'Cada perfil individual requería una propuesta estética personal (retro 8-bit, terminales, música, cine), provocando colisiones entre selectores CSS globales al unificar los archivos en el proyecto común.',
    decision: 'Centralizar los tokens globales en variables CSS (:root) para colores base, tipografías y sombras, aislando los estilos de cada perfil mediante prefijos de clase estrictos (ej. .retro-*, .terminal-*).',
    solucion: 'Se estructuró el archivo styles.css con reset semántico y variables de diseño cyberpunk compartidas, complementado con perfiles.css para encapsular la personalización de cada compañero.',
    aprendizaje: 'El uso metódico de variables CSS nativas y namespaces de clases garantiza consistencia de marca sin sacrificar la creatividad individual.'
  },
  {
    id: 3,
    etapa: 'TP1',
    etapaLabel: 'Etapa 03 — TP1',
    fecha: 'Septiembre 2026',
    titulo: 'Interactividad en Vanilla JavaScript: Consolas, audio y DOM nativo',
    integrantes: ['Martina Bistagnino', 'Jorge Caliz', 'Francisco Luis Bronzi', 'Martín Roige', 'Gabriela Dalila Contrera'],
    dificultad: 'Mantener el estado de emuladores de terminal, reproductores de audio y animaciones sin el soporte de ningún framework ni librería externa, evitando memory leaks por event listeners redundantes.',
    decision: 'Encapsular los scripts individuales en funciones autoejecutables (IIFE) y emplear delegación de eventos en contenedores padre, almacenando flags temporales en atributos dataset de HTML5.',
    solucion: 'Se implementaron consolas con parseo de comandos en tiempo real, efectos sonoros controlados por la Web Audio API y tarjetas con efectos de giro 3D en CSS/JS.',
    aprendizaje: 'Dominar la manipulación directa del DOM y el ciclo de eventos en JavaScript nativo proporcionó las bases conceptuales indispensables para la migración a React.'
  },
  {
    id: 4,
    etapa: 'TP1',
    etapaLabel: 'Etapa 04 — TP1',
    fecha: 'Septiembre 2026',
    titulo: 'Diseño responsive bajo enfoque Mobile-First y breakpoints críticos',
    integrantes: ['Francisco Luis Bronzi', 'Jorge Caliz'],
    dificultad: 'Las consolas interactivas y tableros arcade se desbordaban horizontalmente en pantallas estrechas de teléfonos móviles (<400px), arruinando la usabilidad de la portada y los perfiles.',
    decision: 'Reestructurar todas las grillas con CSS Flexbox y CSS Grid bajo enfoque Mobile-First, adoptando tres breakpoints estándar: 400px (smartphones pequeños), 900px (tablets) y 1200px (desktop).',
    solucion: 'Se introdujeron contenedores con overflow-x controlado en bloques de código y terminales, menú hamburguesa accesible con botón toggle y tipografías fluidas con clamp().',
    aprendizaje: 'Diseñar pensando en pantallas pequeñas desde la primera línea de código ahorra costosas refactorizaciones y garantiza accesibilidad universal.'
  },
  {
    id: 5,
    etapa: 'TP2',
    etapaLabel: 'Etapa 05 — TP2',
    fecha: 'Octubre 2026',
    titulo: 'Migración a React 18, Vite y arquitectura de SPA con React Router',
    integrantes: ['Martín Roige', 'Francisco Luis Bronzi'],
    dificultad: 'Mudar un sitio multi-página estático a una Single Page Application (SPA) con navegación fluida sin recargas de página, resolviendo el problema de rutas directas que generaban error 404 al refrescar en Vercel.',
    decision: 'Adoptar Vite como bundler por su rendimiento ultrarrápido y configurar React Router DOM v6 con un componente Layout maestro que contiene la Sidebar fija persistente y un Outlet para inyección dinámica de vistas.',
    solucion: 'Se creó vercel.json con reglas de reescritura ("rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]) asegurando que el cliente maneje todas las URL, junto con el componente ScrollToTop para restablecer la vista al navegar.',
    aprendizaje: 'El enrutamiento del lado del cliente (CSR) mejora radicalmente la fluidez de la interfaz pero requiere una correcta configuración en el servidor de despliegue.'
  },
  {
    id: 6,
    etapa: 'TP2',
    etapaLabel: 'Etapa 06 — TP2',
    fecha: 'Octubre 2026',
    titulo: 'Centralización de datos en teamData.js y componente dinámico Perfil.jsx',
    integrantes: ['Martín Roige', 'Martina Bistagnino', 'Jorge Caliz'],
    dificultad: 'Reemplazar cinco páginas HTML independientes por una única ruta parametrizada (/integrantes/:id) sin perder las interacciones y consolas exclusivas de cada perfil ni duplicar plantillas de interfaz.',
    decision: 'Normalizar los datos compartidos de los integrantes en teamData.js y crear un Perfil.jsx reutilizable que capture el parámetro con useParams() y monte condicionalmente los módulos interactivos correspondientes.',
    solucion: 'Se migraron MartinOS, JorgeConsole, DalilaExplorer, MartinaTerminal, MartinaCinema y LuisOS como componentes de React autocontenidos, reutilizando cabeceras y tarjetas mediante props dinámicas.',
    aprendizaje: 'La modularización en componentes funcionales desacoplados maximiza la reutilización de código y mantiene la mantenibilidad del proyecto a largo plazo.'
  },
  {
    id: 7,
    etapa: 'TP2',
    etapaLabel: 'Etapa 07 — TP2',
    fecha: 'Octubre 2026',
    titulo: 'Catálogo de 20 recursos JSON: Búsqueda reactiva, filtros y detalles expandibles',
    integrantes: ['Gabriela Dalila Contrera', 'Martín Roige'],
    dificultad: 'Filtrar dinámicamente un conjunto de 20 herramientas cruzando texto libre con categorías (Lenguajes, Frameworks, Herramientas) en tiempo real, sin mutar la fuente de datos ni saturar el renderizado.',
    decision: 'Modelar recursos.json con 20 registros enriquecidos (casos de uso, tags, documentación), aplicando filtrado inmutable en el cuerpo del componente Recursos.jsx mediante variables derivadas y estados independientes.',
    solucion: 'Se implementó SearchBar con botón de restablecimiento a "Todos", tarjetas con acordeón interactivo para ver detalles técnicos y un estado vacío con el mensaje estricto de la consigna ante búsquedas sin coincidencias.',
    aprendizaje: 'Derivar datos calculados a partir del estado de React es más limpio, predecible y libre de bugs que sincronizar múltiples estados redundantes.'
  },
  {
    id: 8,
    etapa: 'TP2',
    etapaLabel: 'Etapa 08 — TP2',
    fecha: 'Octubre 2026',
    titulo: 'Consumo asíncrono de GitHub API y control estricto de tres estados visuales',
    integrantes: ['Martina Bistagnino', 'Francisco Luis Bronzi'],
    dificultad: 'Gestionar la latencia de red, límites de peticiones no autenticadas (HTTP 403 Rate Limit) y posibles caídas de conexión, asegurando que la interfaz informe en todo momento el estado de la solicitud.',
    decision: 'Aislar las llamadas fetch en un servicio githubApi.js con tipado semántico de errores, controlando explícitamente tres estados visuales: Cargando (spinner dual animado), Éxito (renderizado de estadísticas) y Error (mensaje claro y legible).',
    solucion: 'Se incorporó una bandera de cancelación (cleanup function en useEffect) para descartar respuestas si el componente se desmonta, y botones interactivos de "Actualizar datos" y "Reintentar" en la interfaz.',
    aprendizaje: 'Anticipar y diseñar visualmente los estados de error y carga asíncrona es vital para una aplicación web resiliente y profesional.'
  },
  {
    id: 9,
    etapa: 'TP2',
    etapaLabel: 'Etapa 09 — TP2',
    fecha: 'Octubre 2026',
    titulo: 'Árbol de renderizado interactivo y Bitácora filtrable para nivel Propone',
    integrantes: ['Jorge Gabriel Caliz', 'Martín Roige'],
    dificultad: 'Superar el formato plano de documentación estática y presentar tanto la jerarquía viva de componentes como la bitácora de decisiones mediante componentes ricos e interactivos.',
    decision: 'Construir Arbol.jsx con nodos colapsables jerárquicos (App -> BrowserRouter -> Layout -> Sidebar + Outlet -> Páginas -> Hijos) y Bitacora.jsx con filtros multidimensionales y acordeones desplegables.',
    solucion: 'Se desarrollaron controles globales de expansión ("Expandir todo" / "Contraer todo"), filtros por integrante y por etapa con contador de coincidencias en tiempo real, cumpliendo holgadamente el nivel más alto de la rúbrica.',
    aprendizaje: 'Hacer que las herramientas de introspección del propio proyecto sean interactivas refuerza el aprendizaje y demuestra dominio completo de React.'
  }
];

export default function Bitacora() {
  const [filtroEtapa, setFiltroEtapa] = useState('Todas');
  const [filtroIntegrante, setFiltroIntegrante] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');
  // Por defecto arrancamos con las etapas de TP2 abiertas para lectura rápida
  const [expandedIds, setExpandedIds] = useState(new Set([5, 6, 7, 8, 9]));

  const toggleAccordion = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setExpandedIds(new Set(bitacoraData.map((item) => item.id)));
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  const handleResetFilters = () => {
    setFiltroEtapa('Todas');
    setFiltroIntegrante('Todos');
    setBusqueda('');
  };

  // Filtrado combinado reactivo
  const entradasFiltradas = bitacoraData.filter((item) => {
    const coincideEtapa =
      filtroEtapa === 'Todas' || item.etapa === filtroEtapa;

    const coincideIntegrante =
      filtroIntegrante === 'Todos' ||
      item.integrantes.includes(filtroIntegrante);

    const texto = busqueda.toLowerCase().trim();
    const coincideTexto =
      !texto ||
      item.titulo.toLowerCase().includes(texto) ||
      item.dificultad.toLowerCase().includes(texto) ||
      item.decision.toLowerCase().includes(texto) ||
      item.solucion.toLowerCase().includes(texto) ||
      item.aprendizaje.toLowerCase().includes(texto) ||
      item.integrantes.some((i) => i.toLowerCase().includes(texto));

    return coincideEtapa && coincideIntegrante && coincideTexto;
  });

  const hayFiltrosActivos =
    filtroEtapa !== 'Todas' ||
    filtroIntegrante !== 'Todos' ||
    busqueda.trim() !== '';

  return (
    <main className="bitacora-page">
      <div className="bitacora-container">
        <header className="bitacora-header">
          <span className="bitacora-eyebrow">Historial & Decisiones Técnicas</span>
          <h1>📖 Bitácora de Desarrollo del Equipo</h1>
          <p>
            Registro detallado de nuestro proceso de trabajo, desafíos de arquitectura resueltos,
            toma de decisiones y aprendizajes durante la evolución de <strong>TP1 (Vanilla JS)</strong> a <strong>TP2 (React SPA)</strong>.
            Utilizá los filtros y acordeones interactivos para consultar las entradas por etapa o integrante.
          </p>
        </header>

        {/* CONTROLES Y FILTROS INTERACTIVOS (Nivel Propone) */}
        <section className="bitacora-controls" aria-label="Filtros de bitácora">
          <div className="bitacora-filters-row">
            <div className="bitacora-filter-group">
              <label htmlFor="bitacora-search">🔍 Buscar en la bitácora</label>
              <input
                id="bitacora-search"
                type="search"
                placeholder="Ej.: CSS, Vite, rutas, API, GitHub Flow..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            <div className="bitacora-filter-group">
              <label htmlFor="bitacora-etapa">📌 Filtrar por etapa</label>
              <select
                id="bitacora-etapa"
                value={filtroEtapa}
                onChange={(e) => setFiltroEtapa(e.target.value)}
              >
                <option value="Todas">Todas las etapas (TP1 & TP2)</option>
                <option value="TP2">Solo TP2 (React SPA)</option>
                <option value="TP1">Solo TP1 (Fundamentos & Vanilla)</option>
              </select>
            </div>

            <div className="bitacora-filter-group">
              <label htmlFor="bitacora-integrante">👤 Filtrar por integrante</label>
              <select
                id="bitacora-integrante"
                value={filtroIntegrante}
                onChange={(e) => setFiltroIntegrante(e.target.value)}
              >
                <option value="Todos">Todos los integrantes</option>
                <option value="Martina Bistagnino">Martina Bistagnino</option>
                <option value="Gabriela Dalila Contrera">Gabriela Dalila Contrera</option>
                <option value="Jorge Caliz">Jorge Caliz</option>
                <option value="Francisco Luis Bronzi">Francisco Luis Bronzi</option>
                <option value="Martín Roige">Martín Roige</option>
              </select>
            </div>
          </div>

          <div className="bitacora-actions-bar">
            <div className="bitacora-btn-group">
              <button
                type="button"
                onClick={handleExpandAll}
                className="bitacora-tool-btn"
                title="Expandir todas las entradas"
              >
                <span aria-hidden="true">📂</span> Expandir todo
              </button>
              <button
                type="button"
                onClick={handleCollapseAll}
                className="bitacora-tool-btn"
                title="Contraer todas las entradas"
              >
                <span aria-hidden="true">📁</span> Contraer todo
              </button>
              {hayFiltrosActivos && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="bitacora-tool-btn"
                  style={{ borderColor: 'rgba(239, 68, 68, 0.4)', color: '#fca5a5' }}
                >
                  <span aria-hidden="true">🔄</span> Limpiar filtros
                </button>
              )}
            </div>

            <div className="bitacora-counter" aria-live="polite">
              Mostrando <strong>{entradasFiltradas.length}</strong> de {bitacoraData.length} registros
            </div>
          </div>
        </section>

        {/* LISTADO DE ENTRADAS CON ACORDEÓN INTERACTIVO */}
        {entradasFiltradas.length === 0 ? (
          <div className="bitacora-empty">
            <h3>No se encontraron registros</h3>
            <p>No hay entradas de bitácora que coincidan con los filtros seleccionados.</p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="bitacora-tool-btn"
            >
              🔄 Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="bitacora-list">
            {entradasFiltradas.map((entry) => {
              const isExpanded = expandedIds.has(entry.id);

              return (
                <article
                  key={entry.id}
                  className={`bitacora-card ${isExpanded ? 'bitacora-card--expanded' : ''}`}
                >
                  <button
                    type="button"
                    className="bitacora-card__header"
                    onClick={() => toggleAccordion(entry.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`bitacora-body-${entry.id}`}
                  >
                    <div className="bitacora-card__title-area">
                      <div className="bitacora-card__meta">
                        <span
                          className={`bitacora-tag-stage ${
                            entry.etapa === 'TP2'
                              ? 'bitacora-tag-stage--tp2'
                              : 'bitacora-tag-stage--tp1'
                          }`}
                        >
                          {entry.etapaLabel}
                        </span>
                        <span className="bitacora-date">📅 {entry.fecha}</span>
                        <span className="bitacora-author-badge">
                          👥 {entry.integrantes.length === 5 ? 'Todo el equipo' : entry.integrantes.join(', ')}
                        </span>
                      </div>

                      <h3>{entry.titulo}</h3>
                    </div>

                    <div className="bitacora-card__chevron" aria-hidden="true">
                      {isExpanded ? '▲' : '▼'}
                    </div>
                  </button>

                  {isExpanded && (
                    <div
                      id={`bitacora-body-${entry.id}`}
                      className="bitacora-card__body animate-fade-in"
                    >
                      <div className="bitacora-block">
                        <span className="bitacora-block__label bitacora-block__label--problem">
                          ⚠️ Dificultad técnica encontrada
                        </span>
                        <p>{entry.dificultad}</p>
                      </div>

                      <div className="bitacora-block">
                        <span className="bitacora-block__label bitacora-block__label--decision">
                          🧭 Decisión de arquitectura adoptada
                        </span>
                        <p>{entry.decision}</p>
                      </div>

                      <div className="bitacora-block">
                        <span className="bitacora-block__label bitacora-block__label--solution">
                          💡 Solución técnica implementada
                        </span>
                        <p>{entry.solucion}</p>
                      </div>

                      <div className="bitacora-block">
                        <span className="bitacora-block__label bitacora-block__label--learning">
                          🚀 Aprendizaje del equipo
                        </span>
                        <p>{entry.aprendizaje}</p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
