import { useState } from 'react';
import '../styles/arbol.css';

const treeData = {
  id: 'app',
  name: '<App />',
  badge: 'Root',
  type: 'root',
  path: 'src/App.jsx',
  description: 'Componente raíz que inicializa el enrutador y la estructura global SPA',
  children: [
    {
      id: 'browser-router',
      name: '<BrowserRouter />',
      badge: 'Router',
      type: 'router',
      path: 'react-router-dom',
      description: 'Proveedor de contexto de navegación HTML5 History API',
      children: [
        {
          id: 'scroll-to-top',
          name: '<ScrollToTop />',
          badge: 'Efecto',
          type: 'component',
          path: 'src/components/ScrollToTop.jsx',
          description: 'Efecto de scroll suave al tope de página ante cambios de ruta'
        },
        {
          id: 'routes',
          name: '<Routes />',
          badge: 'Router',
          type: 'router',
          path: 'react-router-dom',
          description: 'Manejador declarativo de rutas de la aplicación',
          children: [
            {
              id: 'layout-route',
              name: '<Route element={<Layout />} />',
              badge: 'Layout',
              type: 'layout',
              path: 'src/components/Layout.jsx',
              description: 'Plantilla compartida persistente con menú lateral y contenedor dinámico',
              children: [
                {
                  id: 'sidebar',
                  name: '<Sidebar />',
                  badge: 'UI Shared',
                  type: 'component',
                  path: 'src/components/Sidebar.jsx',
                  description: 'Sidebar compartida fija con identidad del equipo, botones neón y estado activo',
                  children: [
                    {
                      id: 'nav-links',
                      name: '<NavLink /> (x6 enlaces)',
                      badge: 'Navegación',
                      type: 'component',
                      path: 'react-router-dom',
                      description: 'Enlaces activos: Inicio, Integrantes, Recursos, API, Árbol y Bitácora'
                    }
                  ]
                },
                {
                  id: 'outlet',
                  name: '<Main /> / <Outlet />',
                  badge: 'Outlet',
                  type: 'layout',
                  path: 'react-router-dom',
                  description: 'Espacio de renderizado dinámico de la página según la URL activa',
                  children: [
                    {
                      id: 'page-home',
                      name: '<Home />',
                      badge: 'Página',
                      type: 'page',
                      path: 'src/pages/Home.jsx ( / )',
                      description: 'Portada interactiva con identidad del equipo, avatares y accesos directos'
                    },
                    {
                      id: 'page-integrantes',
                      name: '<Integrantes />',
                      badge: 'Página',
                      type: 'page',
                      path: 'src/pages/Integrantes.jsx ( /integrantes )',
                      description: 'Listado dinámico del equipo que mapea y renderiza las tarjetas de los 5 integrantes',
                      children: [
                        {
                          id: 'member-card',
                          name: '<MemberCard /> (x5 instancias)',
                          badge: 'Componente UI',
                          type: 'component',
                          path: 'src/components/MemberCard.jsx',
                          description: 'Props: { member } — Reutilización con datos de Martina, Dalila, Jorge, Luis y Martín'
                        }
                      ]
                    },
                    {
                      id: 'page-perfil',
                      name: '<Perfil />',
                      badge: 'Página Dinámica',
                      type: 'page',
                      path: 'src/pages/Perfil.jsx ( /integrantes/:id )',
                      description: 'Vista individual que captura el parámetro :id mediante useParams y despliega módulos',
                      children: [
                        {
                          id: 'media-flip-card',
                          name: '<MediaFlipCard />',
                          badge: 'Módulo 3D',
                          type: 'interactive',
                          path: 'src/components/profiles/MediaFlipCard.jsx',
                          description: 'Props: { trailerUrl, title, ... } — Efecto 3D interactivo con trailer y multimedia'
                        },
                        {
                          id: 'martina-modules',
                          name: '<MartinaTerminal /> / <MartinaCinema /> / <MartinaMusic />',
                          badge: 'Interactivo',
                          type: 'interactive',
                          path: 'src/components/profiles/Martina*.jsx',
                          description: 'Terminal JS interactiva con comandos reales, reproductor y cartelera'
                        },
                        {
                          id: 'dalila-modules',
                          name: '<DalilaExplorer /> & <DalilaOS />',
                          badge: 'Interactivo',
                          type: 'interactive',
                          path: 'src/components/profiles/Dalila*.jsx',
                          description: 'Explorador de curiosidades y sección interactiva de Carmelucha'
                        },
                        {
                          id: 'jorge-modules',
                          name: '<JorgeConsole /> & <JorgeGame />',
                          badge: 'Interactivo',
                          type: 'interactive',
                          path: 'src/components/profiles/Jorge*.jsx',
                          description: 'Cyber Console con emulación Python, selector de modo Inferno y juegos'
                        },
                        {
                          id: 'luis-modules',
                          name: '<LuisOS />',
                          badge: 'Interactivo',
                          type: 'interactive',
                          path: 'src/components/profiles/LuisOS.jsx',
                          description: 'Reproductor retro vintage de audio y consola interactiva de sistema'
                        },
                        {
                          id: 'martin-modules',
                          name: '<MartinOS />',
                          badge: 'Interactivo',
                          type: 'interactive',
                          path: 'src/components/profiles/MartinOS.jsx',
                          description: 'Retro Terminal 8-bit con comandos de ayuda, switch de Modo Verde y sonido'
                        }
                      ]
                    },
                    {
                      id: 'page-recursos',
                      name: '<Recursos />',
                      badge: 'Página',
                      type: 'page',
                      path: 'src/pages/Recursos.jsx ( /recursos )',
                      description: 'Catálogo de tecnologías y herramientas alimentado por archivo JSON con 20 registros',
                      children: [
                        {
                          id: 'search-bar',
                          name: '<SearchBar />',
                          badge: 'Componente UI',
                          type: 'component',
                          path: 'src/components/SearchBar.jsx',
                          description: 'Búsqueda por texto libre, selector de categorías y botón de restablecer filtros'
                        },
                        {
                          id: 'resource-card',
                          name: '<ResourceCard /> (x20 instancias)',
                          badge: 'Componente UI',
                          type: 'interactive',
                          path: 'src/components/ResourceCard.jsx',
                          description: 'Props: { recurso } — Tarjeta interactiva con acordeón desplegable de detalles técnicos y links'
                        }
                      ]
                    },
                    {
                      id: 'page-api',
                      name: '<Api />',
                      badge: 'Página',
                      type: 'page',
                      path: 'src/pages/Api.jsx ( /api )',
                      description: 'Consumo asíncrono de GitHub API con 3 estados visuales: Cargando, Éxito y Error',
                      children: [
                        {
                          id: 'github-selector',
                          name: '<GithubSelector />',
                          badge: 'Componente UI',
                          type: 'component',
                          path: 'src/components/github/GithubSelector.jsx',
                          description: 'Props: { users, selectedUser, onChange } — Selector reactivo de integrantes'
                        },
                        {
                          id: 'github-card',
                          name: '<GithubCard />',
                          badge: 'Componente UI',
                          type: 'interactive',
                          path: 'src/components/github/GithubCard.jsx',
                          description: 'Props: { user, onRefresh } — Renderizado de datos, métricas y botón Actualizar'
                        }
                      ]
                    },
                    {
                      id: 'page-arbol',
                      name: '<Arbol />',
                      badge: 'Página',
                      type: 'page',
                      path: 'src/pages/Arbol.jsx ( /arbol )',
                      description: 'Vista interactiva del árbol de renderizado de la aplicación con ramas colapsables'
                    },
                    {
                      id: 'page-bitacora',
                      name: '<Bitacora />',
                      badge: 'Página',
                      type: 'page',
                      path: 'src/pages/Bitacora.jsx ( /bitacora )',
                      description: 'Registro histórico colaborativo con filtros reactivos por autor/etapa y acordeones desplegables'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function getAllIds(node) {
  let ids = [node.id];
  if (node.children) {
    node.children.forEach((child) => {
      ids = ids.concat(getAllIds(child));
    });
  }
  return ids;
}

function TreeNode({ node, openNodes, toggleNode }) {
  const hasChildren = node.children && node.children.length > 0;
  const isOpen = openNodes.has(node.id);

  const getBadgeClass = (type) => {
    switch (type) {
      case 'root':
        return 'arbol-badge--root';
      case 'router':
        return 'arbol-badge--router';
      case 'layout':
        return 'arbol-badge--layout';
      case 'page':
        return 'arbol-badge--page';
      case 'interactive':
        return 'arbol-badge--interactive';
      default:
        return 'arbol-badge--component';
    }
  };

  return (
    <div className="arbol-node">
      <div
        className={`arbol-node__row ${hasChildren ? 'arbol-node__row--clickable' : ''}`}
        onClick={() => hasChildren && toggleNode(node.id)}
        role={hasChildren ? 'button' : undefined}
        aria-expanded={hasChildren ? isOpen : undefined}
        tabIndex={hasChildren ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasChildren && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            toggleNode(node.id);
          }
        }}
      >
        <span
          className={`arbol-node__toggle ${!hasChildren ? 'arbol-node__toggle--empty' : ''}`}
        >
          {hasChildren ? (isOpen ? '▼' : '▶') : '•'}
        </span>

        <span className={`arbol-badge ${getBadgeClass(node.type)}`}>
          {node.badge}
        </span>

        <span className="arbol-node__name">{node.name}</span>

        {node.path && (
          <span className="arbol-node__path">[{node.path}]</span>
        )}

        {node.description && (
          <span className="arbol-node__desc">{node.description}</span>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="arbol-node__children animate-fade-in">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              openNodes={openNodes}
              toggleNode={toggleNode}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Arbol() {
  const allIds = getAllIds(treeData);
  // Por defecto arrancamos con los niveles principales abiertos
  const [openNodes, setOpenNodes] = useState(
    new Set(['app', 'browser-router', 'routes', 'layout-route', 'outlet'])
  );

  const toggleNode = (id) => {
    setOpenNodes((prev) => {
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
    setOpenNodes(new Set(allIds));
  };

  const handleCollapseAll = () => {
    setOpenNodes(new Set());
  };

  return (
    <main className="arbol-page">
      <div className="arbol-container">
        <header className="arbol-header">
          <span className="arbol-eyebrow">Arquitectura & Renderizado</span>
          <h1>🌳 Árbol Interactivo de Componentes</h1>
          <p>
            Representación fiel de la jerarquía real de componentes de nuestra SPA
            (<code>App &rarr; BrowserRouter &rarr; Layout &rarr; Sidebar + Main / Outlet &rarr; Páginas &rarr; Componentes hijos</code>).
            Hacé clic en cualquier nodo para expandir o contraer sus ramas y explorar las props, roles y dependencias.
          </p>
        </header>

        <div className="arbol-toolbar">
          <div className="arbol-toolbar__actions">
            <button
              type="button"
              onClick={handleExpandAll}
              className="arbol-btn"
            >
              <span aria-hidden="true">📂</span> Expandir todo el árbol
            </button>
            <button
              type="button"
              onClick={handleCollapseAll}
              className="arbol-btn"
            >
              <span aria-hidden="true">📁</span> Contraer todo
            </button>
          </div>

          <div className="arbol-stats">
            Nodos abiertos: <strong>{openNodes.size}</strong> de {allIds.length}
          </div>
        </div>

        <div className="arbol-legend">
          <span className="arbol-legend-title">Categorías:</span>
          <span className="arbol-badge arbol-badge--root">Root</span>
          <span className="arbol-badge arbol-badge--router">Router</span>
          <span className="arbol-badge arbol-badge--layout">Layout</span>
          <span className="arbol-badge arbol-badge--page">Página</span>
          <span className="arbol-badge arbol-badge--component">Componente UI</span>
          <span className="arbol-badge arbol-badge--interactive">Módulo Interactivo</span>
        </div>

        <div className="arbol-tree-wrapper">
          <TreeNode
            node={treeData}
            openNodes={openNodes}
            toggleNode={toggleNode}
          />
        </div>
      </div>
    </main>
  );
}
