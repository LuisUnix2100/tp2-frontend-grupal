import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'; // 1. Acá importamos Home
import Integrantes from './pages/Integrantes';
import Perfil from './pages/Perfil';
import Recursos from './pages/Recursos';
import Api from './pages/Api';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* 2. Acá la ponemos en la portada */}
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrantes/:id" element={<Perfil />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/api" element={<Api />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}