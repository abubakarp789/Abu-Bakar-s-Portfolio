import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Python Developer Intern',
      company: 'CodeX Computing Co.',
      period: "Mar '25 - Current",
      location: "Remote",
      type: "Internship",
      description: [
        'Developed a comprehensive Student Report Card Generator system supporting multiple formats (Text, Word, PDF).',
        'Implemented automated grade calculations and performance analysis features.',
        'Completed weekly assignments focusing on Python programming and real-world applications.',
        'Built practical applications using Python libraries like ReportLab and docx for document generation.'
      ]
    },
    {
      title: 'AI/ML Fellow',
      company: 'GDGoC FAST Peshawar Campus',
      period: "Mar '25 - April '25",
      location: "Remote",
      type: "Fellowship",
      description: [
        'Working on hands-on Machine Learning curriculum, gaining experience in building and deploying models.',
        'Key tasks include Data Preprocessing, Exploratory Data Analysis, Supervised ML Models, Unsupervised ML Models, and Capstone Projects.',
        'Developing an HR Attrition Predictor to identify employee turnover factors and display insights through a Flask web app.'
      ]
    },
    {
      title: 'Machine Learning Fellow',
      company: 'Bytewise Limited',
      period: "Jun '24 - Sep '24",
      location: "Remote",
      type: "Fellowship",
      description: [
        'Worked with machine learning techniques including clustering, neural networks, and predictive modeling.',
        'Completed projects like customer churn prediction and Formula 1 race outcomes prediction.',
        'Built web applications with Flask for model deployment and gained experience in data processing and analysis.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Codesoft',
      period: "Oct '23",
      location: "Remote",
      type: "Internship",
      description: [
        'Developed a calculator application using HTML and CSS.',
        'Created a landing page for a gym.',
        'Built a personal portfolio website.'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Professional Journey</h2>
          <p className="text-gray-600">
            My professional experiences have equipped me with practical skills in machine learning,
            data science, and software development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-8 ml-4 md:ml-8">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[42px] top-0 w-6 h-6 bg-white rounded-full border-4 border-blue-500"></div>
                
                {/* Experience card */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="border-b border-gray-100 p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight size={16} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}