'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Устанавливаем начальное значение только на клиенте
    setExchangeRate(12850);

    // Получение реального курса валют
    const fetchExchangeRate = async () => {
      try {
        // Используем API для получения реального курса UZS/USD
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates && data.rates.UZS) {
          setExchangeRate(Math.round(data.rates.UZS));
        }
      } catch (error) {
        console.error('Ошибка получения курса валют:', error);
        // Если API недоступен, используем примерный курс
        setExchangeRate(12850);
      }
    };

    fetchExchangeRate();
    // Обновление каждые 5 минут
    const interval = setInterval(fetchExchangeRate, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full relative">
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

          {/* Навигация - десктоп */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Главная
            </a>
            <a href="/about" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              О нас
            </a>
            <a href="/projects" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Проекты
            </a>
            <a href="/licenses" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Лицензии
            </a>
            <a href="/team" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              Сотрудники
            </a>
            <a href="#faq" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-4">
            {/* Курс валют */}
            <div className="hidden sm:flex items-center gap-2 text-white">
              <span className="text-sm font-medium">UZS/USD:</span>
              <span className="text-[#1EB53A] font-semibold">
                {exchangeRate ? exchangeRate.toLocaleString('ru-RU') : '...'}
              </span>
            </div>

            {/* Бургер меню - мобильные */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#1A3A5C]/95 backdrop-blur-lg border-t border-white/10 shadow-2xl z-50">
            <nav className="flex flex-col p-4 space-y-3">
              <a 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                Главная
              </a>
              <a 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                О нас
              </a>
              <a 
                href="/projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                Проекты
              </a>
              <a 
                href="/licenses" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                Лицензии
              </a>
              <a 
                href="/team" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                Сотрудники
              </a>
              <a 
                href="#faq" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#1EB53A] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-white/10"
              >
                FAQ
              </a>
              
              {/* Курс валют в мобильном меню */}
              <div className="flex items-center gap-2 text-white py-2 px-4 border-t border-white/10 mt-2 pt-4">
                <span className="text-sm font-medium">UZS/USD:</span>
                <span className="text-[#1EB53A] font-semibold">
                  {exchangeRate ? exchangeRate.toLocaleString('ru-RU') : '...'}
                </span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
