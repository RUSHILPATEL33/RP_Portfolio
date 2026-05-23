import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background glowing elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-neutral-800/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-neutral-800/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-neutral-900 text-accent-blue dark:text-neutral-300 rounded-full text-sm font-semibold w-max border border-blue-100 dark:border-neutral-800 shadow-sm">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Rushil Patel</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-space font-medium text-slate-700 dark:text-neutral-300 h-10">
            <Typewriter
              words={['Java Developer', 'Backend Enthusiast', 'Open Source Contributor']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          
          <p className="text-slate-500 dark:text-neutral-400 text-lg leading-relaxed max-w-lg">
            I build elegant solutions to complex problems. Passionate about Java, backend development, and crafting modern web experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-8 py-4 bg-white dark:bg-neutral-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-neutral-800 rounded-xl font-bold shadow-sm hover:border-slate-300 dark:hover:border-neutral-700 hover:bg-slate-50 dark:hover:bg-neutral-800 transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex gap-6 mt-6 items-center">
            <span className="text-slate-400 dark:text-neutral-500 font-medium text-sm uppercase tracking-wider">Connect with me</span>
            <div className="h-px w-12 bg-slate-200 dark:bg-neutral-800"></div>
            <a href="https://github.com/RUSHILPATEL33" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-neutral-400 hover:text-accent-blue dark:hover:text-white transition-colors p-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-slate-100 dark:border-neutral-800">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/rushil-patel-487054312/" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-neutral-400 hover:text-accent-blue transition-colors p-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-slate-100 dark:border-neutral-800">
              <FaLinkedin size={22} />
            </a>
            <a href="mailto:rushilp274@gmail.com" className="text-slate-500 dark:text-neutral-400 hover:text-accent-blue transition-colors p-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-slate-100 dark:border-neutral-800">
              <FaEnvelope size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* No decorative shapes - clean look */}
          
          <img 
            src={heroImage} 
            alt="Rushil Patel - Anime Developer" 
            className="w-full max-w-lg object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] rounded-3xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
