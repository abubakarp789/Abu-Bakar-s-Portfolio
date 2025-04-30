import { Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      date: "Mar '25",
      link: "#"
    },
    {
      title: "Machine Learning Fellowship",
      issuer: "Bytewise Limited",
      date: "Sep '24",
      link: "#"
    },
    {
      title: "AI Fundamentals",
      issuer: "DataCamp",
      date: "Aug '24",
      link: "#"
    },
    {
      title: "ChatGPT Fundamentals",
      issuer: "DataCamp",
      date: "Aug '24",
      link: "#"
    },
    {
      title: "Postman API Fundamentals Expert",
      issuer: "Canvas Credentials (Badgr)",
      date: "Aug '24",
      link: "#"
    },
    {
      title: "Introduction to Front-End",
      issuer: "Meta",
      date: "Aug '23",
      link: "#"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "Aug '23",
      link: "#"
    },
    {
      title: "Programming (Python)",
      issuer: "University of Michigan",
      date: "Jan '23",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">Credentials</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-800">Professional Certifications</h2>
          <p className="text-gray-600">
            I continually enhance my skills through specialized courses and certifications
            from industry-leading organizations.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                <div className="p-5">
                  <div className="flex justify-between mb-3">
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h4>
                    
                    <a 
                      href={cert.link} 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label="View certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <p className="text-blue-600 text-sm">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-1 mt-3 text-gray-500 text-xs">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Interested in my qualifications or want to collaborate?</p>
          <div className="flex justify-center gap-4">
            <a 
              href="/Abubakar_Resume.pdf" 
              download="Abubakar_Resume.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Download CV
            </a>
            <a 
              href="mailto:abubakarp789@gmail.com" 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}