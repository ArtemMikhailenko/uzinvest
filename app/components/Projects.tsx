'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      category: 'Золото',
      categoryColor: 'bg-yellow-500',
      title: 'Навоийский горно-металлургический комбинат (НГМК)',
      description: 'Один из крупнейших горно-металлургических комплексов Центральной Азии и стратегическое предприятие по добыче и переработке золота.',
      profit: '+12.4%',
      profitChange: '+2.8% за месяц',
      isProfitable: true,
      image: '/images/projects/1.JPG',
      imageAlt: 'Карьер НГМК с тяжелой техникой'
    },
    {
      id: 2,
      category: 'Медь',
      categoryColor: 'bg-red-500',
      title: 'Алмалыкский горно-металлургический комбинат (АГМК)',
      description: 'Ведущий производитель меди и редких металлов в Узбекистане, специализирующийся на добыче, обогащении и переработке медной руды.',
      profit: '+8.7%',
      profitChange: '+1.2% за месяц',
      isProfitable: true,
      image: '/images/projects/2.JPG',
      imageAlt: 'Металлургический завод АГМК'
    },
    {
      id: 3,
      category: 'Финансы',
      categoryColor: 'bg-cyan-500',
      title: 'Национальный банк Узбекистана',
      description: 'Крупнейший финансовый институт страны, поддерживающий экономическое развитие Узбекистана и стабильность национальной валюты.',
      profit: '+15.2%',
      profitChange: '+3.4% за месяц',
      isProfitable: true,
      image: '/images/projects/3.JPG',
      imageAlt: 'Здание Национального банка Узбекистана'
    },
    {
      id: 4,
      category: 'Нефтегаз',
      categoryColor: 'bg-green-600',
      title: '«Узбекнефтегаз»',
      description: 'Ведущая нефтегазовая компания, занимающаяся разведкой, добычей и переработкой углеводородного сырья в Узбекистане.',
      profit: '+9.3%',
      profitChange: '+1.8% за месяц',
      isProfitable: true,
      image: '/images/projects/4.JPG',
      imageAlt: 'Нефтяные качалки на закате'
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Проекты
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Инвестируйте в ключевые отрасли экономики Узбекистана
          </p>
        </div>

        {/* Список проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl h-auto min-h-[270px] shadow-2xl cursor-pointer"
            >
              {/* Фоновое изображение */}
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />
                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              </div>

              {/* Контент */}
              <div className="relative h-full flex flex-col p-5 md:p-8 items-center">
                {/* Тег категории */}
                <div className="mb-auto">
                  <span className={`inline-block px-3 py-1.5 md:px-4 md:py-2 ${project.categoryColor} text-white text-xs md:text-sm font-semibold rounded-full shadow-lg`}>
                    {project.category}
                  </span>
                </div>

                {/* Нижняя часть */}
                <div className="mt-auto">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base mb-3 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>

                  {/* Прибыльность - только на десктопе */}
                  <div className="hidden md:flex flex-wrap items-center gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-2.5 border border-white/20">
                      <p className="text-xs text-white/70 mb-0.5">Доходность</p>
                      <p className={`text-xl font-bold ${project.isProfitable ? 'text-[#1EB53A]' : 'text-[#CE1126]'}`}>
                        {project.profit}
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-2.5 border border-white/20">
                      <p className="text-xs text-white/70 mb-0.5">Изменение</p>
                      <p className={`text-base font-semibold ${project.isProfitable ? 'text-[#1EB53A]' : 'text-[#CE1126]'}`}>
                        {project.profitChange}
                      </p>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <button className="w-full md:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-yellow-400 text-black text-sm md:text-base font-bold rounded-xl hover:bg-yellow-300 active:bg-yellow-300 transform hover:scale-105 active:scale-105 transition-all shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-2">
                    Начать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
