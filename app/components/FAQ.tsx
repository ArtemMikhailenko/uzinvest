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
    <section className="relative py-24 px-4 overflow-hidden ">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Часто задаваемые вопросы
        </h2>

        {/* Список вопросов */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#2A2A2A] rounded-xl overflow-hidden border border-[#3A3A3A] transition-all"
            >
              {/* Вопрос */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#333333] transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Текст вопроса */}
                  <span className="text-white font-semibold text-lg pr-4">
                    {faq.question}
                  </span>
                </div>
                {/* Иконка минус */}
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {openId === faq.id ? (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M20 12H4"
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
                <div className="px-6 pb-6 pt-2">
                  <div className="text-white/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}
