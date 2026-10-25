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
    role: "Desarrollo Web · UI/UX",
    avatar: martinaImg,
    age: "23 años",
    location: "Buenos Aires",
    bio: "Enfocada en diseño de interfaces y desarrollo front-end moderno.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX", "Figma"],
    movies: ["Interestelar", "El viaje de Chihiro", "Inception"],
    music: ["Coldplay", "Dua Lipa", "Arctic Monkeys"]
  },
  
  {
    id: "dalila",
    number: "02",
    name: "Gabriela Dalila Contrera",
    role: "Desarrollo de Software · Diseño · Tecnología",
    avatar: dalilaImg,
    age: "49 años",
    location: "Argüello, Córdoba",
    bio: "No necesito saberlo todo, solo tener ganas de aprender.",
    skills: [
      "HTML",
      "CSS",
      "C#",
      "Kotlin",
      "Java",
      "Git/GitHub",
      "Bases de datos",
      "Figma",
      "Diseño web",
      "Videojuegos"
    ],
    movies: [
      "Esperando la carroza",
      "Star Wars",
      "El Código Da Vinci",
      "The Big Bang Theory"
    ],
    music: [
      "Look Sharp! — Roxette (1988)",
      "Like a Virgin — Madonna (1984)",
      "Appetite for Destruction — Guns N' Roses (1987)"
    ],
    interests: [
      "Música",
      "Dibujo",
      "Amigurumis",
      "Películas",
      "Tortugas",
      "Astronomía",
      "Antiguo Egipto"
    ],
    softSkills: [
      "Trabajo en equipo",
      "Creatividad",
      "Organización",
      "Comunicación",
      "Resolución de problemas",
      "Liderazgo"
    ],
    stories: [
      {
        number: "01",
        type: "PELÍCULA",
        title: "Esperando la carroza",
        description: "Una comedia argentina clásica, llena de humor y situaciones familiares inolvidables.",
        videoUrl: ""
      },
      {
        number: "02",
        type: "PELÍCULA",
        title: "Star Wars",
        description: "Aventuras, ciencia ficción y una galaxia llena de historias.",
        videoUrl: ""
      },
      {
        number: "03",
        type: "PELÍCULA",
        title: "El Código Da Vinci",
        description: "Misterios, símbolos y enigmas que conectan arte e historia.",
        videoUrl: ""
      }
    ]
  },

  {
    id: "jorge",
    number: "03",
    name: "Jorge Caliz",
    role: "Python · Game Development",
    avatar: jorgeImg,
    age: "28 años",
    location: "Buenos Aires",
    bio: "Apasionado por la lógica de programación, videojuegos y desarrollo con Python.",
    skills: ["Python", "Videojuegos", "Creatividad", "Git"],
    movies: ["Matrix", "Akira", "Gladiador"],
    music: ["Daft Punk", "Rammstein", "Linkin Park"]
  },
  {
    id: "luis",
    number: "04",
    name: "Francisco Luis Bronzi",
    role: "Desarrollo Web · Infraestructura",
    avatar: luisImg,
    age: "31 años",
    location: "Buenos Aires",
    bio: "Especializado en infraestructura, redes, backend y maquetación web limpia.",
    skills: ["HTML", "CSS", "JavaScript", "Bases de datos", "Redes"],
    movies: ["El Padrino", "Pulp Fiction", "Taxi Driver"],
    music: ["Pink Floyd", "Led Zeppelin", "The Beatles"]
  },
  {
    id: "martin",
    number: "05",
    name: "Martín Roige",
    role: "WebApps · Fullstack",
    avatar: martinImg,
    age: "49 años",
    location: "Pilar, Buenos Aires",
    bio: "De la logística al desarrollo de software. Construcción de aplicaciones web frontend y backend.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django"],
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
    music: ["Metallica", "Roxette", "Imagine Dragons"]
  }
];