import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Database } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Churn Predictor",
      organization: "Bytewise Fellowship",
      description: "Developed a machine learning model to churn prediction using historical data of companies.",
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      link: "https://github.com/abubakarp789/Churn_Predictor"
    },
    {
      title: "Predicting Product Sales",
      organization: "Bytewise Fellowship",
      description: "Developed a machine learning model to predict product sales using historical data.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
      link: "https://github.com/abubakarp789/100DaysOfBytewiseFellowship/tree/main/Bytewise%20Fellowship%20Daily%20Task%20Solution/Project%2301"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {project.icon}
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-blue-600 mb-3">{project.organization}</p>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}