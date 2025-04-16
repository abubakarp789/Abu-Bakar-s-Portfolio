import React from 'react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor's degree in computer science",
      institution: "Namal University Mianwali",
      period: "Oct '22 - Aug '26",
      courses: "PF, OOP, Data Structures, Design and Analysis of Algorithms, Databases, Operating System, Computer Networks, Software Engineering, Compiler Construction, Theory of Automata, Artificial Intelligence, Data Analysis and Visualization, Information Security, Cloud Computing"
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "Shah Abdul Latif Government Degree College Mirpur Khas",
      period: "Oct '20 - Jun '22",
      gpa: "82%",
      courses: "Physics, Chemistry, Mathematics"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-600">{edu.institution}</p>
              <p className="text-gray-600">{edu.period}</p>
              {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
              <p className="text-gray-700 mt-2">
                <span className="font-medium">Relevant Courses:</span> {edu.courses}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}