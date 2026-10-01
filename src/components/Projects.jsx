import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import universalAcademyImg from '../assets/universal-academy-screenshot.png';
import arrowConMangoImg from '../assets/arrowconmango-screenshot.jpeg';
import weddingImg from '../assets/wedding-screenshot.png';
import silvitutorImg from '../assets/silvitutor-screenshot.png';
import belovely1Img from '../assets/belovely1-screenshot.png';

const linkClass =
  "bg-orange-600 text-white px-5 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-orange-700 flex items-center gap-2 text-sm";

const ProjectCard = ({ name, image, description, tech = [], repos = [], liveUrl }) => {
  return (
    <motion.div
      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-lg h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
            <span className="text-4xl font-bold opacity-20">NO IMAGE</span>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap items-center justify-center gap-3 p-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FiExternalLink /> Ver en vivo
            </a>
          )}
          {repos.map((repo) => (
            <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <SiGithub /> {repo.label}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {description || "Descripción del proyecto..."}
        </p>
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map((t) => (
              <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-800 text-orange-400 border border-zinc-700">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      name: "Universal Academy",
      image: universalAcademyImg,
      description: "Plataforma de formación online (LMS) con un sitio público y un campus virtual por roles: estudiantes, tutores y administradores. Incluye cursos con módulos y contenido, evaluaciones con tiempo e intentos, certificados en PDF, foros, conferencias en vivo y reportes. Monorepo con SPA en React y API REST en FastAPI. Más de 185 commits.",
      tech: ["React 19", "TypeScript", "Vite", "FastAPI", "SQLAlchemy", "PostgreSQL"],
      liveUrl: "https://www.universalacademygroup.com/"
    },
    {
      name: "Arrow con Mango",
      image: arrowConMangoImg,
      description: "Juego de puzzles estilo Arrow Maze: hay que deslizar flechas fuera del tablero sin que colisionen. Tiene modos Campaña, Supervivencia, Cubo 3D y Creativo. El cliente móvil está hecho en Flutter y el backend en NestJS aporta autenticación JWT, progreso sincronizado, ranking global y niveles remotos, bajo Clean Architecture y Arquitectura Hexagonal. Proyecto en equipo.",
      tech: ["Flutter", "NestJS", "TypeORM", "PostgreSQL", "JWT", "Clean Architecture"],
      repos: [
        { label: "Frontend", url: "https://github.com/a-granadillo/ArrowConMango_Front" },
        { label: "Backend", url: "https://github.com/a-granadillo/ArrowConMango_Backend" }
      ]
    },
    {
      name: "Invitación de Boda",
      image: weddingImg,
      description: "Invitación web de una sola página para una boda, pensada para compartirse por WhatsApp. Abre con un sobre animado que inicia la música, e incluye cuenta regresiva, lugar con botón de cómo llegar, programa, código de vestimenta y confirmación de asistencia. 100% estática, hecha con Astro y Tailwind.",
      tech: ["Astro", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://ricardo-genesis-wedding.netlify.app/"
    },
    {
      name: "Silvitutor",
      image: silvitutorImg,
      description: "Silvitutor es una solución digital creada para transformar la tutoría tradicional en una experiencia dinámica y accesible. Esta robusta aplicación web centraliza herramientas de enseñanza y seguimiento académico, enfocándose en mejorar la retención de conocimientos y la productividad del estudiante. Su propósito fundamental es la formación de niños y adultos en el área de la silvicultura, fomentando el aprendizaje sobre el cuidado y la gestión sostenible de los bosques a través de una plataforma interactiva.",
      liveUrl: "https://silvitutor.netlify.app/"
    },
    {
      name: "BeLovely1",
      image: belovely1Img,
      description: "BeLovely1 es una aplicación web personalizable que tiene por fin el sorprender a esa persona que tanto quieres con una experiencia interactiva única. Crea una página especial con tus propias razones para amar, una foto opcional juntos y hasta 100 razones editables, todo presentado de una forma especial para una persona especial.",
      tech: ["TypeScript"],
      liveUrl: "https://belovely1.netlify.app/",
      repos: [
        { label: "Repositorio", url: "https://github.com/hetairoii/belovely1" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Proyectos Destacados
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 2) * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
