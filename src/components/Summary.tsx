import { Brain, Database, LineChart, Bot } from 'lucide-react';

export default function Summary() {
  const skills = [
    {
      icon: <LineChart size={28} className="text-blue-500" />,
      title: "Machine Learning",
      description: "Developing ML models with 95%+ accuracy using supervised and unsupervised techniques. Expertise in classification, regression, and clustering algorithms."
    },
    {
      icon: <Database size={28} className="text-blue-500" />,
      title: "Data Science",
      description: "Mastery in data preprocessing, exploratory analysis, and deriving actionable insights from complex datasets with visualization expertise."
    },
    {
      icon: <Bot size={28} className="text-blue-500" />,
      title: "Generative AI",
      description: "Building applications using Large Language Models and implementing prompt engineering techniques for optimal AI performance."
    },
    {
      icon: <Brain size={28} className="text-blue-500" />,
      title: "Deep Learning",
      description: "Creating neural network architectures for complex pattern recognition tasks and efficient model optimization."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">CS Student & Machine Learning Developer</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            I am a Computer Science student and Machine Learning Developer with expertise in machine learning model development,
            data analysis, and AI implementation. My portfolio showcases projects with industry-leading accuracy rates and practical applications
            across diverse domains. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">My Expertise at a Glance</h3>
              <p className="text-blue-100">
                As a BS Computer Science student and Machine Learning Developer, I have developed
                high-accuracy machine learning models including the HR Attrition Predictor (97.96%),
                Tweet Virality Predictor, and customer churn analysis tools. My experience
                at Bytewise and GDGoC has refined my ability to build practical AI solutions
                that deliver measurable business value.
              </p>
            </div>
            <div className="md:w-1/3 flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-blue-200 mb-1">Machine Learning</p>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-blue-300 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                  <p className="text-right text-xs mt-1 text-blue-200">98%</p>
                </div>
                <div>
                  <p className="text-xs text-blue-200 mb-1">Data Engineering</p>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-blue-300 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-right text-xs mt-1 text-blue-200">95%</p>
                </div>
                <div>
                  <p className="text-xs text-blue-200 mb-1">Generative AI</p>
                  <div className="w-full bg-white/20 rounded-full h-2.5">
                    <div className="bg-blue-300 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-right text-xs mt-1 text-blue-200">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}