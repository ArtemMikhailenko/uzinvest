'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import StockTickers from './components/StockTickers';
import Projects from './components/Projects';
import Licenses from './components/Licenses';
import Team from './components/Team';
import News from './components/News';
import MobileApp from './components/MobileApp';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Общий фон флага Узбекистана для всей страницы */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/images/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Звёзды и полумесяц */}
        {/* <div className="absolute top-8 left-8 flex items-start gap-2">
          <div className="text-white text-4xl">☾</div>
          <div className="grid grid-cols-4 gap-1 mt-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="text-white text-xs">✦</div>
            ))}
          </div>
        </div> */}
        
        {/* Красные линии-разделители */}
        {/* <div className="absolute top-[12%] left-0 right-0 h-[2px] bg-[#CE1126]"></div> */}
        {/* <div className="absolute top-[13%] left-0 right-0 h-[2px] bg-[#CE1126]"></div> */}
      </div>

      <Header />
      <Hero />
      <StockTickers />
      <News />
      <Footer />
    </div>
  );
}

