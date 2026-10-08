import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Integrantes from './pages/Integrantes';
import Perfil from './pages/Perfil';

export default function App() {
  return (
    <BrowserRouter>
      {/* Header provisional mientras Integrante 1 hace la Sidebar */}
      <header style={{ padding: '1rem 2rem', background: '#10152b', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', color: '#22d3ee' }}>&lt;EquipoDev/&gt;</span>
        <Link to="/integrantes" style={{ color: '#fff' }}>Integrantes</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Integrantes />} />
          <Route path="/integrantes" element={<Integrantes />} />
          {/* Ruta dinámica para cada perfil */}
          <Route path="/integrantes/:id" element={<Perfil />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
