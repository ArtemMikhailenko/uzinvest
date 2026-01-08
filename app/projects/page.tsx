'use client';

import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Общий фон */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Header />
      <Projects />
      <Footer />
    </div>
  );
}
