'use client';

import { useState, useEffect } from 'react';
import { useAddToHomeScreen } from '../hooks/useAddToHomeScreen';

export default function Hero() {
  const [count, setCount] = useState(531479);
  const [displayCount, setDisplayCount] = useState(531479);
  const { promptInstall } = useAddToHomeScreen();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 2000; // 2 секунды для анимации
    const steps = 60;
    const increment = (count - displayCount) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setDisplayCount(prev => {
        const newValue = prev + increment;
        if (currentStep >= steps) {
          clearInterval(timer);
          return count;
        }
        return newValue;
      });
    }, duration / steps);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <section id="hero" className="relative flex items-center justify-center px-4 pt-8 md:pt-16" style={{ height: 'calc(45vh - 32px)' }}>
      {/* Звезды и полумесяц */}
      {/* <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-start gap-2 z-10">
        <div className="text-white text-3xl md:text-4xl">☾</div>
        <div className="grid grid-cols-4 gap-1 mt-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="text-white text-xs">✦</div>
          ))}
        </div>
      </div> */}

      {/* Красные волнистые линии сверху */}
      {/* <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 100">
          <path d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 L1200,0 L0,0 Z" fill="#CE1126" opacity="0.7"/>
          <path d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,40 L1200,0 L0,0 Z" fill="#CE1126" opacity="0.5"/>
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Главное число */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl transition-all duration-300">
            {Math.floor(displayCount).toLocaleString('ru-RU')}
          </h1>
        </div>

        {/* Текст */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-wide drop-shadow-lg">
          НАМ ДОВЕРЯЮТ
        </h2>

        {/* Кнопка CTA */}
        <button 
          onClick={promptInstall}
          className="px-12 py-4 bg-[#FFC107] text-black text-lg font-bold rounded-full hover:bg-[#FFB300] transform hover:scale-105 transition-all"
          style={{
            boxShadow: '0 10px 40px rgba(255, 193, 7, 0.5), 0 6px 20px rgba(255, 193, 7, 0.3)',
          }}
        >
          Начать
        </button>
      </div>

      {/* Красные волнистые линии снизу */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden rotate-180">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 100">
          <path d="M0,30 Q150,10 300,30 T600,30 T900,30 T1200,30 L1200,0 L0,0 Z" fill="#CE1126" opacity="0.7"/>
          <path d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,40 L1200,0 L0,0 Z" fill="#CE1126" opacity="0.5"/>
        </svg>
      </div> */}
    </section>
  );
}
