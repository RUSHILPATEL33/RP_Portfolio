import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPython, SiCplusplus, 
  SiPhp, SiR, SiReact, SiNextdotjs, SiAstro, SiTailwindcss, 
  SiPreact, SiD3, SiGreensock, SiFramer, SiNodedotjs, SiExpress, 
  SiDotnet, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiPrisma 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';

const techCategories = [
  {
    title: "Web & Programming",
    iconColor: "text-purple-500",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
     // { name: "R", icon: <SiR className="text-[#276DC3]" /> },
    ]
  },
  {
    title: "Frontend",
    iconColor: "text-purple-500",
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
    ]
  },
  {
    title: "Backend & APIs",
    iconColor: "text-purple-500",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="dark:text-white text-black" /> },
      { name: "REST API", icon: <TbApi className="text-gray-500" /> },
    ]
  },
  {
    title: "Databases & Storage",
    iconColor: "text-purple-500",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16 flex justify-center items-center gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-mono tracking-tighter"
          >
            <span className="text-purple-500">&lt;</span> Tech Stack <span className="text-purple-500">/&gt;</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-white">
                {category.title} <span className="text-purple-500">()</span>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center justify-center w-24 h-24 bg-white dark:bg-[#0c0c0e] rounded-xl shadow-sm border border-slate-200 dark:border-neutral-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-colors group cursor-pointer"
                  >
                    <div className="text-4xl mb-2 filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-slate-600 dark:text-neutral-400 group-hover:text-slate-900 dark:group-hover:text-neutral-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
