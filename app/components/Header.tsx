'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

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
    <header className="w-full">
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
            <a href="/faq" className="text-white hover:text-[#1EB53A] transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Курс валют и кнопка */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-white">
              <span className="text-sm font-medium">UZS/USD:</span>
              <span className="text-[#1EB53A] font-semibold">
                {exchangeRate ? exchangeRate.toLocaleString('ru-RU') : '...'}
              </span>
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
