// src/data/teamData.js
import martinaImg from '../assets/avatares/martina.jpg';
import dalilaImg from '../assets/avatares/dalila.jpg';
import jorgeImg from '../assets/avatares/jorge.jpg';
import luisImg from '../assets/avatares/luis.jpg';
import martinImg from '../assets/avatares/martin.jpg';

export const teamMembers = [
  {
    id: "martina",
    number: "01",
    name: "Martina Bistagnino",
    role: "Desarrollo Web · UI/UX · Soporte IT",
    avatar: martinaImg,
    age: "22 años",
    location: "Flores, CABA",
    area: "Sistemas",
    statusText: "Disponible para crear",
    quote: "Curiosa por naturaleza, creadora por elección.",
    decorations: ["</>", "JS"],
    tags: ["HTML", "JS", "CSS"],
    github: "https://github.com/Martina-bistagnino",
    linkedin: "https://www.linkedin.com/in/martinabistagnino",
    aboutTerminal: "about_me.txt",
    aboutText: [
      "Soy estudiante de Desarrollo de Software y actualmente trabajo en el área de Sistemas de una empresa dedicada a distribución y logística.",
      "Me desempeño combinando desarrollo web, mantenimiento de aplicaciones y soporte técnico, buscando seguir creciendo dentro del mundo de la tecnología."
    ],
    aboutCards: [
      { icon: "</>", title: "Desarrollo", desc: "Me interesa especialmente crear interfaces web funcionales, modernas y adaptables." },
      { icon: "+", title: "Aprendizaje", desc: "Disfruto investigar y profundizar temas nuevos, tanto tecnológicos como de otras áreas." }
    ],
    skills: [
      { name: "HTML", desc: "Estructura y contenido web semántico." },
      { name: "CSS", desc: "Diseño visual y construcción de interfaces." },
      { name: "JavaScript", desc: "Interactividad y manipulación del DOM." },
      { name: "Git", desc: "Control y seguimiento de versiones." },
      { name: "GitHub", desc: "Repositorios y trabajo colaborativo." },
      { name: "Responsive", desc: "Interfaces adaptables a distintos dispositivos." },
      { name: "UI / UX", desc: "Diseño centrado en claridad y experiencia de uso." }
    ],
    interests: [
      { icon: "📸", title: "Fotografía" },
      { icon: "✈️", title: "Viajes" },
      { icon: "🎨", title: "Diseño" },
      { icon: "🎮", title: "Mortal Kombat" },
      { icon: "🐈", title: "Odin" },
      { icon: "📚", title: "Aprender" }
    ]
  },
  {
    id: "dalila",
    number: "02",
    name: "Gabriela Dalila Contrera",
    role: "Desarrollo de Software · Diseño · Tecnología",
    avatar: dalilaImg,
    age: "49 años",
    location: "Argüello, Córdoba",
    area: "Creativo · Tecnológico",
    statusText: "Siempre aprendiendo",
    quote: "No necesito saberlo todo, solo tener ganas de aprender.",
    decorations: ["{ }", "0101"],
    tags: ["JAVA", "C#", "KOTLIN"],
    github: "https://github.com/DalilaContrera",
    aboutTerminal: "dalila_profile.txt",
    aboutText: [
      "Soy estudiante de Desarrollo de Software, curiosa y perseverante, con interés por la programación, los idiomas y el desarrollo de nuevas tecnologías.",
      "Me gusta aprender, enfrentar desafíos y descubrir constantemente nuevas formas de crear soluciones."
    ],
    aboutCards: [
      { icon: "</>", title: "Tecnología", desc: "Explorar diferentes lenguajes, herramientas y áreas del desarrollo de software." },
      { icon: "✦", title: "Creatividad", desc: "Dibujo, tejido de amigurumis y proyectos visuales." }
    ],
    skills: [
      { name: "HTML", desc: "Estructura y contenido para sitios web." },
      { name: "CSS", desc: "Estilos e interfaces visuales." },
      { name: "C#", desc: "Desarrollo y programación orientada a objetos." },
      { name: "Kotlin", desc: "Desarrollo de aplicaciones y lógica." },
      { name: "Java", desc: "Programación y desarrollo de aplicaciones." },
      { name: "Git / GitHub", desc: "Versionado y trabajo colaborativo." },
      { name: "Base de datos", desc: "Organización y gestión de información." },
      { name: "Figma", desc: "Diseño y prototipado de interfaces." },
      { name: "Diseño web", desc: "Diseño visual orientado a experiencias digitales." },
      { name: "Videojuegos", desc: "Interés por el desarrollo de experiencias interactivas." }
    ],
    softSkills: [
      { icon: "🤝", title: "Trabajo en equipo" },
      { icon: "✨", title: "Creatividad" },
      { icon: "📋", title: "Organización" },
      { icon: "💬", title: "Comunicación" },
      { icon: "🧩", title: "Resolución de problemas" },
      { icon: "🚀", title: "Liderazgo" }
    ],
    movies: [
      { number: "01", title: "Esperando la carroza", desc: "Un clásico del cine argentino, divertida y llena de frases inolvidables.", video: "https://www.youtube.com/embed/KIgOuEPQZsU" },
      { number: "02", title: "Star Wars", desc: "Ciencia ficción, aventuras y un universo lleno de personajes memorables.", video: "https://www.youtube.com/embed/Zu46yZrGVhQ" },
      { number: "03", title: "El Código Da Vinci", desc: "Misterios, enigmas y búsqueda constante de respuestas.", video: "https://www.youtube.com/embed/Lo-kPL_I3Qw" },
      { number: "04", title: "The Big Bang Theory", desc: "Humor, ciencia, tecnología y situaciones cotidianas.", video: "https://www.youtube.com/embed/WBb3fojgW0Q" }
    ],
    music: [
      { number: "01", title: "Look Sharp!", desc: "Roxette · 1988", video: "https://www.youtube.com/embed/9d5ZsFQ_3t0" },
      { number: "02", title: "Like a Virgin", desc: "Madonna · 1984", video: "https://www.youtube.com/embed/t-YPB489QcI" },
      { number: "03", title: "Appetite for Destruction", desc: "Guns N' Roses · 1987", video: "https://www.youtube.com/embed/oMfMUfgjiLg" }
    ],
    interests: [
      { icon: "🎵", title: "Música" },
      { icon: "🎨", title: "Dibujo" },
      { icon: "🧶", title: "Amigurumis" },
      { icon: "🎬", title: "Películas" },
      { icon: "🐢", title: "Tortugas" },
      { icon: "🔭", title: "Astronomía" },
      { icon: "🏺", title: "Antiguo Egipto" }
    ]
  },
  {
    id: "jorge",
    number: "03",
    name: "Jorge Caliz",
    role: "Python · Videojuegos · Creatividad",
    avatar: jorgeImg,
    age: "43 años",
    location: "CABA",
    area: "Creativo · Pensativo",
    statusText: "Thinking mode: ON",
    quote: "Es imposible evitar lo inevitable, y en este momento lo inevitable soy yo.",
    decorations: ["PY", "43"],
    tags: ["PYTHON", "GAME DEV", "RPG"],
    github: "https://github.com/JorgeGabrielCaliz",
    aboutTerminal: "jorge_profile.log",
    aboutText: [
      "Soy una persona algo caótica y suelo sobrepensar las cosas. Muchas veces digo menos de lo que pienso, pero disfruto observar, analizar y aprender.",
      "Intento ayudar dentro de mis posibilidades a quien lo necesita y disfruto de la compañía de otras personas, incluso cuando simplemente compartimos el momento sin necesidad de hablar."
    ],
    aboutCards: [
      { icon: "?", title: "Curiosidad", desc: "Explorar ideas, imaginar posibilidades y buscar diferentes formas de resolver problemas." },
      { icon: "⚔", title: "Disciplina", desc: "Las artes marciales y la acrobacia también forman parte de mi experiencia personal." }
    ],
    skills: [
      { name: "Python", desc: "Programación, lógica y resolución de problemas." },
      { name: "Game Development", desc: "Interés por el desarrollo y diseño de videojuegos." },
      { name: "Creatividad", desc: "Imaginar soluciones, mundos e ideas diferentes." },
      { name: "Resolución", desc: "Analizar problemas y encontrar posibles caminos." }
    ],
    personality: [
      { number: "01", title: "Creativo", desc: "Disfruto imaginar, experimentar y crear." },
      { number: "02", title: "Curioso", desc: "Siempre hay algo nuevo para investigar." },
      { number: "03", title: "Pensativo", desc: "Probablemente piense la respuesta varias veces." }
    ],
    movies: [
      { number: "01", type: "PELÍCULA", title: "El Ilusionista", desc: "Me gustó especialmente su guion y los giros que va desarrollando durante la historia." },
      { number: "02", type: "ANIME", title: "Akira", desc: "Una película de animación japonesa con una ambientación cyberpunk y postapocalíptica." },
      { number: "03", type: "ANIME", title: "Summer Wars", desc: "Combina de forma brillante lazos familiares, una premisa de ciencia ficción sobre mundos virtuales y un ritmo impecable." }
    ],
    music: [
      { number: "01", artist: "BAND-MAID", title: "Just Bring It" },
      { number: "02", artist: "Ling Tosite Sigure", title: "i'mperfect" },
      { number: "03", artist: "Lorihen", title: "Paradigma" }
    ],
    interests: [
      { icon: "🎵", title: "Música" },
      { icon: "🗾", title: "Anime" },
      { icon: "🎮", title: "Videojuegos" },
      { icon: "🥋", title: "Artes marciales" },
      { icon: "🤸", title: "Acrobacia" },
      { icon: "🎲", title: "Rol de mesa" }
    ],
    facts: [
      { icon: "🎮", text: "Mi juego favorito es Dungeons & Dragons: Shadow over Mystara." },
      { icon: "🥋", text: "Soy instructor de artes marciales y practiqué acrobacia." },
      { icon: "🎸", text: "Tengo facilidad para aprender a tocar distintos instrumentos musicales." }
    ]
  },
  {
    id: "luis",
    number: "04",
    name: "Francisco Luis Bronzi",
    role: "Desarrollo Web · Servidores · Infraestructura",
    avatar: luisImg,
    age: "62 años",
    location: "Flores, CABA",
    area: "Full-stack",
    statusText: "Creando la próxima etapa",
    quote: "Aprender, crear y seguir avanzando.",
    decorations: ["FLB", "04"],
    tags: ["HTML", "JS", "DATABASE"],
    github: "https://github.com/LuisUnix2100",
    portfolio: "https://pfo1-francisco-luis1.vercel.app/#inicio",
    aboutTerminal: "francisco_luis.profile",
    aboutText: [
      "Soy estudiante de Desarrollo de Software y durante mi formación ya desarrollé distintas aplicaciones como parte de mi aprendizaje.",
      "Trabajé en dos empresas multinacionales y actualmente realizo soporte en instalaciones de servidores y cableado estructurado categorías 5 y 6.",
      "Mi objetivo es continuar desarrollándome profesionalmente en proyectos de gestión y desarrollo web full-stack."
    ],
    aboutCards: [
      { icon: "🖥", title: "Infraestructura", desc: "Experiencia con instalaciones de servidores y soporte tecnológico." },
      { icon: "⌘", title: "Desarrollo", desc: "Incorporando herramientas constantes para desarrollar aplicaciones web." }
    ],
    skills: [
      { name: "HTML", desc: "Construcción y estructura de páginas web." },
      { name: "CSS", desc: "Diseño visual y adaptación de interfaces." },
      { name: "JavaScript", desc: "Interactividad y lógica para aplicaciones web." },
      { name: "Bases de datos", desc: "Organización y gestión de información." },
      { name: "Unix / Linux", desc: "Dominio de entornos Unix, gestión de procesos y Bash." },
      { name: "Kotlin", desc: "Desarrollo móvil y arquitectura moderna." },
      { name: "Python", desc: "Automatización, análisis de datos y algoritmos." },
      { name: "C#", desc: "POO, arquitectura de software y MySQL." },
      { name: "Git / GitHub", desc: "Control de versiones y repositorios colaborativos." },
      { name: "Figma", desc: "Prototipado interactivo y diseño UI/UX." }
    ],
    experience: [
      { number: "01", title: "Desarrollo", desc: "Desarrollo de aplicaciones realizadas durante mi formación académica." },
      { number: "02", title: "Multinacionales", desc: "Experiencia laboral previa en dos empresas multinacionales." },
      { number: "03", title: "Servidores", desc: "Soporte en instalaciones y entornos relacionados con servidores." },
      { number: "04", title: "Redes", desc: "Cableado estructurado categorías 5 y 6." }
    ],
    movies: [
      { number: "01", title: "Notting Hill", desc: "Química entre sus protagonistas, humor británico y atmósfera inolvidable." },
      { number: "02", title: "Comer, Rezar, Amar", desc: "Una historia sobre transformación personal, viajes y valentía." },
      { number: "03", title: "Titanic", desc: "Historia de amor situada en uno de los viajes más recordados." },
      { number: "04", title: "El Código Da Vinci", desc: "Trama atrapante de misterio, historia y criptografía." }
    ],
    music: [
      { artist: "LE JAZZ CAFÉ FRANCAIS", title: "Outdoor Jazz", desc: "Música ideal para crear una atmósfera tranquila.", video: "https://www.youtube.com/embed/6HdrWrGSS8I", disc: "♫" },
      { artist: "IL DIVO", title: "Regresa a mí", desc: "Una de las interpretaciones que disfruta escuchar.", video: "https://www.youtube.com/embed/OkYnq1iOVdE", disc: "ID" },
      { artist: "SARAH BRIGHTMAN & ANDREA BOCELLI", title: "Time To Say Goodbye", desc: "Colaboración e interpretación icónica.", video: "https://www.youtube.com/embed/4L_yCwFD6Jo", disc: "SB" },
      { artist: "ANDRÉ RIEU & CARLOS BUONO", title: "Adiós Nonino - Libertango", desc: "Magistral interpretación en vivo desde Maastricht.", video: "https://www.youtube.com/embed/juZitGFjKd4", disc: "AR" },
      { artist: "LARA FABIAN", title: "Adagio", desc: "Impresionante interpretación vocal (Live).", video: "https://www.youtube.com/embed/jKtNuLG5jAo", disc: "LF" },
      { artist: "HAUSER", title: "Rebel With a Cello", desc: "Show en vivo desde Budapest (Full Concert).", video: "https://www.youtube.com/embed/JkPUS0Zdwd8", disc: "H" }
    ],
    personality: [
      { number: "01", title: "Creativo" },
      { number: "02", title: "Tranquilo" },
      { number: "03", title: "Curioso" },
      { number: "04", title: "Responsable" },
      { number: "05", title: "Divertido" }
    ],
    interests: [
      { icon: "🎵", title: "Música" },
      { icon: "🎭", title: "Teatro" },
      { icon: "🚗", title: "Autos" },
      { icon: "👨‍🍳", title: "Cocina" },
      { icon: "🍽️", title: "Gastronomía" },
      { icon: "📸", title: "Fotografía" },
      { icon: "✈️", title: "Viajes" },
      { icon: "🎨", title: "Diseño" },
      { icon: "🎬", title: "Películas" }
    ],
    facts: [
      { icon: "🐶", title: "Tengo un perro", desc: "Parte de la familia." },
      { icon: "🎮", title: "Escape Academy", desc: "Juegos de estrategia y escape rooms." },
      { icon: "📺", title: "El Encargado", desc: "Una de mis series favoritas." },
      { icon: "🥩", title: "Asado", desc: "Mi comida favorita." },
      { icon: "🎤", title: "Cantar", desc: "Uno de mis hobbies." },
      { icon: "👨‍👩‍👧‍👦", title: "Amigos y familia", desc: "Reuniones y buenos momentos compartidos." }
    ]
  },
  {
    id: "martin",
    number: "05",
    name: "Martín Roige",
    role: "WebApps · Python · Django · React",
    avatar: martinImg,
    age: "49 años",
    location: "Pilar, Buenos Aires",
    area: "Fullstack Developer",
    statusText: "PLAYER 1 READY",
    quote: "Resiliencia. Lo que no te mata te fortalece.",
    decorations: ["8BIT", "01"],
    tags: ["REACT", "PYTHON", "NODE"],
    github: "https://github.com/TinchoHub",
    linkedin: "https://www.linkedin.com/in/martin-roige/",
    aboutTerminal: "martin_profile.exe",
    aboutText: [
      "Actualmente curso la Tecnicatura en Desarrollo de Software y continúo ampliando mi formación mediante distintos cursos relacionados con tecnología.",
      "Me capacité en desarrollo web frontend y backend, administración de redes Cisco mediante CCNA y CCNA Advanced y también Red Hat System Administration.",
      "Actualmente trabajo en logística y mi objetivo es dar el salto profesional hacia el mundo del desarrollo de software."
    ],
    aboutCards: [
      { icon: "</>", title: "Desarrollo", desc: "Me interesa construir aplicaciones web trabajando tanto frontend como backend." },
      { icon: "↑", title: "Evolución", desc: "Mi objetivo es continuar aprendiendo y convertir la programación en mi carrera profesional." }
    ],
    skills: [
      { name: "HTML", desc: "Estructura de aplicaciones web." },
      { name: "CSS", desc: "Diseño y adaptación de interfaces." },
      { name: "JavaScript", desc: "Lógica e interacción en aplicaciones web." },
      { name: "React", desc: "Desarrollo de interfaces modernas." },
      { name: "Node.js", desc: "Desarrollo del lado del servidor." },
      { name: "Python", desc: "Programación y desarrollo backend." },
      { name: "Django", desc: "Desarrollo de aplicaciones web con Python." }
    ],
    sidequests: [
      { icon: "🌐", title: "Cisco", desc: "CCNA y CCNA Advanced" },
      { icon: "🐧", title: "Red Hat", desc: "System Administration" },
      { icon: "💻", title: "Web Development", desc: "Frontend + Backend" }
    ],
    stories: [
      {
        number: "01",
        type: "SERIE",
        title: "Mr. Robot",
        description: "Un muy buen drama ambientado en el mundo hacker.",
        videoUrl: "https://www.youtube-nocookie.com/embed/xIBiJ_SzJTA"
      },
      {
        number: "02",
        type: "SERIE",
        title: "Foundation",
        description: "Ciencia ficción épica basada en la monumental obra de Isaac Asimov.",
        videoUrl: "https://www.youtube-nocookie.com/embed/X4QYV5GTz7c"
      },
      {
        number: "03",
        type: "PELÍCULA",
        title: "Alien",
        description: "Terror, ciencia ficción y una amenaza en medio del espacio.",
        videoUrl: "https://www.youtube-nocookie.com/embed/LjLamj-b0I8"
      }
    ],
    musicTracks: [
      { letter: "M", artist: "METALLICA", title: "Black Album", url: "https://www.youtube.com/embed/tAGnKpE4NCI" },
      { letter: "R", artist: "ROXETTE", title: "Joyride", url: "https://www.youtube.com/embed/xCorJG9mubk" },
      { letter: "ID", artist: "IMAGINE DRAGONS", title: "Night Visions", url: "https://www.youtube.com/embed/ktvTqknDobU" }
    ],
    personality: [
      { label: "CREA", title: "Creativo" },
      { label: "CALM", title: "Tranquilo" },
      { label: "CUR", title: "Curioso" },
      { label: "RESP", title: "Responsable" },
      { label: "FUN", title: "Divertido" }
    ],
    interests: [
      { icon: "🎬", title: "Películas" },
      { icon: "📺", title: "Series" },
      { icon: "🗾", title: "Anime" },
      { icon: "🎮", title: "Videojuegos" },
      { icon: "🎵", title: "Música" },
      { icon: "✈️", title: "Viajes" }
    ],
    facts: [
      { icon: "🎮", title: "Blizzard fan", desc: "Mis favoritos son StarCraft y Diablo." },
      { icon: "🐶", title: "3 perros", desc: "Y eso no es todo..." },
      { icon: "🐈", title: "8 gatos", desc: "Sí. Ocho." },
      { icon: "🍽️", title: "Milanesa napolitana", desc: "Comida favorita." },
      { icon: "📺", title: "Mirar series", desc: "Uno de mis hobbies principales." },
      { icon: "🚀", title: "Próxima misión", desc: "Trabajar como desarrollador fullstack." }
    ]
  }
];