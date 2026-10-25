// src/pages/Perfil.jsx
import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { teamMembers } from '../data/teamData';
import DalilaOS from '../components/profiles/DalilaOS';

// Componentes interactivos individuales
import MartinaCinema from '../components/profiles/MartinaCinema';
import MartinaMusic from '../components/profiles/MartinaMusic';
import MartinaTerminal from '../components/profiles/MartinaTerminal';
import DalilaExplorer from '../components/profiles/DalilaExplorer';
import JorgeConsole from '../components/profiles/JorgeConsole';
import LuisOS from '../components/profiles/LuisOS';
import MartinOS from '../components/profiles/MartinOS';
import MediaFlipCard from '../components/profiles/MediaFlipCard';

const IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';

// Las skills pueden ser strings ("HTML") u objetos ({ name, desc }).
function normalizeSkill(skill) {
  if (typeof skill === 'string') return { name: skill, desc: null };
  return { name: skill?.name ?? '', desc: skill?.desc ?? null };
}

export default function Perfil() {
  const { id } = useParams();
  const [altTheme, setAltTheme] = useState(false);
  const [eclipseMode, setEclipseMode] = useState(false);
  const [openStory, setOpenStory] = useState(null);
  const [infernoMode, setInfernoMode] = useState(false);
  const [infernoFlash, setInfernoFlash] = useState(false);

  // Al cambiar de perfil se reinician los estados propios de cada uno
  useEffect(() => {
    setAltTheme(false);
    setEclipseMode(false);
    setOpenStory(null);
    setInfernoMode(false);
    setInfernoFlash(false);
  }, [id]);

  const memberIndex = teamMembers.findIndex((m) => m.id === id);
  const member = teamMembers[memberIndex];

  if (!member) {
    return <Navigate to="/integrantes" replace />;
  }

  const prevMember = teamMembers[(memberIndex - 1 + teamMembers.length) % teamMembers.length];
  const nextMember = teamMembers[(memberIndex + 1) % teamMembers.length];

  const handleToggleInferno = () => {
    const next = !infernoMode;
    setInfernoMode(next);
    if (next) {
      setInfernoFlash(true);
      setTimeout(() => setInfernoFlash(false), 300);
    }
  };

  return (
    <article
      className={`profile-page ${member.id}-theme ${altTheme ? 'green-mode' : ''} ${eclipseMode ? 'eclipse-mode' : ''} ${infernoMode ? 'inferno-mode' : ''} ${infernoFlash ? 'inferno-flash' : ''}`}
    >
      {/* ============================================================
          HERO DEL PERFIL
      ============================================================ */}
      <section className={`profile-hero ${member.id}-hero`}>
        <div className="profile-decoration profile-decoration--one" aria-hidden="true">
          {member.decorations?.[0] || 'DEV'}
        </div>
        <div className="profile-decoration profile-decoration--two" aria-hidden="true">
          {member.decorations?.[1] || member.number}
        </div>

        <div className="container profile-hero__container">
          <div className="profile-hero__content">
            <span className="profile-number">PERFIL_{member.number}</span>
            <p className="profile-status">
              <span className="profile-status__dot" aria-hidden="true"></span>
              {member.statusText || 'PLAYER 1 READY'}
            </p>
            <h1 className="profile-hero__title">
              {member.name.split(' ')[0]}
              <span>{member.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="profile-hero__role">{member.role}</p>
            <blockquote className="profile-quote">
              “{member.quote || member.bio}”
            </blockquote>

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
                <span>{member.id === 'luis' || member.id === 'martin' ? 'Objetivo' : member.id === 'martina' ? 'Área' : 'Perfil'}</span>
                <strong>{member.area || member.role.split('·')[0].trim()}</strong>
              </div>
            </div>

            <div className="profile-actions">
              <a href="#sobre-mi" className="button button--profile">
                {member.id === 'martin' ? 'Iniciar perfil' : 'Conoceme'}
              </a>

              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--profile-secondary"
                  aria-label={`GitHub de ${member.name}`}
                >
                  GitHub
                </a>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--profile-secondary"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  LinkedIn
                </a>
              )}

              {member.portfolio && (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--profile-secondary"
                  aria-label="Portfolio de Luis"
                >
                  Portfolio
                </a>
              )}

              {member.id === 'dalila' && (
                <button
                  type="button"
                  id="dalilaEclipseToggle"
                  className="button button--profile-secondary"
                  onClick={() => setEclipseMode((prev) => !prev)}
                  aria-pressed={eclipseMode}
                >
                  {eclipseMode ? '☀️ Modo Normal' : '🌘 Modo Eclipse'}
                </button>
              )}
            </div>
          </div>

          <div className="profile-hero__visual">
            <div className="avatar-glow" aria-hidden="true"></div>
            <div className="profile-avatar">
              <img
                src={member.avatar}
                alt={`Avatar de ${member.name}`}
                width="220"
                height="220"
                loading="eager"
              />
            </div>

            {member.id === 'jorge' && (
              <div className="jorge-dragon" aria-hidden="true">🐉</div>
            )}

            {member.tags?.map((tag, idx) => (
              <div
                key={idx}
                className={`avatar-tag avatar-tag--${idx === 0 ? 'html' : idx === 1 ? 'js' : 'css'}`}
                aria-hidden="true"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          01. SOBRE MÍ
      ============================================================ */}
      <section className="profile-section" id="sobre-mi">
        <div className="container">
          <div className="profile-section__heading">
            <span aria-hidden="true">01</span>
            <div>
              <p className="profile-kicker">SOBRE MÍ</p>
              <h2>
                {member.id === 'martina' && 'Código, creatividad y aprendizaje constante.'}
                {member.id === 'dalila' && 'Curiosidad, creatividad y ganas de seguir aprendiendo.'}
                {member.id === 'jorge' && 'Caos, pensamiento y creatividad.'}
                {member.id === 'luis' && 'Experiencia, tecnología y nuevos desafíos.'}
                {member.id === 'martin' && 'De la logística al desarrollo de software.'}
              </h2>
            </div>
          </div>

          <div className="about-profile-grid">
            <article className="about-profile-card about-profile-card--large">
              <span className="card-terminal" aria-hidden="true">
                {member.aboutTerminal || 'profile.txt'}
              </span>
              {member.aboutText && Array.isArray(member.aboutText) ? (
                member.aboutText.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p>{member.bio}</p>
              )}
            </article>

            {member.aboutCards?.map((card, index) => (
              <article key={index} className="about-profile-card">
                <span className="about-card__icon" aria-hidden="true">{card.icon}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          02. HABILIDADES / STACK
      ============================================================ */}
      <section className="profile-section profile-section--alternative" id="habilidades">
        <div className="container">
          <div className="profile-section__heading">
            <span aria-hidden="true">02</span>
            <div>
              <p className="profile-kicker">
                {member.id === 'martin' ? 'PLAYER STACK' : 'HABILIDADES'}
              </p>
              <h2>
                {member.id === 'martin'
                  ? 'Tecnologías desbloqueadas'
                  : member.id === 'luis'
                  ? 'Mi base de desarrollo'
                  : member.id === 'dalila'
                  ? 'Tecnologías y herramientas'
                  : member.id === 'jorge'
                  ? 'Herramientas para crear y resolver'
                  : 'Mi stack y herramientas'}
              </h2>
            </div>
          </div>

          {member.id === 'martin' ? (
            <div className="martin-stack-grid">
              {member.skills?.map((skill, index) => {
                const { name, desc } = normalizeSkill(skill);
                return (
                  <article key={name || index} className="martin-stack-card">
                    <span className="martin-stack-card__level">
                      LV.{String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{name}</h3>
                    <p>{desc ?? 'Especialización dentro del stack de desarrollo.'}</p>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="skills-grid">
              {member.skills?.map((skill, index) => {
                const { name, desc } = normalizeSkill(skill);
                return (
                  <article key={name || index} className="skill-card">
                    <span className="skill-card__number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{name}</h3>
                    <p>{desc ?? 'Especialización técnica y aplicación práctica.'}</p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SOFT SKILLS (Dalila)
      ============================================================ */}
      {member.softSkills && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">03</span>
              <div>
                <p className="profile-kicker">SOFT SKILLS</p>
                <h2>Más allá de las tecnologías</h2>
              </div>
            </div>
            <div className="interests-grid">
              {member.softSkills.map((item, index) => (
                <article key={index} className="interest-card">
                  <span aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SIDE QUESTS (Martín)
      ============================================================ */}
      {member.sidequests && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">03</span>
              <div>
                <p className="profile-kicker">SIDE QUESTS</p>
                <h2>Más experiencia tecnológica</h2>
              </div>
            </div>
            <div className="martin-sidequests">
              {member.sidequests.map((item, index) => (
                <article key={index}>
                  <span aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          EXPERIENCIA (Luis)
      ============================================================ */}
      {member.experience && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">03</span>
              <div>
                <p className="profile-kicker">EXPERIENCIA</p>
                <h2>Tecnología desde diferentes lugares</h2>
              </div>
            </div>
            <div className="luis-experience-grid">
              {member.experience.map((item, index) => (
                <article key={index}>
                  <span aria-hidden="true">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PERSONALIDAD (Jorge)
      ============================================================ */}
      {member.id === 'jorge' && member.personality && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">03</span>
              <div>
                <p className="profile-kicker">PERSONALIDAD</p>
                <h2>Creativo. Curioso. Pensativo.</h2>
              </div>
            </div>
            <div className="jorge-personality">
              {member.personality.map((item, index) => (
                <article key={index}>
                  <span aria-hidden="true">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FAVORITOS / CINE / HISTORIAS
      ============================================================ */}
      <section className="profile-section profile-section--alternative" id="favoritos">
        <div className="container">
          <div className="profile-section__heading">
            <span aria-hidden="true">{member.id === 'martina' ? '03' : '04'}</span>
            <div>
              <p className="profile-kicker">
                {member.id === 'martina'
                  ? 'FAVORITOS'
                  : member.id === 'martin'
                  ? 'WATCH LIST'
                  : member.id === 'luis'
                  ? 'CINE'
                  : member.id === 'jorge'
                  ? 'HISTORIAS'
                  : 'PELÍCULAS & SERIES'}
              </p>
              <h2>
                {member.id === 'martina'
                  ? 'Cine, series y música'
                  : member.id === 'martin'
                  ? 'Tres historias favoritas'
                  : member.id === 'luis'
                  ? 'Historias que dejan algo'
                  : member.id === 'jorge'
                  ? 'Películas, anime y mundos'
                  : 'Historias que disfruto'}
              </h2>
            </div>
          </div>

          {member.id === 'martina' && (
            <div className="favorites-layout">
              <MartinaCinema />
              <MartinaMusic />
            </div>
          )}

          {member.id === 'martin' && member.stories && (
            <div className="martin-media-grid">
              {member.stories.map((story, index) => (
                <MediaFlipCard
                  key={index}
                  number={story.number}
                  type={story.type}
                  title={story.title}
                  description={story.description}
                  videoUrl={story.videoUrl}
                  isFlipped={openStory === index}
                  onOpen={() => setOpenStory(index)}
                  onClose={() => setOpenStory(null)}
                />
              ))}
            </div>
          )}

          {member.id === 'dalila' && member.movies && (
            <>
              <div className="dalila-movies-grid">
                {member.movies.map((item, index) => (
                  <article key={index} className="dalila-movie-card">
                    <span className="favorite-card__number">{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <iframe
                      width="560"
                      height="315"
                      src={item.video}
                      title={`Video de ${item.title}`}
                      loading="lazy"
                      allow={IFRAME_ALLOW}
                      allowFullScreen
                    />
                  </article>
                ))}
              </div>

              {member.music && (
                <div className="dalila-albums-grid" style={{ marginTop: '2rem' }}>
                  {member.music.map((item, index) => (
                    <article key={index} className="dalila-movie-card">
                      <span className="favorite-card__number">{item.number}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <iframe
                        width="560"
                        height="315"
                        src={item.video}
                        title={`Música ${item.title}`}
                        loading="lazy"
                        allow={IFRAME_ALLOW}
                        allowFullScreen
                      />
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {member.id === 'jorge' && member.movies && (
            <div className="jorge-media-grid">
              {member.movies.map((item, index) => (
                <article key={index} className="jorge-media-card">
                  <span className="favorite-card__number" aria-hidden="true">{item.number}</span>
                  <span className="jorge-media-card__type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          )}

          {member.id === 'luis' && member.movies && (
            <div className="luis-movies-grid">
              {member.movies.map((item, index) => (
                <article key={index} className="luis-movie-card">
                  <span aria-hidden="true">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          MÚSICA SEPARADA (Martín, Jorge, Luis)
      ============================================================ */}
      {member.id === 'martin' && member.musicTracks && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">05</span>
              <div>
                <p className="profile-kicker">NOW PLAYING</p>
                <h2>Mi selección musical</h2>
              </div>
            </div>
            <div className="martin-music-grid">
              {member.musicTracks.map((track, idx) => (
                <article key={idx} className="martin-track">
                  <div className="martin-track__cover">{track.letter}</div>
                  <div>
                    <span>{track.artist}</span>
                    <h3>{track.title}</h3>
                  </div>
                  <iframe
                    width="280"
                    height="157"
                    src={track.url}
                    title={track.title}
                    loading="lazy"
                    allow={IFRAME_ALLOW}
                    allowFullScreen
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {member.id === 'jorge' && member.music && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">05</span>
              <div>
                <p className="profile-kicker">MÚSICA</p>
                <h2>Tres discos, tres universos</h2>
              </div>
            </div>
            <div className="jorge-albums-grid">
              {member.music.map((item, index) => (
                <article key={index} className="jorge-album-card">
                  <span aria-hidden="true">{item.number}</span>
                  <div>
                    <p>{item.artist}</p>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {member.id === 'luis' && member.music && (
        <section className="profile-section">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">05</span>
              <div>
                <p className="profile-kicker">NOW PLAYING</p>
                <h2>Mi selección musical</h2>
              </div>
            </div>
            <div className="luis-music-grid">
              {member.music.map((item, index) => (
                <article key={index} className="luis-record">
                  <div className="luis-record__disc">
                    {item.disc || String(item.artist ?? '').charAt(0)}
                  </div>
                  <div>
                    <span>{item.artist}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="luis-video-container">
                    <iframe
                      width="280"
                      height="157"
                      src={item.video}
                      title={item.title}
                      loading="lazy"
                      allow={IFRAME_ALLOW}
                      allowFullScreen
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          PERSONALIDAD / STATS (Luis y Martín)
      ============================================================ */}
      {member.id === 'luis' && member.personality && (
        <section className="profile-section profile-section--alternative">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">06</span>
              <div>
                <p className="profile-kicker">PERSONALIDAD</p>
                <h2>Cinco rasgos que me representan</h2>
              </div>
            </div>
            <div className="luis-personality">
              {member.personality.map((item, index) => (
                <article key={index}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {member.id === 'martin' && member.personality && (
        <section className="profile-section profile-section--alternative">
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">06</span>
              <div>
                <p className="profile-kicker">PLAYER STATS</p>
                <h2>Cinco características</h2>
              </div>
            </div>
            <div className="martin-stats">
              {member.personality.map((item, index) => (
                <article key={index}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FUERA DEL CÓDIGO / INTERESES
      ============================================================ */}
      {member.interests && (
        <section
          className={`profile-section ${member.id === 'martina' || member.id === 'jorge' ? 'profile-section--alternative' : ''}`}
          id="intereses"
        >
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">
                {member.id === 'martina' ? '04' : member.id === 'dalila' ? '05' : member.id === 'jorge' ? '06' : '07'}
              </span>
              <div>
                <p className="profile-kicker">FUERA DEL CÓDIGO</p>
                <h2>
                  {member.id === 'martina'
                    ? 'También soy esto'
                    : member.id === 'dalila'
                    ? 'Mis otros mundos'
                    : member.id === 'jorge'
                    ? 'Mis otros intereses'
                    : member.id === 'luis'
                    ? 'Ademas de tecnología - esparcimiento'
                    : 'Cuando cierro el editor'}
                </h2>
              </div>
            </div>
            <div className="interests-grid">
              {member.interests.map((item, index) => (
                <article key={index} className="interest-card">
                  <span aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          DATOS EXTRA / RANDOM (Jorge, Luis, Martín)
      ============================================================ */}
      {member.facts && (
        <section className={`profile-section ${member.id === 'martin' || member.id === 'luis' ? 'profile-section--alternative' : ''}`}>
          <div className="container">
            <div className="profile-section__heading">
              <span aria-hidden="true">{member.id === 'jorge' ? '07' : '08'}</span>
              <div>
                <p className="profile-kicker">
                  {member.id === 'martin' ? 'BONUS LEVEL' : member.id === 'jorge' ? 'DATOS RANDOM' : 'DETALLES'}
                </p>
                <h2>
                  {member.id === 'martin'
                    ? 'Datos desbloqueados'
                    : member.id === 'jorge'
                    ? 'Algunas cosas sobre mí'
                    : 'Algunos datos sobre mí'}
                </h2>
              </div>
            </div>

            {member.id === 'jorge' ? (
              <div className="jorge-facts">
                {member.facts.map((item, index) => (
                  <article key={index}>
                    <span aria-hidden="true">{item.icon}</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            ) : member.id === 'luis' ? (
              <div className="luis-facts">
                {member.facts.map((item, index) => (
                  <article key={index}>
                    <span aria-hidden="true">{item.icon?.trim()}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="martin-facts">
                {member.facts.map((item, index) => (
                  <article key={index}>
                    <span aria-hidden="true">{item.icon}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============================================================
          INTERACCIÓN DINÁMICA / JAVASCRIPT
      ============================================================ */}
      <section
        className={`profile-section ${member.id === 'dalila' || member.id === 'jorge' ? 'profile-section--alternative' : ''}`}
        id="interactivo"
      >
        <div className="container">
          <div className="profile-section__heading">
            <span aria-hidden="true">
              {member.id === 'martina' ? '05' : member.id === 'dalila' ? '06' : member.id === 'jorge' ? '08' : '09'}
            </span>
            <div>
              <p className="profile-kicker">
                {member.id === 'martin'
                  ? 'SYSTEM CONSOLE'
                  : member.id === 'jorge'
                  ? 'CYBER CONSOLE'
                  : member.id === 'luis'
                  ? 'VINTAGE PLAYER'
                  : 'JAVASCRIPT'}
              </p>
              <h2>
                {member.id === 'martin'
                  ? 'Ejecutá el sistema'
                  : member.id === 'jorge'
                  ? 'Ejecutá un comando'
                  : member.id === 'dalila'
                  ? 'Explorá mis curiosidades'
                  : member.id === 'luis'
                  ? 'Explorá mis favoritos'
                  : 'Explorá mi perfil'}
              </h2>
            </div>
          </div>

          {member.id === 'martina' && (
            <>
              <div className="martina-live-grid" style={{ marginBottom: '2rem' }}>
                <article className="martina-live-card">
                  <span className="martina-live-card__label">CURRENT_STACK</span>
                  <strong>HTML · CSS · JavaScript</strong>
                  <p>Tecnologías principales que estoy trabajando.</p>
                </article>
                <article className="martina-live-card">
                  <span className="martina-live-card__label">CURRENT_INTEREST</span>
                  <strong>Psicología 🧠</strong>
                  <p>Actualmente me interesa profundizar en este tema.</p>
                </article>
              </div>
              <MartinaTerminal />
            </>
          )}


          {member.id === 'dalila' && (
          <DalilaOS onToggleTheme={() => setEclipseMode((prev) => !prev)} />
          )}
          {member.id === 'jorge' && <JorgeConsole />}

         

          {member.id === 'jorge' && (
            <JorgeConsole
              isInfernoMode={infernoMode}
              onToggleInferno={handleToggleInferno}
            />
          )}

 
          {member.id === 'luis' && <LuisOS onToggleTheme={() => setAltTheme((prev) => !prev)} />}
          
          {member.id === 'martin' && (
            <MartinOS
              isGreenMode={altTheme}
              onToggleTheme={() => setAltTheme((prev) => !prev)}
            />
          )}
        </div>
      </section>

      {/* ============================================================
          BARRA DE NAVEGACIÓN INFERIOR
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