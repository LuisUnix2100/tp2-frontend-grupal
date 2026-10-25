// src/components/MemberCard.jsx
import { Link } from 'react-router-dom';

// Las skills pueden ser strings ("HTML") u objetos ({ name, desc }).
// Devuelve siempre el nombre como string para no renderizar un objeto.
const getSkillName = (skill) => (typeof skill === 'string' ? skill : skill?.name ?? '');

export default function MemberCard({ member }) {
  return (
    <article className="member-card">
      <div className="member-card__avatar">
        <img
          src={member.avatar}
          alt={`Fotografía de ${member.name}`}
          loading="lazy"
          width="160"
          height="160"
        />
      </div>

      <div className="member-card__content">
        <span className="member-card__number">{member.number}</span>
        <h3>{member.name}</h3>
        <p>{member.role}</p>

        <div className="member-card__skills">
          {member.skills?.slice(0, 4).map((skill, index) => {
            const name = getSkillName(skill);
            return <span key={name || index}>{name}</span>;
          })}
        </div>

        <Link
          to={`/integrantes/${member.id}`}
          className="member-card__link"
          aria-label={`Ver perfil de ${member.name}`}
        >
          Ver perfil <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
