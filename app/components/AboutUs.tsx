'use client';

export default function AboutUs() {
  return (
    <section className="relative py-8 md:py-16 px-4">
      <div className="relative max-w-7xl mx-auto">
        {/* Верхний блок с заголовком, текстом и фото */}
        <div className="relative grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-6 lg:gap-16 mb-8 md:mb-16 lg:items-start overflow-visible">
          {/* Левая колонка - текст */}
          <div className="col-span-2 lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-xl  rounded-xl md:rounded-2xl p-4 md:p-6 mb-0 md:mb-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1A3A5C] mb-4 md:mb-6">
              О компании<br />
              UzInvest
            </h2>
            <p className="text-[#1A3A5C]/90 text-sm md:text-base leading-relaxed">
              UzInvest — современная инвестиционная платформа, созданная для 
              развития частных и институциональных инвестиций в экономику Узбекистана. 
              Мы объединяем технологические решения, аналитический подход 
              и стратегическое видение, чтобы сделать инвестиции доступными, прозрачными и понятными для 
              широкого круга инвесторов.
            </p>
          </div>

          {/* Правая колонка - изображение телефона */}
          <div className="col-span-1 lg:col-span-2 relative absolute right-6 lg:relative  flex justify-center lg:justify-end w-[150px] md:w-[320px]">
            <img 
              src="/images/phone.png" 
              alt="UzInvest App" 
              className="absolute right-0 top-8 md:relative md:top-0 w-[280px] md:w-[320px] lg:w-[400px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Подход и философия */}
        <div className="mb-8 md:mb-12  bg-white/10 backdrop-blur-sm rounded-xl rounded-xl md:rounded-2xl p-4 md:p-6">
          <h3 className="text-xl md:text-3xl font-bold text-[#1A3A5C] mb-3 md:mb-4">
            Подход и философия
          </h3>
          <p className="text-[#1A3A5C]/90 text-sm md:text-base leading-relaxed">
            В основе UzInvest лежит понимание того, что инвестиции — это инструмент роста, 
            ответственности и будущих возможностей. Мы рассматриваем их как способ участия 
            в развитии ключевых отраслей экономики, формирования капитала и укрепления 
            финансовой стабильности.
          </p>
        </div>

        {/* История и ценности UzInvest */}
        <div className="grid grid-cols-1 bg-white/10 backdrop-blur-sm rounded-xl lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Левая колонка - текст */}
          <div className=" md:rounded-2xl p-4 md:p-6">
            <h3 className="text-xl md:text-3xl font-bold text-[#1A3A5C] mb-3 md:mb-4">
              История и ценности UzInvest
            </h3>
            <p className="text-[#1A3A5C]/90 text-sm md:text-base leading-relaxed">
              UzInvest был создан при участии специалистов с опытом в финансах, инвестиционном 
              анализе и цифровых платформах. Проект вырос из идеи сформировать единое 
              инвестиционное пространство.
            </p>
          </div>

          {/* Правая колонка - галочки */}
          <div className="space-y-3 md:space-y-4  rounded-xl md:rounded-2xl p-4 md:p-6">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[#1EB53A] text-xl md:text-2xl">✓</span>
              <span className="text-[#1A3A5C] text-sm md:text-lg">Качественные активности</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[#1EB53A] text-xl md:text-2xl">✓</span>
              <span className="text-[#1A3A5C] text-sm md:text-lg">Профессионализм и ответственность</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-[#1EB53A] text-xl md:text-2xl">✓</span>
              <span className="text-[#1A3A5C] text-sm md:text-lg">Развитие и устойчивый рост</span>
            </div>
          </div>
        </div>

        {/* Инвестиционные возможности */}
        <div className="mb-8 md:mb-12 bg-white/10 backdrop-blur-sm rounded-xl rounded-xl md:rounded-2xl p-4 md:p-6">
          <h3 className="text-xl md:text-3xl font-bold text-[#1A3A5C] mb-3 md:mb-4">
            Инвестиционные возможности
          </h3>
          <p className="text-[#1A3A5C]/90 text-sm md:text-base leading-relaxed">
            В предыдущей проходит аналитическую оценку с точки зрения устойчивости, потенциала 
            развития, и полноэкспортного инвентаризм.
          </p>
        </div>

        {/* Блок с маркированным списком */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Левая колонка - заключительный текст */}
          <div className=" md:rounded-2xl bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-[#1A3A5C] mb-3 md:mb-4">
              UzInvest
            </h3>
            <p className="text-[#1A3A5C]/90 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
              — это инвестиции в развитие, устойчивость и будущее.
            </p>
            <p className="text-[#1A3A5C]/90 text-sm md:text-base leading-relaxed">
              Осознанный выбор для тех, кто смотрит вперёд и ценит надёжность.
            </p>
          </div>

          {/* Правая колонка - список */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="text-2xl md:text-4xl font-bold text-[#1A3A5C] mb-4 md:mb-6">
              Почему выбирают UzInvest
            </h3>
            <ul className="space-y-2 md:space-y-3 text-[#1A3A5C]/90 text-sm md:text-base">
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#1A3A5C] mt-1">•</span>
                <span>Фокус на экономике Узбекистана</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#1A3A5C] mt-1">•</span>
                <span>Прозрачные и понятные инвестиционные решения</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#1A3A5C] mt-1">•</span>
                <span>Современная цифровая платформа</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#1A3A5C] mt-1">•</span>
                <span>Доступность для начинающих и опытных инвесторов</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <span className="text-[#1A3A5C] mt-1">•</span>
                <span>Стратегический и долгосрочный подход</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
