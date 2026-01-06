'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [exchangeRate, setExchangeRate] = useState(12850);

  useEffect(() => {
    // Симуляция получения курса валют
    const updateRate = () => {
      // Реальный курс UZS/USD колеблется около 12,800-12,900
      const baseRate = 12850;
      const fluctuation = Math.random() * 100 - 50; // +/- 50
      setExchangeRate(Math.round(baseRate + fluctuation));
    };

    updateRate();
    const interval = setInterval(updateRate, 30000); // Обновление каждые 30 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0099D8] to-[#1EB53A] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <span className="text-white font-semibold text-xl tracking-tight">
                uz<span className="text-[#1EB53A]">i</span>nvest
              </span>
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Главная
            </a>
            <a href="#about" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              О нас
            </a>
            <a href="#projects" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Проекты
            </a>
            <a href="#licenses" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Лицензии
            </a>
            <a href="#team" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Сотрудники
            </a>
          </nav>

          {/* Курс валют и кнопка */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-white">
              <span className="text-sm font-medium">UZS/USD:</span>
              <span className="text-[#1EB53A] font-semibold">{exchangeRate.toLocaleString()}</span>
            </div>
            {/* <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all">
              Выход
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
