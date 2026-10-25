// src/components/ScrollToTop.jsx
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // "instant" ignora el "scroll-behavior: smooth" del CSS (html { ... }).
    // Con "smooth", el desplazamiento animado se interrumpe cuando la página
    // nueva cambia de alto (imágenes, videos) y queda a mitad de camino.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Por si el contenido se desplaza dentro de un contenedor y no en la ventana
    const main = document.querySelector('.app-main');
    if (main) {
      main.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}