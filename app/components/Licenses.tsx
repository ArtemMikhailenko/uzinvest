'use client';

export default function Licenses() {
  const documents = [
    {
      id: 1,
      title: 'Учредительные документы UzInvest',
      description: 'Свидетельство о регистрации, устав компании, учредительный договор',
      icon: '📋'
    },
    {
      id: 2,
      title: 'Коммерческая лицензия UzInvest',
      description: 'Лицензия на осуществление инвестиционной деятельности',
      icon: '🏛️'
    },
    {
      id: 3,
      title: 'Политика конфиденциальности и обработки данных',
      description: 'Обработка, хранение и защита персональных данных пользователей',
      icon: '🔒'
    },
    {
      id: 4,
      title: 'Пользовательское соглашение',
      description: 'Правила использования платформы, права и обязанности сторон',
      icon: '📜'
    },
    {
      id: 5,
      title: 'Политика AML / KYC',
      description: 'Противодействие отмыванию средств и идентификация пользователей',
      icon: '🛡️'
    },
    {
      id: 6,
      title: 'Свидетельство о регистрации инвестиционного консультанта',
      description: 'Регистрация в качестве инвестиционного консультанта',
      icon: '📊'
    },
    {
      id: 7,
      title: 'Свидетельство о налоговой регистрации',
      description: 'Налоговая регистрация компании в Республике Узбекистан',
      icon: '💼'
    },
    {
      id: 8,
      title: 'Соответствие международным стандартам',
      description: 'Сертификаты соответствия международным финансовым стандартам',
      icon: '🌐'
    }
  ];

  return (
    <section id="licenses" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Лицензии и документы
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Полный пакет документов для прозрачной и безопасной работы
          </p>
        </div>

        {/* Сетка документов */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-white/20 hover:shadow-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center min-h-[140px] md:min-h-[160px]"
            >
              {/* Кнопка Открыть */}
              <button className="mb-3 md:mb-4 px-4 md:px-6 py-1.5 md:py-2 bg-[#1EB53A] text-white text-xs md:text-sm font-semibold rounded-full hover:bg-[#17A130] transition-colors shadow-lg">
                Открыть
              </button>

              {/* Заголовок */}
              <h3 className="text-xs md:text-base font-bold text-white leading-tight">
                {doc.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        {/* <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-white/50">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0099D8] to-[#1EB53A] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A3A5C] mb-4">
              © UzInvest, 2026
            </h3>
            <p className="text-lg text-[#1A3A5C]/80 leading-relaxed mb-2">
              Все права защищены
            </p>
            <p className="text-base text-[#1A3A5C]/70 leading-relaxed">
              UzInvest работает в полном соответствии с законодательством Республики Узбекистан. 
              Все операции проходят под контролем регулирующих органов, что гарантирует 
              безопасность ваших инвестиций.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
