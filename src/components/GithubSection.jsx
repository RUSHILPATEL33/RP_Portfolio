import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const GithubSection = () => {
  const username = "RUSHILPATEL33";
  const [statsError, setStatsError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Basic check for dark mode
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    
    // Listen for theme changes (optional but good for sync)
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" className="py-24 bg-slate-50 dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
          >
            GitHub <span className="text-slate-800 dark:text-neutral-300">Contributions</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-slate-800 dark:bg-slate-200 mx-auto rounded-full"
          ></motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-neutral-900/50 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-neutral-800 flex flex-col items-center overflow-x-auto transition-colors duration-300"
        >
          <div className="w-full max-w-full overflow-x-auto pb-4 custom-scrollbar flex justify-center dark:text-white">
            <GitHubCalendar 
              username={username} 
              colorScheme={isDark ? "dark" : "light"}
              blockSize={14}
              blockMargin={6}
              fontSize={14}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-neutral-800 flex flex-col items-center justify-center transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-slate-700 dark:text-neutral-200 mb-4">GitHub Stats</h3>
            {!statsError ? (
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${isDark ? 'dark' : 'transparent'}&hide_border=true&title_color=${isDark ? 'fff' : '0f172a'}&text_color=${isDark ? 'cbd5e1' : '475569'}&icon_color=3b82f6`} 
                alt="GitHub Stats" 
                className="w-full max-w-md"
                onError={() => setStatsError(true)}
              />
            ) : (
              <div className="w-full h-40 flex items-center justify-center text-slate-400 text-sm font-medium border border-dashed border-slate-200 dark:border-neutral-800 rounded-xl">
                Stats temporarily unavailable.
              </div>
            )}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-neutral-800 flex flex-col items-center justify-center transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-slate-700 dark:text-neutral-200 mb-4">Top Languages</h3>
            {!statsError ? (
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${isDark ? 'dark' : 'transparent'}&hide_border=true&title_color=${isDark ? 'fff' : '0f172a'}&text_color=${isDark ? 'cbd5e1' : '475569'}`} 
                alt="Top Languages" 
                className="w-full max-w-sm"
                onError={() => setStatsError(true)}
              />
            ) : (
              <div className="w-full h-40 flex items-center justify-center text-slate-400 text-sm font-medium border border-dashed border-slate-200 dark:border-neutral-800 rounded-xl">
                Languages data unavailable.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
