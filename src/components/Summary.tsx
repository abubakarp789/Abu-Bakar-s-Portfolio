import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Sparkles, Code, Database } from 'lucide-react';

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
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Brain size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-600">Expert in predictive modeling, data analysis, and ML model deployment. Specialized in building high-accuracy models for real-world applications.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Sparkles size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Generative AI</h3>
            <p className="text-gray-600">Proficient in developing and implementing cutting-edge generative models, including LLMs and AI-powered applications.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Code size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
            <p className="text-gray-600">Experienced in full-stack development with expertise in Python, C++, and modern web technologies.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Database size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Science</h3>
            <p className="text-gray-600">Proficient in data preprocessing, exploratory analysis, and deriving actionable insights from complex datasets.</p>
          </motion.div>
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto"
        >
          I am Abu Bakar, a BS Computer Science student and AI/ML Fellow at GDGoC FAST Peshawar, with a strong passion for 
          artificial intelligence and software development. With expertise in machine learning, data science, and full-stack 
          development, I have successfully completed various projects including the HR Attrition Predictor (97.96% accuracy) 
          and Tweet Virality Predictor. My experience as a Machine Learning Fellow at Bytewise and GDGoC has honed my problem-solving skills and technical proficiency, 
          enabling me to develop innovative solutions to complex challenges.
        </motion.p>
      </motion.div>
    </section>
  );
}