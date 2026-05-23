import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 py-12 border-t border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <div className="text-2xl font-space font-bold tracking-tighter text-white">
                Rushil<span className="text-accent-blue">Patel</span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Building elegant solutions to complex problems. Focused on modern web aesthetics and scalable systems.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/RUSHILPATEL33" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-accent-blue hover:text-white transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rushil-patel-487054312/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-accent-blue hover:text-white transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:rushilp274@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-accent-blue hover:text-white transition-all">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Rushil Patel. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
