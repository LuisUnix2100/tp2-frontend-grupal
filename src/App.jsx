import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Integrantes from './pages/Integrantes';
import Perfil from './pages/Perfil';
import Recursos from './pages/Recursos';
import Api from './pages/Api';
import Arbol from './pages/Arbol';
import Bitacora from './pages/Bitacora';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
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