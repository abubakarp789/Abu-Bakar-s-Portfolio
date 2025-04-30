import { CalendarClock, MapPin } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "Namal University Mianwali",
      location: "Mianwali, Pakistan",
      period: "Oct '22 - Current",
      courses: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Artificial Intelligence",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Compiler Construction",
        "Theory of Automata",
        "Data Analysis & Visualization",
        "Information Security",
        "Cloud Computing"
      ]
    },
    {
      degree: "Intermediate in Pre-Engineering",
      institution: "Shah Abdul Latif Government Degree College Mirpur Khas",
      location: "Mirpur Khas, Pakistan",
      period: "Oct '20 - Jun '22",
      percentage: "82%",
      courses: [
        "Physics",
        "Chemistry",
        "Mathematics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Education</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Academic Background</h2>
          <p className="text-gray-600">
            My educational journey has given me a strong foundation in computer science
            with specialization in data science and machine learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 px-6 text-white">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-blue-100">{edu.institution}</p>
              </div>
              
              <div className="p-6">
                {/* Meta information */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <CalendarClock size={16} className="text-blue-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-blue-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                {/* Courses */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Relevant Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}