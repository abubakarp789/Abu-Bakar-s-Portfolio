import { useState } from 'react';
import { Twitter, Users, LineChart, GraduationCap, ArrowRight, GitBranch} from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Tweet Virality Predictor",
      organization: "GDGoC UMT Data Analysis Bootcamp",
      description: "A machine learning application that predicts tweet virality using Random Forest and Logistic Regression.",
      details: [
        "Content analysis of tweet text using NLP techniques",
        "Sentiment analysis to gauge emotion impact on virality",
        "Time-based feature extraction for optimal posting windows",
        "Achieved 85% prediction accuracy with Random Forest model"
      ],
      icon: <Twitter size={24} className="text-blue-500" />,
      link: "https://github.com/abubakarp789/Viral_or_Not-Predicting_Virality_of_Tweets",
      technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Matplotlib & Seaborn"],
      color: "blue"
    },
    {
      title: "HR Attrition Predictor",
      organization: "GDGoC FAST Peshawar AI/ML Fellowship",
      description: "A Machine Learning-powered web app that predicts employee attrition with 97.96% accuracy.",
      details: [
        "Interactive visualization of workforce retention patterns",
        "Decision Tree Classifier for transparent prediction reasoning",
        "Feature importance analysis to identify attrition risk factors",
        "Actionable insights for HR department decision-making"
      ],
      icon: <Users size={24} className="text-indigo-500" />,
      link: "https://github.com/abubakarp789/HR-Attrition-Predictor",
      technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "Matplotlib & Seaborn"],
      color: "indigo"
    },
    {
      title: "Churn Predictor",
      organization: "Bytewise Fellowship",
      description: "A Flask web application that predicts customer churn using various machine learning algorithms.",
      details: [
        "Comprehensive data preprocessing pipeline",
        "Exploratory analysis dashboard for feature relationships",
        "Multiple model implementations (Random Forest, XGBoost, Logistic Regression)",
        "REST API endpoint for real-time churn predictions"
      ],
      icon: <LineChart size={24} className="text-purple-500" />,
      link: "https://github.com/abubakarp789/Churn_Predictor",
      technologies: ["Python", "Flask", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib & Seaborn"],
      color: "purple"
    },
    {
      title: "Student Report Card Generator",
      organization: "CodeX Computing Co. Internship",
      description: "A comprehensive system for generating student report cards in multiple formats (Text, Word, PDF) with automated grade calculations and performance analysis.",
      details: [
        "Automated grade calculation and performance analysis",
        "Multi-format report generation (Text, Word, PDF)",
        "Comprehensive weekly assignments and exercises",
        "Real-world application development experience"
      ],
      icon: <GraduationCap size={24} className="text-green-500" />,
      link: "https://github.com/abubakarp789/Python-Internship-CodeX-Computing-Co",
      technologies: ["Python", "ReportLab", "JSON", "docx", "File Handling"],
      color: "green"
    }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl font-bold text-gray-800">Featured ML Projects</h2>
          </div>
          <a href="https://github.com/abubakarp789" className="flex items-center gap-2 mt-4 md:mt-0 text-blue-600 hover:text-blue-700 transition-colors">
            <span>View all projects on GitHub</span>
            <GitBranch size={18} />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${project.color}-500`}></div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`bg-${project.color}-50 p-3 rounded-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-blue-600 text-sm">{project.organization}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className={`overflow-hidden transition-all duration-300 ${hoveredIndex === index ? 'max-h-80' : 'max-h-0'}`}>
                  <div className="mb-6">
                    <h4 className="text-gray-800 font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-${project.color}-600 hover:text-${project.color}-700 font-medium transition-colors`}
                  >
                    View Project <ArrowRight size={16} />
                  </a>
                  
                  <button 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
                  >
                    {hoveredIndex === index ? 'Less Details' : 'More Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}