'use client';

export default function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Логотип и название */}
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-[#0099D8] to-[#1EB53A] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-white font-semibold text-lg">
              uz<span className="text-[#1EB53A]">i</span>nvest
            </span> */}
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
