import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LineChart, Database, Twitter, Users, GraduationCap } from 'lucide-react';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "Tweet Virality Predictor",
      organization: "GDGoC UMT Data Analysis Bootcamp",
      description: "A machine learning application that predicts tweet virality using Random Forest and Logistic Regression. Features include content analysis, sentiment analysis, and timing features with 85% accuracy.",
      icon: <Twitter className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974",
      link: "https://github.com/abubakarp789/Viral_or_Not-Predicting_Virality_of_Tweets"
    },
    {
      title: "HR Attrition Predictor",
      organization: "GDGoC FAST Peshawar AI/ML Fellowship",
      description: "A Machine Learning-powered Streamlit app that predicts employee attrition with 97.96% accuracy. Features include workforce pattern visualization and actionable insights through a Decision Tree Classifier.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
      link: "https://github.com/abubakarp789/HR-Attrition-Predictor"
    },
    {
      title: "Churn Predictor",
      organization: "Bytewise Fellowship",
      description: "A Flask web application that predicts customer churn using machine learning. Features include data preprocessing, exploratory analysis, and real-time predictions with multiple model implementations.",
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      link: "https://github.com/abubakarp789/Churn_Predictor"
    },
    {
      title: "Student Report Card Generator",
      organization: "CodeX Computing Co. Internship",
      description: "A comprehensive system for generating student report cards in multiple formats (Text, Word, PDF). Features include automated grade calculation and customizable report templates.",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974",
      link: "https://github.com/abubakarp789/Python-Internship-CodeX-Computing-Co"
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