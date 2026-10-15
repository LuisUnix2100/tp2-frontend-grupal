function GithubCard({ user, onRefresh }) {
  return (
    <article className="github-card">
      <img
        src={user.avatar_url}
        alt={`Avatar de ${user.name || user.login}`}
        className="github-avatar"
      />

      <div className="github-card__content">
        <h2>{user.name || user.login}</h2>

        <p className="github-username">
          @{user.login}
        </p>

        {user.bio && (
          <p className="github-bio">
            {user.bio}
          </p>
        )}

        <div className="github-stats">
          <div className="github-stat">
            <span className="github-stat__value">
              {user.public_repos}
            </span>
            <span className="github-stat__label">
              Repositorios
            </span>
          </div>

          <div className="github-stat">
            <span className="github-stat__value">
              {user.followers}
            </span>
            <span className="github-stat__label">
              Seguidores
            </span>
          </div>

          <div className="github-stat">
            <span className="github-stat__value">
              {user.following}
            </span>
            <span className="github-stat__label">
              Siguiendo
            </span>
          </div>
        </div>

        <div className="github-details">
          {user.location && (
            <p>
              <strong>Ubicación:</strong> {user.location}
            </p>
          )}

          <p>
            <strong>Cuenta creada:</strong>{" "}
            {new Date(user.created_at).toLocaleDateString("es-AR")}
          </p>
        </div>

        <div className="github-actions">
        <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
        >
            Ver perfil en GitHub
        </a>

        <button
            type="button"
            onClick={onRefresh}
            className="github-refresh-button"
        >
            Actualizar datos
        </button>
        </div>
      </div>
    </article>
  );
}

export default GithubCard;