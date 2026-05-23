import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 dark:text-white"
          >
            Get In <span className="text-accent-blue">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          ></motion.div>
          <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto">
            Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-neutral-900 text-accent-blue dark:text-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-neutral-200">Email</h4>
                <a href="mailto:rushilp274@gmail.com" className="text-slate-500 dark:text-neutral-400 hover:text-accent-blue transition-colors">
                  rushilp274@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-50 dark:bg-neutral-900 text-accent-purple dark:text-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-neutral-200">Location</h4>
                <p className="text-slate-500 dark:text-neutral-400">
                  Remote / Global
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-neutral-900 text-emerald-500 dark:text-neutral-300 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-neutral-200">Phone</h4>
                <p className="text-slate-500 dark:text-neutral-400">
                  +1 (234) 567-890
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white dark:bg-neutral-900/80 p-8 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-neutral-800 transition-colors duration-300"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-neutral-300">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-3 bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-neutral-700 text-slate-800 dark:text-white transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-neutral-300">Your Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-neutral-700 text-slate-800 dark:text-white transition-all placeholder-slate-400 dark:placeholder-slate-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-neutral-300">Subject</label>
                <input type="text" placeholder="Project Discussion" className="w-full px-5 py-3 bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-neutral-700 text-slate-800 dark:text-white transition-all placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-neutral-300">Message</label>
                <textarea rows="4" placeholder="Hello, I'd like to talk about..." className="w-full px-5 py-3 bg-slate-50 dark:bg-neutral-900/50 border border-slate-200 dark:border-neutral-800 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-blue-100 dark:focus:ring-neutral-700 text-slate-800 dark:text-white transition-all resize-none placeholder-slate-400 dark:placeholder-slate-500"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-neutral-200 transition-colors shadow-md"
              >
                Send Message <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
