import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiPython, SiCplusplus, SiJavascript, SiTypescript, 
  SiVuedotjs, SiFastapi, SiDjango, SiFlutter,
  SiPostgresql, SiDocker, SiKubernetes 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const TechStack = () => {
  const mern = [
    { letter: 'M', name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
    { letter: 'E', name: 'Express', icon: <SiExpress size={40} className="text-white bg-black rounded-full p-1" /> },
    { letter: 'R', name: 'React', icon: <SiReact size={40} className="text-blue-400" /> },
    { letter: 'N', name: 'Node.js', icon: <SiNodedotjs size={40} className="text-green-600" /> },
  ];

  const categories = [
    {
      title: "Lenguajes",
      items: [
        { name: "Python", icon: <SiPython className="text-yellow-300" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      ]
    },
    {
      title: "Frameworks / Libs",
      items: [
        { name: "React.js", icon: <SiReact className="text-blue-400" /> },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
        { name: "Django", icon: <SiDjango className="text-green-800" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      ]
    },
    {
      title: "Bases de Datos",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      ]
    },
    {
      title: "Orquestación",
      items: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 bg-zinc-900 border-t border-orange-500/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stack Tecnológico
        </motion.h2>

        {/* MERN Stack */}
        <div className="mb-20">
          <h3 className="text-2xl text-center mb-8 font-mono text-gray-400">&lt;Stack Principal /&gt;</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {mern.map((tech, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center gap-4 group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-6xl md:text-8xl font-black text-white/10 group-hover:text-orange-500/20 transition-colors">
                  {tech.letter}
                </div>
                <div className="text-xl md:text-2xl font-bold mt-2 flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700 shadow-lg group-hover:border-orange-500/50 transition-colors">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="bg-black/50 backdrop-blur-sm border border-zinc-800 p-6 rounded-xl hover:border-orange-500/30 transition-colors shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6 text-orange-400 border-b border-zinc-800 pb-2">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-mono">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
