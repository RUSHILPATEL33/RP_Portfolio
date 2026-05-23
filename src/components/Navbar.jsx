import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { Link } from 'react-scroll';
import clsx from 'clsx';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'GitHub', to: 'github' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-space font-bold tracking-tighter dark:text-white"
          >
            Rushil<span className="text-accent-blue">Patel</span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-accent-blue font-semibold"
              className="text-slate-600 dark:text-neutral-300 hover:text-accent-blue dark:hover:text-white cursor-pointer font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <button onClick={toggleDark} className="p-2 rounded-full text-slate-600 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors">
            {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-5 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-md"
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDark} className="p-2 rounded-full text-slate-600 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors">
            {isDark ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-neutral-200 focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6 shadow-xl border-t border-slate-100 dark:border-neutral-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 dark:text-neutral-300 hover:text-accent-blue dark:hover:text-white cursor-pointer text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
