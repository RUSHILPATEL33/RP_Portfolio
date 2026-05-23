import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCodeBranch } from 'react-icons/fa';
import aboutImage from '../assets/about-image.png';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-accent-blue">Me</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* LEFT: Image | RIGHT: Text + Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <img
                src={aboutImage}
                alt="About Rushil Patel"
                className="w-full max-w-md object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite] rounded-3xl"
              />
            </motion.div>

            {/* RIGHT: Text + Skill Cards */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              {/* Bio text */}
              <div className="space-y-5 text-slate-600 dark:text-neutral-400 text-lg leading-relaxed">
                <p>
                  I am a passionate developer currently expanding my expertise in{' '}
                  <span className="text-slate-900 dark:text-white font-semibold">
                    Java, Data Structures &amp; Algorithms, backend development, and cloud technologies.
                  </span>
                </p>
                <p>
                  I thrive on building projects from scratch and love taking on developer side quests—like building my own custom Git version control system to understand the internals of tools we use daily.
                </p>
                <p>
                  Beyond personal projects, I actively participate in open source communities and am continuously striving to sharpen my problem-solving skills to build robust, scalable applications.
                </p>
              </div>

              {/* Skill Cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <FaCode className="text-blue-500 text-2xl" />, title: "Frontend & Java", desc: "Building interactive UIs and solid Java logic." },
                  { icon: <FaServer className="text-purple-500 text-2xl" />, title: "Backend Systems", desc: "Designing REST APIs and database schemas." },
                  { icon: <FaCodeBranch className="text-emerald-500 text-2xl" />, title: "Open Source", desc: "Contributing to community-driven projects." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 6 }}
                    className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-slate-100 dark:border-neutral-800 hover:border-blue-100 dark:hover:border-neutral-700 group transition-all"
                  >
                    <div className="p-3 bg-slate-50 dark:bg-neutral-900 rounded-xl group-hover:bg-white dark:group-hover:bg-neutral-800 transition-colors shadow-sm flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-neutral-200 mb-1">{item.title}</h3>
                      <p className="text-slate-500 dark:text-neutral-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
