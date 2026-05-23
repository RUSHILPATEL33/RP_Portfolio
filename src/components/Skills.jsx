import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'Java', level: 90, color: 'from-orange-400 to-red-500' },
  { name: 'Data Structures & Algorithms', level: 85, color: 'from-blue-400 to-indigo-500' },
  { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-500' },
  { name: 'React', level: 75, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js & Express.js', level: 70, color: 'from-green-400 to-emerald-500' },
  { name: 'MongoDB', level: 75, color: 'from-emerald-500 to-green-600' },
  { name: 'PostgreSQL', level: 65, color: 'from-blue-500 to-cyan-600' },
  { name: 'Git & GitHub', level: 85, color: 'from-slate-600 to-slate-800' },
  { name: 'REST APIs', level: 80, color: 'from-purple-400 to-pink-500' },
  { name: 'Azure Fundamentals', level: 60, color: 'from-blue-400 to-blue-600' },
  { name: 'C Programming', level: 75, color: 'from-indigo-400 to-purple-500' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-accent-purple">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-neutral-900/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-neutral-800 hover:shadow-md transition-all group backdrop-blur-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 dark:text-neutral-200 text-lg group-hover:text-accent-blue transition-colors">{skill.name}</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-neutral-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-neutral-800 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                  className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
