import { teamMembers } from '../data/teamData';
import MemberCard from '../components/MemberCard';

export default function Integrantes() {
  return (
    <section className="section integrantes-page">
      <div className="container">
        <div className="section-heading">
          <span className="section-heading__eyebrow">Nuestro equipo</span>
          <h2>Cinco personas, cinco perfiles</h2>
          <p>
            Cada integrante cuenta con su propia página donde presenta sus habilidades,
            experiencia, intereses y componentes dinámicos individuales.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}