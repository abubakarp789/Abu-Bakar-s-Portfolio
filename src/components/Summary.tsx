import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Sparkles, Bot } from 'lucide-react';

export default function Summary() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Brain size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-600">Experienced in predictive modeling, data analysis, and ML model deployment</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Sparkles size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Generative AI</h3>
            <p className="text-gray-600">Working with cutting-edge generative models and AI applications</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Bot size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
            <p className="text-gray-600">Developing intelligent systems and AI-powered solutions</p>
          </motion.div>
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto"
        >
          I am Abu Bakar, a BS Computer Science student with a strong passion for coding and creative programming. 
          With expertise in C++, front-end development, and machine learning, I have successfully completed various projects, 
          including predictive modeling and Churn Prediction in ML. My experience as a Machine Learning Fellow at Bytewise 
          has honed my problem-solving skills and technical proficiency.
        </motion.p>
      </motion.div>
    </section>
  );
}