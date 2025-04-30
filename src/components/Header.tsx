import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Particles/Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0">
            <img 
              src="https://i.ibb.co/rmbfJRW/Profile-Pic-for-Linked-In.jpg"
              alt="Abu Bakar"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-4xl md:text-5xl font-bold mb-1">Abu Bakar</h1>
              <div className="flex ml-4 gap-1">
                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-light mb-4 text-blue-200">
              <span className="font-medium">ML Developer</span> & <span className="font-medium">CS Student</span>
            </h2>
            
            <p className="max-w-2xl text-blue-100 mb-6 hidden md:block">
              Passionate about creating intelligent systems that solve real-world problems through data-driven approaches.
              Focused on developing models with high accuracy and practical applications.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
              <a 
                href="/Abubakar_Resume.pdf" 
                download="Abubakar_Resume.pdf"
                className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center gap-2 transition-all shadow-md"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>
              <a 
                href="mailto:abubakarp789@gmail.com" 
                className="bg-transparent hover:bg-white/10 border border-white/30 text-white py-2 px-4 rounded-md flex items-center gap-2 transition-all"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex flex-col gap-3 ml-auto text-sm bg-white/10 rounded-lg backdrop-blur-sm p-4 border border-white/20">
            <a href="mailto:abubakarp789@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail size={16} className="text-blue-300" />
              abubakarp789@gmail.com
            </a>
            <a href="tel:03480472778" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone size={16} className="text-blue-300" />
              03288251821
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-300" />
              Pakistan
            </span>
            <a href="https://linkedin.com/in/abubakar56" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Linkedin size={16} className="text-blue-300" />
              linkedin.com/in/abubakar56
            </a>
            <a href="https://github.com/abubakarp789" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Github size={16} className="text-blue-300" />
              github.com/abubakarp789
            </a>
          </div>
        </div>
        
        {/* Mobile Contact Info */}
        <div className="md:hidden flex flex-wrap justify-center gap-4 mt-6 text-sm">
          <a href="mailto:abubakarp789@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Mail size={14} className="text-blue-300" />
            abubakarp789@gmail.com
          </a>
          <a href="tel:03480472778" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Phone size={14} className="text-blue-300" />
            03480472778
          </a>
          <a href="https://linkedin.com/in/abubakar56" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Linkedin size={14} className="text-blue-300" />
            LinkedIn
          </a>
          <a href="https://github.com/abubakarp789" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Github size={14} className="text-blue-300" />
            GitHub
          </a>
        </div>
      </div>
      
      {/* Tech decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70"></div>
    </header>
  );
}