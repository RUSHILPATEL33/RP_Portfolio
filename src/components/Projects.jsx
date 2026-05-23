import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const projectData = [
  {
    title: 'Build Your Own Git',
    description: 'A custom version control system inspired by Git internals. Built from scratch to deeply understand how objects, commits, and refs work under the hood.',
    tags: ['Java', 'File I/O', 'SHA-1', 'Data Structures'],
    github: 'https://github.com/RUSHILPATEL33/build-your-own-git',
    live: '#',
  },
  {
    title: 'Hackathon Project',
    description: 'A full-stack collaborative application built during a 48-hour hackathon. Features real-time updates, secure authentication, and a responsive modern UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/RUSHILPATEL33',
    live: '#',
  }
];

const sideQuestsData = [
  {
    title: 'Custom Shell in C',
    description: 'Planning to build a Unix-like shell from scratch to learn about processes, signals, and system calls.',
    status: 'Upcoming'
  },
  {
    title: 'Distributed Key-Value Store',
    description: 'A side quest to implement a basic distributed database using consensus algorithms like Raft.',
    status: 'Idea Phase'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-accent-blue">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-50 dark:bg-neutral-900/50 border border-slate-100 dark:border-neutral-800 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-neutral-500/10 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-100 dark:bg-neutral-900 text-blue-600 dark:text-neutral-300 rounded-xl group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <FaFolderOpen size={28} />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 dark:text-neutral-500 hover:text-slate-800 dark:hover:text-white transition-colors">
                    <FaGithub size={22} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 dark:text-neutral-500 hover:text-accent-blue transition-colors">
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-accent-blue transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-neutral-400 mb-6 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white dark:bg-neutral-800/50 border border-slate-200 dark:border-neutral-800 text-slate-600 dark:text-neutral-300 text-sm font-medium rounded-full shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Quests Section */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">Developer Side Quests</h3>
            <div className="flex-1 h-px bg-slate-200 dark:bg-neutral-800"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideQuestsData.map((quest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-dashed border-slate-300 dark:border-neutral-800 bg-slate-50/50 dark:bg-neutral-900/30 hover:bg-slate-50 dark:hover:bg-neutral-800/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-neutral-900 flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-neutral-400 font-bold text-sm">
                  0{index + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-slate-700 dark:text-neutral-200">{quest.title}</h4>
                    <span className="px-2 py-0.5 bg-slate-200 dark:bg-neutral-800 text-slate-600 dark:text-neutral-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {quest.status}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-neutral-400 text-sm">{quest.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
