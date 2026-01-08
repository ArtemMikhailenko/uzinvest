'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
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
      <FAQ />
      <Footer />
    </div>
  );
}
