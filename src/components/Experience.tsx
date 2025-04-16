import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'AI/ML Fellow',
      company: 'GDGoC FAST Peshawar Campus',
      period: "Mar '25 - Present",
      description: [
        'Working on hands-on Machine Learning curriculum, gaining experience in building and deploying models.',
        'Key tasks include Data Preprocessing, Exploratory Data Analysis, Supervised ML Models, Unsupervised ML Models, and Capstone Projects.',
        'Developing an HR Attrition Predictor to identify employee turnover factors and display insights through a Streamlit app.'
      ]
    },
    {
      title: 'Machine Learning Fellow',
      company: 'Bytewise Limited',
      period: "Jun '24 - Sep '24",
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
      description: [
        'Developed a calculator application using HTML and CSS.',
        'Created a landing page for a gym.',
        'Built a personal portfolio website.'
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-600 mb-2">{exp.company}</p>
              <p className="text-gray-600 text-sm mb-3">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}