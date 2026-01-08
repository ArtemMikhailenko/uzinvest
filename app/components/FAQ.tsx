'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Что такое инвестиции?',
    answer: 'Инвестиции — это размещение средств в экономические активы с целью их сохранения и потенциального роста. Это один из способов участия в развитии экономики и получения долгосрочной финансовой выгоды.',
  },
  {
    id: 2,
    question: 'Как работает UzInvest?',
    answer: 'UzInvest предоставляет доступ к ключевым активам экономики Узбекистана через удобную цифровую платформу. Вы выбираете интересующие направления и отслеживаете их динамику в режиме реального времени.',
  },
  {
    id: 3,
    question: 'В какие направления можно инвестировать?',
    answer: 'На платформе представлены активы стратегических отраслей:\n• Энергетика\n• Нефтегазовый сектор\n• Инфраструктура\n• Инвестиционные фонды\n\nЭто позволяет формировать сбалансированный инвестиционный портфель.',
  },
  {
    id: 4,
    question: 'Есть ли гарантии?',
    answer: 'Все операции осуществляются в рамках действующего законодательства. UzInvest уделяет особое внимание прозрачности процессов, защите данных и соблюдению регуляторных требований.',
  },
  {
    id: 5,
    question: 'Как я могу управлять своими средствами?',
    answer: 'Вы можете контролировать свои инвестиции онлайн, отслеживать результаты и управлять средствами через доступные финансовые инструменты, предусмотренные платформой.',
  },
  {
    id: 6,
    question: 'Подходит ли платформа для начинающих?',
    answer: 'Да. UzInvest ориентирован как на опытных инвесторов, так и на пользователей без предварительного опыта. Интерфейс платформы интуитивно понятен, а информация представлена в доступной форме.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3A5C] text-center mb-8 md:mb-16">
          Часто задаваемые вопросы
        </h2>

        {/* Список вопросов */}
        <div className="space-y-3 md:space-y-4 mb-8">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-white/50 shadow-lg transition-all"
            >
              {/* Вопрос */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-white/90 transition-colors gap-3"
              >
                <div className="flex items-center gap-3 md:gap-4 flex-1">
                  
                  {/* Текст вопроса */}
                  <span className="text-[#1A3A5C] font-semibold text-sm md:text-lg">
                    {faq.question}
                  </span>
                </div>
                {/* Иконка плюс/минус */}
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
                    {openId === faq.id ? (
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-[#1EB53A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 text-[#1EB53A]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              {/* Ответ */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                  <div className="text-[#1A3A5C]/80 text-sm md:text-base leading-relaxed whitespace-pre-line ">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Копирайт */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-[#1A3A5C] font-semibold text-base md:text-lg mb-1">
            © UzInvest, 2026
          </p>
          <p className="text-[#1A3A5C]/70 text-sm md:text-base">
            Все права защищены
          </p>
        </div>
      </div>
    </section>
  );
}
