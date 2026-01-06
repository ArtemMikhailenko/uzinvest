'use client';

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center px-4" style={{ height: 'calc(50vh - 32px)' }}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Главное число */}
        <div className="mb-3">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-2xl">
            531,479
          </h1>
        </div>

        {/* Текст */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 tracking-wide">
          НАМ ДОВЕРЯЮТ
        </h2>

        {/* Кнопка CTA */}
        <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm font-bold rounded-full hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all shadow-2xl">
          Начать инвестировать
        </button>
      </div>
    </section>
  );
}
