import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Abu Bakar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;