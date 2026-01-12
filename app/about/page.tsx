'use client';

import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative pt-22">
      {/* Общий фон */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/images/bg.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
}
