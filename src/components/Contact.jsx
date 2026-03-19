import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin, SiGmail, SiWhatsapp, SiTelegram } from 'react-icons/si';

const Contact = () => {
  const contactLinks = [
    { icon: <SiGmail size={40} />, name: "Gmail", href: "mailto:joserafaelmatiast@gmail.com", color: "hover:text-red-500" },
    { icon: <SiWhatsapp size={40} />, name: "WhatsApp", href: "https://wa.me/584142696062", color: "hover:text-green-500" },
    { icon: <SiTelegram size={40} />, name: "Telegram", href: "https://t.me/matiasito", color: "hover:text-blue-400" },
    { icon: <SiGithub size={40} />, name: "GitHub", href: "https://github.com/hetairoii", color: "hover:text-white" },
    { icon: <SiLinkedin size={40} />, name: "LinkedIn", href: "https://linkedin.com/in/matias-silveira-1840b329a", color: "hover:text-blue-600" },
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-900 text-center border-t border-orange-500/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contáctame
        </motion.h2>

        <div className="flex justify-center gap-8 flex-wrap">
          {contactLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-500 transition-colors duration-300 ${link.color}`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-2">
                {link.icon}
                <span className="text-sm font-medium opacity-0 hover:opacity-100 transition-opacity">
                  {link.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.footer 
          className="mt-20 text-zinc-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p>© {new Date().getFullYear()} Matias Silveira. Todos los derechos reservados.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
