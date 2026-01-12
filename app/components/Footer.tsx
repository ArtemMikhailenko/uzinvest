'use client';

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10 bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Логотип и название */}
          <div className="flex items-center gap-2">
            <img 
              src="/images/logo.png" 
              alt="UzInvest Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Копирайт */}
          <div className="text-center">
            <p className="text-white/70 text-sm">© UzInvest, 2026</p>
            <p className="text-white/60 text-xs">Все права защищены</p>
          </div>

          {/* Контакты */}
          <div className="text-right">
            {/* <p className="text-white/70 text-sm">info@uzinvest.uz</p>
            <p className="text-white/60 text-xs">+998 71 123 45 67</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
