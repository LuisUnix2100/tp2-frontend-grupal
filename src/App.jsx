import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Integrantes from './pages/Integrantes';
import Perfil from './pages/Perfil';
import Recursos from './pages/Recursos';
import Api from './pages/Api';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El Layout con tu Sidebar envuelve todas las rutas */}
        <Route element={<Layout />}>
          <Route path="/" element={<Integrantes />} />
          <Route path="/integrantes" element={<Integrantes />} />
          {/* Ruta dinámica para cada perfil */}
          <Route path="/integrantes/:id" element={<Perfil />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/api" element={<Api />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}