'use client';

export default function MobileApp() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Текстовый контент */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight drop-shadow-lg">
              Торговать удобно.{' '}
              <span className="block mt-2">Всегда и везде.</span>
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
              UzInvest — инвестиции в ключевые активы экономики Узбекистана
            </p>
            
            {/* Кнопка CTA */}
            <button 
              className="px-9 py-3.5 bg-[#1EB53A] text-white text-lg font-semibold rounded-[14px] hover:bg-[#17A130] transform hover:scale-105 transition-all inline-flex items-center gap-2"
              style={{
                boxShadow: '0 10px 30px rgba(30, 181, 58, 0.3)',
              }}
            >
              Начать инвестировать
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Мокап телефона */}
          <div className="flex-1 flex justify-center lg:justify-end z-10">
            <div className="relative">
              {/* Мягкая тень */}
              <div 
                className="absolute inset-0 blur-3xl transform translate-y-8 opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(0,153,216,0.4) 0%, transparent 70%)',
                }}
              ></div>
              
              {/* Телефон */}
              <div className="relative w-[300px] h-[610px] bg-gradient-to-br from-gray-900 to-black rounded-[55px] p-3 shadow-2xl border border-gray-800">
                {/* Экран */}
                <div className="w-full h-full bg-white rounded-[48px] overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-50"></div>
                  
                  {/* Контент экрана - светлый интерфейс */}
                  <div className="pt-16 px-4 bg-gradient-to-b from-[#F8FBFF] to-white h-full">
                    {/* Хедер */}
                    <div className="flex items-center justify-between mb-6 px-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 bg-gradient-to-br from-[#0099D8] to-[#1EB53A] rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">U</span>
                        </div>
                        <span className="text-gray-900 font-semibold text-sm">UzInvest</span>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-gray-500">Баланс</p>
                        <p className="text-xs font-semibold text-gray-900">80.2M UZS</p>
                      </div>
                    </div>

                    {/* Основная карточка баланса */}
                    <div className="bg-gradient-to-br from-[#0099D8] to-[#0077BB] rounded-2xl p-4 mb-5 shadow-lg">
                      <p className="text-white/80 text-xs mb-0.5">Портфель</p>
                      <p className="text-white text-2xl font-bold mb-1.5">80,256,200</p>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#1EB53A] bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                          ↑ +2.4%
                        </span>
                        <span className="text-white/70 text-[10px]">+435.4K UZS</span>
                      </div>
                    </div>

                    {/* Список активов */}
                    <div className="space-y-2.5">
                      <h3 className="text-gray-900 font-semibold text-xs px-1 mb-2.5">Мои активы</h3>
                      
                      {/* Uzbekneftegaz */}
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-base">🛢️</span>
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold text-xs">Uzbekneftegaz</p>
                              <p className="text-gray-500 text-[10px]">1,305.83 UZS</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-900 font-semibold text-xs">+4.24</p>
                            <p className="text-[#1EB53A] text-[10px] font-medium">+0.81%</p>
                          </div>
                        </div>
                      </div>

                      {/* Uztransgaz */}
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-base">⚡</span>
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold text-xs">Uztransgaz</p>
                              <p className="text-gray-500 text-[10px]">1,072.26 UZS</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-900 font-semibold text-xs">-8.64</p>
                            <p className="text-[#CE1126] text-[10px] font-medium">-0.34%</p>
                          </div>
                        </div>
                      </div>

                      {/* Uzbekenergo */}
                      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-base">💡</span>
                            </div>
                            <div>
                              <p className="text-gray-900 font-semibold text-xs">Uzbekenergo</p>
                              <p className="text-gray-500 text-[10px]">578.60 UZS</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-900 font-semibold text-xs">+2.28</p>
                            <p className="text-[#1EB53A] text-[10px] font-medium">+0.4%</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Нижнее меню */}
                    <div className="absolute bottom-5 left-0 right-0 px-4">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2.5">
                        <div className="flex items-center justify-around">
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-8 h-8 bg-[#0099D8] rounded-lg flex items-center justify-center">
                              <span className="text-white text-sm">📊</span>
                            </div>
                            <span className="text-[10px] text-gray-600 font-medium">Рынок</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm">💼</span>
                            </div>
                            <span className="text-[10px] text-gray-400">Портфель</span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm">👤</span>
                            </div>
                            <span className="text-[10px] text-gray-400">Профиль</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Кнопка Home */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
