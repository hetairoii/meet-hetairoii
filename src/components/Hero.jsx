import React from 'react';
import { motion } from 'framer-motion';
import Globe3D from './Globe3D';
import DotPattern from './DotPattern';
import profileImg from '../assets/foto-perfil.png';

const Hero = ({ showProfileInNavbar}) => {
  return (
    <section 
      id="hero" 
      className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-transparent relative overflow-hidden"
    >
      
      {/* --- DOT PATTERN--- */}      
      <DotPattern color="#ffffff" opacity={0.15} spacing={25} size={2} />

      {/* 3D GLOBE */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 pointer-events-none md:opacity-40 md:left-[80%]">
         <Globe3D size={600} sphereSize={14} color="#a0a0a0" />
      </div>

      {/* Background Particles or Effects can go here */}
      
      <div className="z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        {/* Profile Picture Container */}
        <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0 order-1 md:order-1">
          {/* 
            On Desktop: Only show if NOT in navbar (showProfileInNavbar is false).
            On Mobile: Always show here (ignore showProfileInNavbar, as transition only applies to desktop).
          */}
          {(!showProfileInNavbar || window.innerWidth < 768) && (
            <motion.div
              layoutId="profile-pic"
              className="w-full h-full rounded-full border-4 border-orange-500 overflow-hidden shadow-2xl shadow-orange-500/50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <img 
                src={profileImg} 
                alt="Matias Silveira" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>

        {/* Names Container */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-2">
          
          {/* Real Name - Animated Up */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2"
          >
            Matias Silveira
          </motion.h1>

          {/* Separator Line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-orange-500 my-2"
          />

          {/* GitHub Username - Animated Down */}
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl md:text-4xl font-mono text-orange-500"
          >
            hetairoii
          </motion.h2>

          {/* Optional Tagline */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5 }}
             className="mt-6 text-gray-400 text-sm md:text-base font-light"
          >
            <span className="mr-2">&lt;</span>
            Full Stack Developer
            <span className="ml-2">/&gt;</span>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-orange-500 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-orange-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
