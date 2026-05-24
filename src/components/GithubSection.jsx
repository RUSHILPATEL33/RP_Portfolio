import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GithubSection = () => {
  const username = "RUSHILPATEL33";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDark();

    const observer = new MutationObserver(checkDark);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="github"
      className="py-24 bg-slate-50 dark:bg-black relative transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
          >
            GitHub{" "}
            <span className="text-slate-800 dark:text-neutral-300">
              Contributions
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-slate-800 dark:bg-slate-200 mx-auto rounded-full"
          />
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-neutral-900/50 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-neutral-800 flex justify-center overflow-x-auto transition-colors duration-300"
        >
          <img
            src={`https://ghchart.rshah.org/${isDark ? 'a855f7' : '0f172a'}/${username}`}
            alt="GitHub Contribution Graph"
            className="min-w-[800px]"
          />
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-neutral-800 flex flex-col items-center justify-center transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-slate-700 dark:text-neutral-200 mb-4">
              GitHub Stats
            </h3>

            <img
              loading="lazy"
              src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=${isDark ? 'tokyonight' : 'default'}`}
              alt="GitHub Stats"
              className="w-full max-w-md rounded-xl"
            />
          </motion.div>

          {/* Languages Used */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-3xl shadow-sm border border-slate-200 dark:border-neutral-800 flex flex-col items-center justify-center transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-slate-700 dark:text-neutral-200 mb-4">
              Languages Used
            </h3>

            <object
              data="https://wakatime.com/share/@rushilpatel_33/597a7522-57ab-4be9-98de-75135c8317fa.svg"
              type="image/svg+xml"
              className="w-full max-w-md rounded-xl"
              style={{ filter: isDark ? 'invert(1) hue-rotate(180deg)' : 'none' }}
            >
              <img
                src="https://wakatime.com/share/@rushilpatel_33/597a7522-57ab-4be9-98de-75135c8317fa.svg"
                alt="Languages Used"
                className="w-full max-w-md rounded-xl"
              />
            </object>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GithubSection;