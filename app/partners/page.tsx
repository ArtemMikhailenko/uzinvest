'use client';

import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function PartnersPage() {
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
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">Наши </span>
            <span className="text-[#0099D8]">партнеры</span>
          </h2>
          <Team />
        </div>
      </section>
      <Footer />
    </div>
  );
}
