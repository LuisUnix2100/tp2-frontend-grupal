import { useEffect, useState } from "react";

import GithubCard from "../components/github/GithubCard";
import GithubSelector from "../components/github/GithubSelector";
import { githubUsers } from "../data/githubUsers";
import { getGithubUser } from "../services/githubApi";

import "../styles/api.css";

function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message;
  }

  return "Ocurrió un error al consultar GitHub.";
}

function Api() {
  const [selectedUser, setSelectedUser] = useState(
    githubUsers[0].username
  );

  const [githubUser, setGithubUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchGithubUser() {
      try {
        const data = await getGithubUser(selectedUser);

        if (!cancelled) {
          setGithubUser(data);
          setError("");
        }
      } catch (err) {
        if (!cancelled) {
          setGithubUser(null);
          setError(getErrorMessage(err));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchGithubUser();

    return () => {
      cancelled = true;
    };
  }, [selectedUser]);

  function handleUserChange(username) {
    setLoading(true);
    setError("");
    setGithubUser(null);
    setSelectedUser(username);
  }

  async function handleRefresh() {
    setLoading(true);
    setError("");

    try {
      const data = await getGithubUser(selectedUser);
      setGithubUser(data);
      setError("");
    } catch (err) {
      setGithubUser(null);
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="github-page">
      <header className="github-page__header">
        <span className="github-page__eyebrow">
          API PÚBLICA & ESTADOS
        </span>

        <h1>GitHub del equipo</h1>

        <p>
          Esta sección consume la API REST pública de GitHub para obtener métricas,
          repositorios públicos y estadísticas actualizadas de los integrantes.
          Implementa control asíncrono y los tres estados visuales requeridos:
          <strong> Cargando</strong>, <strong>Éxito</strong> y <strong>Error</strong> con opción de reintento.
        </p>
      </header>

      <div className="github-state-bar">
        {loading && (
          <span className="github-state-badge github-state-badge--loading">
            <span aria-hidden="true">⏳</span> Estado: Cargando datos...
          </span>
        )}

        {!loading && !error && githubUser && (
          <span className="github-state-badge github-state-badge--success">
            <span aria-hidden="true">✅</span> Estado: Datos cargados con éxito
          </span>
        )}

        {!loading && error && (
          <span className="github-state-badge github-state-badge--error">
            <span aria-hidden="true">⚠️</span> Estado: Error al consultar API
          </span>
        )}

        <button
          type="button"
          onClick={handleRefresh}
          disabled={loading}
          className="github-refresh-button"
          style={{ marginTop: 0 }}
        >
          {loading ? "Actualizando..." : "🔄 Actualizar datos"}
        </button>
      </div>

      <GithubSelector
        users={githubUsers}
        selectedUser={selectedUser}
        onChange={handleUserChange}
      />

      <section
        className="github-result"
        aria-live="polite"
      >
        {/* ESTADO 1: CARGANDO */}
        {loading && (
          <div className="github-status github-status--loading">
            <div className="github-spinner" aria-hidden="true"></div>
            <p>Consultando la API pública de GitHub...</p>
            <span>Obteniendo repositorios, biografía y seguidores en tiempo real.</span>
          </div>
        )}

        {/* ESTADO 2: ERROR */}
        {!loading && error && (
          <div className="github-status github-status--error">
            <div className="github-status__icon" aria-hidden="true">⚠️</div>
            <h2>No pudimos cargar el perfil</h2>
            <p>{error}</p>
            <button
              type="button"
              onClick={handleRefresh}
              className="github-retry-button"
            >
              🔄 Reintentar
            </button>
          </div>
        )}

        {/* ESTADO 3: ÉXITO */}
        {!loading && !error && githubUser && (
          <GithubCard
            user={githubUser}
            onRefresh={handleRefresh}
          />
        )}
      </section>
    </main>
  );
}

export default Api;
