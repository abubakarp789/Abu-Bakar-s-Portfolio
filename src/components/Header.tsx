import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://i.ibb.co/rmbfJRW/Profile-Pic-for-Linked-In.jpg"
                alt="Abu Bakar"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            
            <div>
              <motion.h1 
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Abu Bakar
              </motion.h1>
              <motion.h2 
                className="text-2xl mb-6 text-blue-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Computer Science Student
              </motion.h2>
              
              <motion.div 
                className="flex flex-wrap gap-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a href="tel:03480472778" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Phone size={16} />
                  03480472778
                </a>
                <a href="mailto:abubakarp789@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Mail size={16} />
                  abubakarp789@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Pakistan
                </span>
                <a href="https://linkedin.com/in/abubakar56" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Linkedin size={16} />
                  Abu Bakar
                </a>
                <a href="https://github.com/abubakarp789" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Github size={16} />
                  Abu Bakar
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}