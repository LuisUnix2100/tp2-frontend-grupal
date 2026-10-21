import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; // 👈 Agregamos la portada
import Integrantes from './pages/Integrantes';
import Perfil from './pages/Perfil';
import Recursos from './pages/Recursos';
import Api from './pages/Api';
import Arbol from './pages/Arbol';
import Bitacora from './pages/Bitacora';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Inicio (/) muestra la portada */}
          <Route path="/" element={<Home />} />
          
          {/* Integrantes (/integrantes) muestra las tarjetas de los 5 */}
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Perfil />} />
          
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/api" element={<Api />} />
          <Route path="/arbol" element={<Arbol />} />
          <Route path="/bitacora" element={<Bitacora />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}