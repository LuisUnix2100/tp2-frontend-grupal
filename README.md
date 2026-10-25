# 🚀 Trabajo Práctico Grupal 2: Frontend en React

**Materia:** Desarrollo de Sistemas Web Front End (Ciclo 2026)  
**Institución:** IFTS N.º 29  
**Equipo:** `<EquipoDev/>`  

---

## 📑 Índice de Contenidos
1. [Descripción del Proyecto](#-1-descripción-del-proyecto)
2. [Despliegue en Producción (Vercel)](#-2-despliegue-en-producción-vercel)
3. [Integrantes y Responsabilidades](#-3-integrantes-y-responsabilidades)
4. [Tecnologías y Arquitectura](#-4-tecnologías-y-arquitectura)
5. [Estructura y Árbol de Componentes](#-5-estructura-y-árbol-de-componentes)
6. [Declaración de Uso de Inteligencia Artificial](#-6-declaración-de-uso-de-inteligencia-artificial)

---

## 📝 1. Descripción del Proyecto
Este repositorio contiene el código fuente del **Trabajo Práctico N.º 2**, el cual representa la migración y evolución de nuestro portfolio grupal desde una arquitectura estática (HTML/CSS/JS Vanilla del TP1) hacia una Single Page Application (**SPA**) construida en **React** con **Vite** y **React Router**.

### Características Principales:
* **Sidebar Compartida:** Navegación persistente con indicador visual de la sección activa y menú adaptable a dispositivos móviles.
* **Perfiles 100% Modulares en React:** Reconstrucción interactiva de los 5 perfiles con consolas terminales, reproductores multimedia, efectos 3D y modos temáticos (Modo Verde, Modo Eclipse y Modo Inferno).
* **Catálogo Local Dinámico:** Colección de 20 recursos tecnológicos en formato JSON con búsqueda en tiempo real, filtrado por categorías, vista detallada y restablecimiento de filtros.
* **Consumo de API Externa:** Conexión asíncrona a la API de GitHub para obtener métricas públicas en vivo con control riguroso de estados (Cargando, Datos OK, Error) y opción de recarga manual.
* **Documentación y Bitácora Integrada:** Visualización del árbol de renderizado del proyecto y bitácora interactiva de toma de decisiones técnicas.

---

## 🌐 2. Despliegue en Producción (Vercel)
El proyecto se encuentra desplegado y accesible públicamente sin necesidad de autenticación:
* **URL de Producción:** [https://tp2-frontend-grupal-eight.vercel.app/](https://tp2-frontend-grupal-eight.vercel.app/) 
* **Repositorio en GitHub:** [https://github.com/LuisUnix2100/tp2-frontend-grupal](https://github.com/LuisUnix2100/tp2-frontend-grupal) 

---

## 👥 3. Integrantes y Responsabilidades
* **Martina Bistagnino** — [@Martina-bistagnino](https://github.com/Martina-bistagnino)  
  *Responsabilidad:* Consumo asincrónico de API pública, gestión de estados de interfaz (loading/error/data) y módulo interactivo de Martina (`MartinaTerminal`).
* **Gabriela Dalila Contrera** — [@DalilaContrera](https://github.com/DalilaContrera)  
  *Responsabilidad:* Estructuración del JSON local con 20 recursos, lógica de filtros reactivos por categoría, buscador por texto y módulo `DalilaExplorer`.
* **Jorge Gabriel Caliz** — [@JorgeGabrielCaliz](https://github.com/JorgeGabrielCaliz)  
  *Responsabilidad:* Documentación técnica, diseño de la portada (Home), desarrollo de la Bitácora histórica y consola terminal interactiva (`JorgeConsole`).
* **Francisco Luis Bronzi** — [@LuisUnix2100](https://github.com/LuisUnix2100)  
  *Responsabilidad:* Arquitectura de rutas en React Router, diseño responsive de la Sidebar compartida y módulo interactivo de infraestructura (`LuisOS`).
* **Martín Roige** — [@TinchoHub](https://github.com/TinchoHub)  
  *Responsabilidad:* Coordinación técnica de la migración modular, normalización y centralización de datos (`teamData.js`), desarrollo de `Perfil.jsx`, `MediaFlipCard` y consola `MartinOS`.

---

## 🛠️ 4. Tecnologías y Arquitectura
* **React 18+ & Vite:** Componentes funcionales desacoplados y hooks (`useState`, `useEffect`, `useParams`, `useRef`).
* **React Router DOM v6:** Enrutamiento del cliente sin recargas de página y gestión de parámetros dinámicos (`/integrantes/:id`).
* **CSS3 Modular & Grid/Flexbox:** Paleta personalizada por integrante, modo oscuro nativo, variables CSS y animaciones fluidas.
* **Git & GitHub:** Flujo de ramas colaborativo y control de versiones.

---

## 🌳 5. Estructura y Árbol de Componentes
```text
App
├── BrowserRouter
├── ScrollToTop
└── Routes
    └── Layout
        ├── Sidebar (Navegación persistente y estado activo)
        └── Main / Outlet
            ├── Home (Portada del equipo)
            ├── Integrantes (Listado general de integrantes)
            │   └── MemberCard (Tarjetas dinámicas)
            ├── Perfil Individual ( /integrantes/:id )
            │   ├── MediaFlipCard (Trailers interactivos 3D)
            │   ├── MartinaCinema & MartinaMusic
            │   ├── MartinaTerminal (Consola JS)
            │   ├── DalilaExplorer (Curiosidades y Carmelucha)
            │   ├── JorgeConsole (Cyber Console Python & Modo Inferno)
            │   ├── LuisOS (Vintage Player)
            │   └── MartinOS (Retro Terminal 8-bit & Modo Verde)
            ├── Recursos (Catálogo local JSON de 20 registros)
            │   ├── SearchBar (Búsqueda textual)
            │   ├── FilterBar (Filtros por categoría)
            │   └── ResourceCard (Detalles desplegables)
            ├── API Pública (GitHub Developer Stats)
            │   ├── ApiSelector (Selector de integrantes)
            │   └── ApiCard (Estados de carga, error y refresco)
            ├── Árbol de Componentes (Visualización interactiva)
            └── Bitácora (Registro histórico del proceso de desarrollo)
```
---

## 🤖 6. Uso de Herramientas de Inteligencia Artificial

Durante el desarrollo del proyecto utilizamos herramientas de Inteligencia Artificial como apoyo para el aprendizaje, la programación y la resolución de problemas. Trabajamos con las versiones gratuitas de *ChatGPT* y *Gemini*.

Estas herramientas se utilizaron como complemento del trabajo del equipo para realizar consultas y facilitar distintas tareas del desarrollo, entre ellas:

* **Consultas técnicas:** aclaración de dudas sobre React, JavaScript, componentes, estilos y estructura del proyecto.
* **Corrección de errores:** ayuda para identificar posibles causas de errores y evaluar alternativas para solucionarlos.
* **Revisión de código:** verificación de la lógica, la sintaxis y la organización de los componentes.
* **Uso de Git y GitHub:** orientación sobre comandos, commits, sincronización de cambios y resolución de conflictos.
* **Comprensión de código:** explicación de fragmentos de código y de funcionalidades necesarias para continuar el desarrollo.
* **Documentación:** apoyo en la redacción y organización de explicaciones técnicas para el proyecto.

Las respuestas proporcionadas por estas herramientas fueron utilizadas como orientación. El equipo revisó las sugerencias, realizó las modificaciones necesarias y verificó el funcionamiento del código dentro del proyecto.

La utilización de IA tuvo como objetivo facilitar la resolución de dificultades, reforzar los conocimientos adquiridos y mejorar el proceso de desarrollo, manteniendo la participación y la responsabilidad de los integrantes sobre el trabajo realizado.

### Herramientas y Modelos Utilizados
* **ChatGPT (OpenAI):** Modelo **GPT-4o mini** (versión gratuita para consultas conceptuales, sintaxis y Git).
* **Gemini (Google):** Modelo **Gemini 2.5 Flash** (versión gratuita para análisis de componentes, diseño de interfaces y depuración de errores de renderizado).