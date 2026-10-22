import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Integrantes from './pages/Integrantes';
import Perfil from './pages/Perfil';
import Recursos from './pages/Recursos';
import Api from './pages/Api';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* 2. Acá la ponemos en la portada */}
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Perfil />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/api" element={<Api />} />
          <Route path="/arbol" element={<div style={{ padding: '2rem', color: '#fff' }}>Árbol de componentes en construcción</div>} />
          <Route path="/bitacora" element={<div style={{ padding: '2rem', color: '#fff' }}>Bitácora en construcción</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}