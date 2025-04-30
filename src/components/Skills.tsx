export default function Skills() {
  const technicalSkills = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Data Preprocessing', level: 95 },
    { name: 'Exploratory Data Analysis', level: 92 },
    { name: 'Supervised Learning', level: 90 },
    { name: 'Unsupervised Learning', level: 85 },
    { name: 'Artificial Intelligence', level: 88 },
    { name: 'Python', level: 95 },
    { name: 'Generative AI', level: 82 },
    { name: 'Large Language Models', level: 80 },
    { name: 'Prompt Engineering', level: 85 },
    { name: 'Data Analysis', level: 90 },
    { name: 'Data Visualization', level: 85 },
    { name: 'Problem Solving', level: 90 }
  ];

  const toolsSkills = [
    { name: 'Scikit-learn', category: 'Machine Learning' },
    { name: 'TensorFlow', category: 'Deep Learning' },
    { name: 'Pandas', category: 'Data Analysis' },
    { name: 'NumPy', category: 'Data Manipulation' },
    { name: 'Matplotlib', category: 'Data Visualization' },
    { name: 'Seaborn', category: 'Data Visualization' },
    { name: 'Flask', category: 'Web Framework' },
    { name: 'Streamlit', category: 'Web App' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Jupyter', category: 'Development' },
    { name: 'SQL', category: 'Database' },
    { name: 'Postman API', category: 'API Testing' },
    { name: 'ChatGPT', category: 'AI Tools' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Expertise</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Technical Skills & Tools</h2>
          <p className="text-gray-600">
            My technical skillset is focused on data science and machine learning techniques,
            with expertise in both traditional and cutting-edge approaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">Core Competencies</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools and Technologies Column */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {toolsSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative"
                >
                  <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all cursor-default">
                    {skill.name}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 whitespace-nowrap">
                    {skill.category}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures', 
                  'Algorithms', 
                  'Public Speaking', 
                  'Technical Writing', 
                  'Project Management',
                  'AI Strategy',
                  'Datasets'
                ].map((skill, i) => (
                  <span key={i} className="bg-gray-50 text-gray-600 text-sm px-3 py-1 rounded-full border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}