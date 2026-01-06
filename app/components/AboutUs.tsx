'use client';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#1A3A5C] mb-4">
            О компании UzInvest
          </h2>
          <p className="text-xl text-[#1A3A5C]/80 max-w-3xl mx-auto">
            Современная инвестиционная платформа для развития экономики Узбекистана
          </p>
        </div>

        {/* Основная карточка */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border border-white/50">
          <p className="text-lg text-[#1A3A5C]/90 leading-relaxed mb-8">
            <strong className="text-[#0099D8] text-2xl">UzInvest</strong> — современная инвестиционная платформа, созданная для 
            развития частных и институциональных инвестиций в экономику Узбекистана. 
            Мы объединяем технологические решения, аналитический подход и стратегическое 
            видение, чтобы сделать инвестиции доступными, прозрачными и понятными для 
            широкого круга инвесторов.
          </p>

          {/* Статистика */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#0099D8]/10 to-[#0099D8]/5 rounded-2xl p-6 border border-[#0099D8]/20">
              <div className="text-4xl font-bold text-[#0099D8] mb-2">531,479</div>
              <div className="text-sm text-[#1A3A5C]/70">Активных инвесторов</div>
            </div>
            <div className="bg-gradient-to-br from-[#1EB53A]/10 to-[#1EB53A]/5 rounded-2xl p-6 border border-[#1EB53A]/20">
              <div className="text-4xl font-bold text-[#1EB53A] mb-2">24/7</div>
              <div className="text-sm text-[#1A3A5C]/70">Поддержка клиентов</div>
            </div>
            <div className="bg-gradient-to-br from-[#CE1126]/10 to-[#CE1126]/5 rounded-2xl p-6 border border-[#CE1126]/20">
              <div className="text-4xl font-bold text-[#CE1126] mb-2">100%</div>
              <div className="text-sm text-[#1A3A5C]/70">Прозрачность</div>
            </div>
          </div>
        </div>

        {/* Две колонки с контентом */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Подход и философия */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0099D8] to-[#1EB53A] rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1A3A5C] mb-4">
              Подход и философия
            </h3>
            <p className="text-[#1A3A5C]/80 leading-relaxed">
              В основе UzInvest лежит понимание того, что инвестиции — это инструмент роста, 
              ответственности и будущих возможностей. Мы рассматриваем их как способ участия 
              в развитии ключевых отраслей экономики, формирования капитала и укрепления 
              финансовой стабильности.
            </p>
          </div>

          {/* История и ценности */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1EB53A] to-[#0099D8] rounded-2xl flex items-center justify-center mb-4">
              <span className="text-3xl">🏛️</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1A3A5C] mb-4">
              История и ценности
            </h3>
            <p className="text-[#1A3A5C]/80 leading-relaxed mb-6">
              UzInvest был создан при участии специалистов с опытом в финансах, инвестиционном 
              анализе и цифровых платформах. Проект вырос из идеи сформировать единое 
              инвестиционное пространство.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#1EB53A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-[#1A3A5C] font-medium">Прозрачность операций</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#1EB53A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-[#1A3A5C] font-medium">Профессионализм команды</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#1EB53A] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-[#1A3A5C] font-medium">Устойчивый рост</span>
              </div>
            </div>
          </div>
        </div>

        {/* Почему выбирают UzInvest - широкая карточка */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border border-white/50">
          <h3 className="text-3xl font-bold text-[#1A3A5C] mb-8 text-center">
            Почему выбирают UzInvest
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0099D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🇺🇿</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A3A5C] mb-1">Фокус на Узбекистан</h4>
                <p className="text-sm text-[#1A3A5C]/70">Экспертиза в местной экономике</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1EB53A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A3A5C] mb-1">Прозрачность</h4>
                <p className="text-sm text-[#1A3A5C]/70">Понятные инвестиционные решения</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0099D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A3A5C] mb-1">Цифровая платформа</h4>
                <p className="text-sm text-[#1A3A5C]/70">Современные технологии</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1EB53A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">👥</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A3A5C] mb-1">Доступность</h4>
                <p className="text-sm text-[#1A3A5C]/70">Для начинающих и опытных</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0099D8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A3A5C] mb-1">Стратегия</h4>
                <p className="text-sm text-[#1A3A5C]/70">Долгосрочный подход</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1EB53A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🔒</span>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A3A5C] mb-1">Надёжность</h4>
                <p className="text-sm text-[#1A3A5C]/70">Защита ваших активов</p>
              </div>
            </div>
          </div>
        </div>

        {/* Финальная цитата и CTA */}
        <div className="bg-gradient-to-br from-[#0099D8] via-[#1EB53A] to-[#0099D8] rounded-3xl p-1 shadow-2xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-[22px] p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-6 leading-relaxed">
              <strong className="text-[#1EB53A]">UzInvest</strong> — это инвестиции в развитие,<br className="hidden md:block" /> 
              устойчивость и будущее
            </p>
            <p className="text-lg text-[#1A3A5C]/70 mb-8 max-w-2xl mx-auto">
              Осознанный выбор для тех, кто смотрит вперёд и ценит надёжность
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-[#1EB53A] to-[#17A130] text-white text-lg font-bold rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all">
              Начать инвестировать
            </button>
          </div>
        </div>
      </div>

      {/* Мокап телефона - отдельно справа */}
      <div className="hidden lg:block absolute right-8 top-32 z-20">
        <div className="relative">
          {/* Дополнительный фон для телефона */}
          <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-[#0099D8]/20 to-[#1EB53A]/20 rounded-full blur-3xl"></div>
          
          {/* Телефон */}
          <div className="relative w-[300px] h-[610px] bg-gradient-to-br from-gray-900 to-black rounded-[55px] p-3 shadow-2xl border border-gray-800">
            {/* Экран */}
            <div className="w-full h-full bg-white rounded-[48px] overflow-hidden relative">
              {/* Dynamic Island */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full z-50"></div>
              
              {/* Контент экрана */}
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
                    <p className="text-xs font-semibold text-gray-900">86.7M UZS</p>
                  </div>
                </div>

                {/* Карточка с иконкой глобуса */}
                <div className="bg-white rounded-2xl p-4 mb-5 shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500 mb-1">Портфель</p>
                    <p className="text-2xl font-bold text-gray-900">86,780,000</p>
                    <p className="text-xs text-gray-500">UZS</p>
                    <p className="text-[#1EB53A] text-[10px] mt-1">+3844.800 UZS (0.08%)</p>
                  </div>
                  <div className="w-16 h-16 bg-[#1EB53A]/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🌐</span>
                  </div>
                </div>

                {/* Список компаний */}
                <div className="space-y-2.5">
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-base">💧</span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-xs">Uzbekneftegaz</p>
                          <p className="text-gray-500 text-[10px]">1,272.33 UZS</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#1EB53A] text-xs font-semibold">+4.24</p>
                        <p className="text-[#1EB53A] text-[10px]">(0.33%)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-base">⚡</span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-xs">Uztransgaz</p>
                          <p className="text-gray-500 text-[10px]">1,023.45 UZS</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#CE1126] text-xs font-semibold">-9.702</p>
                        <p className="text-[#CE1126] text-[10px]">(-0.93%)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-base">💡</span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-xs">Uzbekenergo</p>
                          <p className="text-gray-500 text-[10px]">563.89 UZS</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#1EB53A] text-xs font-semibold">+2.78</p>
                        <p className="text-[#1EB53A] text-[10px]">(+0.49%)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Нижнее меню */}
                <div className="absolute bottom-5 left-0 right-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-center justify-around">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <span className="text-sm">📊</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Акции</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <span className="text-sm">≋</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Портфель</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <span className="text-sm">📈</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Новости</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                        <span className="text-sm">≡</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Меню</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
