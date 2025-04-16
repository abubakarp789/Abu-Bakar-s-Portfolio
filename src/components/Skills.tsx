import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const topSkills = [
    'Machine Learning',
    'Data Preprocessing',
    'Exploratory Data Analysis',
    'Supervised Learning',
    'Unsupervised Learning',
    'Artificial Intelligence (AI)',
    'Python',
    'Generative AI',
    'Large Language Models (LLM)',
    'Prompt Engineering',
    'API Development',
    'Front-End Development'
  ];

  const minorSkills = [
    'HTML5',
    'CSS',
    'GitHub',
    'Microsoft Office',
    'Postman API',
    'ChatGPT',
    'Data Analysis',
    'Data Structures',
    'Algorithms',
    'Public Speaking',
    'Social Media Marketing',
    'Teaching'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Primary Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {topSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full 
                             shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {minorSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full 
                             hover:bg-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}