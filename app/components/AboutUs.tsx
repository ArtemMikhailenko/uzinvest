'use client';

export default function AboutUs() {
  return (
    <section className="relative py-16 px-4">
      <div className="relative max-w-7xl mx-auto">
        {/* Верхний блок с заголовком, текстом и фото */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16 lg:items-start">
          {/* Левая колонка - текст */}
          <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              О компании UzInvest
            </h2>
            <p className="text-white/90 text-base leading-relaxed">
              UzInvest — современная инвестиционная платформа, созданная для 
              развития частных и институциональных инвестиций в экономику Узбекистана. 
              Мы объединяем технологические решения, аналитический подход 
              и стратегическое видение, чтобы сделать инвестиции доступными, прозрачными и понятными для 
              широкого круга инвесторов.
            </p>
          </div>

          {/* Правая колонка - изображение телефона */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end items-center">
            <img 
              src="/images/phone.png" 
              alt="UzInvest App" 
              className="max-w-xs w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Подход и философия */}
        <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            Подход и философия
          </h3>
          <p className="text-white/90 text-base leading-relaxed">
            В основе UzInvest лежит понимание того, что инвестиции — это инструмент роста, 
            ответственности и будущих возможностей. Мы рассматриваем их как способ участия 
            в развитии ключевых отраслей экономики, формирования капитала и укрепления 
            финансовой стабильности.
          </p>
        </div>

        {/* История и ценности UzInvest */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Левая колонка - текст */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              История и ценности UzInvest
            </h3>
            <p className="text-white/90 text-base leading-relaxed">
              UzInvest был создан при участии специалистов с опытом в финансах, инвестиционном 
              анализе и цифровых платформах. Проект вырос из идеи сформировать единое 
              инвестиционное пространство.
            </p>
          </div>

          {/* Правая колонка - галочки */}
          <div className="space-y-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="text-[#1EB53A] text-2xl">✓</span>
              <span className="text-white text-lg">Качественные активности</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#1EB53A] text-2xl">✓</span>
              <span className="text-white text-lg">Профессионализм и ответственность</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#1EB53A] text-2xl">✓</span>
              <span className="text-white text-lg">Развитие и устойчивый рост</span>
            </div>
          </div>
        </div>

        {/* Инвестиционные возможности */}
        <div className="mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-white mb-4">
            Инвестиционные возможности
          </h3>
          <p className="text-white/90 text-base leading-relaxed">
            В предыдущей проходит аналитическую оценку с точки зрения устойчивости, потенциала 
            развития, и полноэкспортного инвентаризм.
          </p>
        </div>

        {/* Блок с маркированным списком */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Левая колонка - заключительный текст */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-white mb-4">
              UzInvest
            </h3>
            <p className="text-white/90 text-base leading-relaxed mb-4">
              — это инвестиции в развитие, устойчивость и будущее.
            </p>
            <p className="text-white/90 text-base leading-relaxed">
              Осознанный выбор для тех, кто смотрит вперёд и ценит надёжность.
            </p>
          </div>

          {/* Правая колонка - список */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-4xl font-bold text-white mb-6">
              Почему выбирают UzInvest
            </h3>
            <ul className="space-y-3 text-white/90 text-base">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Фокус на экономике Узбекистана на</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Прозрачные и понятные инвестиционные решения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Современная цифровая платформа</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Доступность для начинающих и опытных инвесторов</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span>Стратегический и долгосрочный подход</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
