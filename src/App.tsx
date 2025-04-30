import Header from './components/Header.tsx';
import Summary from './components/Summary.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Education from './components/Education.tsx';
import Certifications from './components/Certifications.tsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="max-w-6xl mx-auto">
        <Summary />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-slate-50 z-0" aria-hidden="true" />
          <Projects />
        </div>
        <Experience />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Abu Bakar. All rights reserved.</p>
          <p className="text-blue-200 text-sm">Computer Science Student & Machine Learning Developer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;