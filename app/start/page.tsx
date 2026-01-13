'use client';

import { useEffect } from 'react';

export default function StartPage() {
  useEffect(() => {
    // Немедленный редирект на внешний сайт
    window.location.href = 'https://my.traderoom.pro/auth/login';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1929]">
      <div className="text-center">
        <img 
          src="/logo-loading.png" 
          alt="UzInvest" 
          className="w-32 h-32 mx-auto mb-4 animate-pulse"
        />
        <p className="text-white text-xl">Загрузка...</p>
      </div>
    </div>
  );
}
