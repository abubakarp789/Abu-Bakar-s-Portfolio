import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      title: "AI Fundamentals",
      issuer: "DataCamp",
      date: "Aug '24"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Aug '24"
    },
    {
      title: "Programming For Everybody (Python)",
      issuer: "Coursera, University of Michigan",
      date: "Jan '23"
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Coursera, Meta",
      date: "Aug '23"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg">{cert.title}</h3>
              <p className="text-blue-600">{cert.issuer}</p>
              <p className="text-gray-600 text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}