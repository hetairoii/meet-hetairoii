import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [showProfileInNavbar, setShowProfileInNavbar] = useState(false);
  const profileImg = "./src/assets/foto-perfil.png"; // Reemplaza con tu foto real en src/assets/foto-perfil.png

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowProfileInNavbar(true);
      } else {
        setShowProfileInNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500 opacity-20 blur-[100px]"></div>
      </div>

      <Navbar showProfile={showProfileInNavbar} profileImg={profileImg} />
      
      <Hero showProfileInNavbar={showProfileInNavbar} profileImg={profileImg} />
      
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
