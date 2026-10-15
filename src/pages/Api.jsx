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
          API PÚBLICA
        </span>

        <h1>GitHub del equipo</h1>

        <p>
          Esta sección utiliza la API REST pública de GitHub para
          consultar información actualizada de los perfiles de los
          integrantes del equipo.
        </p>
      </header>

      <GithubSelector
        users={githubUsers}
        selectedUser={selectedUser}
        onChange={handleUserChange}
      />

      <section
        className="github-result"
        aria-live="polite"
      >
        {loading && (
          <div className="github-status github-status--loading">
            <p>Consultando GitHub...</p>
            <span>Cargando información del perfil.</span>
          </div>
        )}

        {!loading && error && (
          <div className="github-status github-status--error">
            <h2>No pudimos cargar el perfil</h2>

            <p>{error}</p>

            <button
              type="button"
              onClick={handleRefresh}
              className="github-retry-button"
            >
              Reintentar
            </button>
          </div>
        )}

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