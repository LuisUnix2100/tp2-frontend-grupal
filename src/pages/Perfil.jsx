// src/pages/Perfil.jsx
import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
import MartinOS from '../components/profiles/MartinOS';

export default function Perfil() {
  const { id } = useParams();
  const [altTheme, setAltTheme] = useState(false);

  // Buscar el integrante según el id en la URL (/integrantes/:id)
  const memberIndex = teamMembers.findIndex((m) => m.id === id);
  const member = teamMembers[memberIndex];

  // Si la ruta no coincide con ningún integrante, redirige al listado
  if (!member) {
    return <Navigate to="/integrantes" replace />;
  }

  // Navegación cíclica entre perfiles (anterior y siguiente)
  const prevMember = teamMembers[(memberIndex - 1 + teamMembers.length) % teamMembers.length];
  const nextMember = teamMembers[(memberIndex + 1) % teamMembers.length];

  return (
    <article className={`profile-page ${member.id}-theme ${altTheme ? 'green-mode' : ''}`}>
      {/* ============================================================
          HERO DEL PERFIL
      ============================================================ */}
      <section className="profile-hero">
        <div className="profile-decoration profile-decoration--one" aria-hidden="true">
          8BIT
        </div>
        <div className="profile-decoration profile-decoration--two" aria-hidden="true">
          {member.number}
        </div>

        <div className="container profile-hero__container">
          {/* INFORMACIÓN PRINCIPAL */}
          <div className="profile-hero__content">
            <span className="profile-number">PERFIL_{member.number}</span>
            <p className="profile-status">
              <span className="profile-status__dot"></span> PLAYER 1 READY
            </p>
            <h1 className="profile-hero__title">
              {member.name.split(' ')[0]}
              <span>{member.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="profile-hero__role">{member.role}</p>
            <blockquote className="profile-quote">
              “{member.bio}”
            </blockquote>

            {/* METADATOS */}
            <div className="profile-meta">
              <div className="profile-meta__item">
                <span>Edad</span>
                <strong>{member.age}</strong>
              </div>
              <div className="profile-meta__item">
                <span>Ubicación</span>
                <strong>{member.location}</strong>
              </div>
              <div className="profile-meta__item">
                <span>Objetivo</span>
                <strong>Fullstack Developer</strong>
              </div>
            </div>

            {/* BOTONES DE ACCIÓN */}
            <div className="profile-actions">
              <a href="#habilidades" className="button button--profile">
                Ver Stack
              </a>
              <Link to="/integrantes" className="button button--profile-secondary">
                Volver al equipo
              </Link>
            </div>
          </div>

          {/* AVATAR Y TAGS */}
          <div className="profile-hero__visual">
            <div className="avatar-glow"></div>
            <div className="profile-avatar">
              <img 
                src={member.avatar} 
                alt={`Avatar de ${member.name}`} 
                width="220" 
                height="220" 
                loading="eager"
              />
            </div>
            {member.skills[0] && (
              <div className="avatar-tag avatar-tag--html">{member.skills[0]}</div>
            )}
            {member.skills[1] && (
              <div className="avatar-tag avatar-tag--js">{member.skills[1]}</div>
            )}
            {member.skills[2] && (
              <div className="avatar-tag avatar-tag--css">{member.skills[2]}</div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECCIÓN HABILIDADES (PLAYER STACK)
      ============================================================ */}
      <section className="profile-section" id="habilidades">
        <div className="container">
          <div className="profile-section__heading">
            <span>01</span>
            <div>
              <p className="profile-kicker">PLAYER STACK</p>
              <h2>Tecnologías y herramientas</h2>
            </div>
          </div>

          <div className="martin-stack-grid">
            {member.skills.map((skill, index) => (
              <article key={index} className="martin-stack-card">
                <span className="martin-stack-card__level">
                  LV.{String(index + 1).padStart(2, '0')}
                </span>
                <h3>{skill}</h3>
                <p>Especialización técnica dentro del stack de desarrollo.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECCIÓN INTERACTIVIDAD DINÁMICA
      ============================================================ */}
      <section className="profile-section profile-section--alternative" id="interactivo">
        <div className="container">
          <div className="profile-section__heading">
            <span>02</span>
            <div>
              <p className="profile-kicker">SYSTEM CONSOLE</p>
              <h2>Interacción dinámica en React</h2>
            </div>
          </div>

          {member.id === 'martin' ? (
            <MartinOS onToggleTheme={() => setAltTheme((prev) => !prev)} />
          ) : (
            <div className="martin-console">
              <div className="martin-console__header">
                <span>●</span>
                <p>{member.id}@equipo:~$</p>
                <span className="martin-console__status">STANDBY</span>
              </div>
              <div className="martin-console__screen">
                <p>&gt; Inicializando componente individual...</p>
                <p>Interacción personalizada de {member.name} lista para integrar.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECCIÓN FAVORITOS (PELÍCULAS Y MÚSICA)
      ============================================================ */}
      <section className="profile-section" id="favoritos">
        <div className="container">
          <div className="profile-section__heading">
            <span>03</span>
            <div>
              <p className="profile-kicker">FAVORITOS</p>
              <h2>Historias y música preferida</h2>
            </div>
          </div>

          <div className="martin-media-grid">
            {member.movies?.map((movie, index) => (
              <article key={index} className="martin-media-card">
                <span className="martin-media-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="martin-media-card__type">HISTORIA</span>
                <h3>{movie}</h3>
                <p>Selección destacada en la watchlist personal.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BARRA DE NAVEGACIÓN INFERIOR ENTRE PERFILES
      ============================================================ */}
      <nav className="profile-navigation" aria-label="Navegación entre perfiles">
        <div className="container profile-navigation__container">
          <Link 
            to={`/integrantes/${prevMember.id}`} 
            aria-label={`Ir al perfil anterior: ${prevMember.name}`}
          >
            <span aria-hidden="true">←</span> {prevMember.name.split(' ')[0]}
          </Link>

          <Link to="/integrantes" className="profile-back">
            Volver al listado
          </Link>

          <span>Perfil {member.number} / 05</span>

          <Link 
            to={`/integrantes/${nextMember.id}`} 
            aria-label={`Ir al siguiente perfil: ${nextMember.name}`}
          >
            {nextMember.name.split(' ')[0]} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}