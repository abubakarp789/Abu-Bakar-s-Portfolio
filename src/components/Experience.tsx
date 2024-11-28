import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'Machine Learning Fellow',
      company: 'Bytewise Limited',
      period: "June '24 - Sep '24",
      description: [
        'Worked on multiple machine learning projects involving data processing, model implementation.',
        'Developed and deployed machine learning models to predict product sales based on historical data.',
        'Participated in weekly sprints and collaborated with peers to enhance project outcomes.'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'CodeSoft',
      period: "Oct '23",
      description: [
        'Developed a calculator application, demonstrating my ability to create functional and user-friendly digital tools.',
        'Designed a visually appealing and effective landing page for a gym.',
        'Created a personal portfolio to present information in a structured and professional manner.'
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