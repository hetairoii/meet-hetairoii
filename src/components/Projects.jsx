import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import silvitutorImg from '../assets/silvitutor-screenshot.png';
import belovely1Img from '../assets/belovely1-screenshot.png';

const ProjectCard = ({ name, image, description, repoUrl }) => {
  return (
    <motion.div 
      className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-orange-700 flex items-center gap-2"
          >
            <SiGithub /> Ver Repositorio
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
          {name}
        </h3>
        <p className="text-gray-400 text-sm h-full">
          {description || "Descripción del proyecto..."}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
    // Single project
  const projects = [
    {
      name: "Silvitutor",
      image: silvitutorImg, 
      description: "Silvitutor es una solución digital creada para transformar la tutoría tradicional en una experiencia dinámica y accesible. Esta robusta aplicación web centraliza herramientas de enseñanza y seguimiento académico, enfocándose en mejorar la retención de conocimientos y la productividad del estudiante. Su propósito fundamental es la formación de niños y adultos en el área de la silvicultura, fomentando el aprendizaje sobre el cuidado y la gestión sostenible de los bosques a través de una plataforma interactiva.",
      repoUrl: "https://silvitutor.netlify.app/"
    },
    {
      name: "BeLovely1",
      image: belovely1Img, 
      description: "BeLovely1 es una solución digital creada para transformar la tutoría tradicional en una experiencia dinámica y accesible. Esta robusta aplicación web centraliza herramientas de enseñanza y seguimiento académico, enfocándose en mejorar la retención de conocimientos y la productividad del estudiante. Su propósito fundamental es la formación de niños y adultos en el área de la silvicultura, fomentando el aprendizaje sobre el cuidado y la gestión sostenible de los bosques a través de una plataforma interactiva.",
      repoUrl: "https://belovely1.netlify.app/"
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

        <div className="flex flex-wrap justify-center gap-10 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full max-w-2xl bg-zinc-900 rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
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
