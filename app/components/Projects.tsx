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
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=1200&h=600&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200&h=600&fit=crop',
      imageAlt: 'Нефтяные качалки на закате'
    },
    {
      id: 5,
      category: 'Химическая промышленность',
      categoryColor: 'bg-purple-600',
      title: 'Навоиазот',
      description: 'Ведущее предприятие по производству минеральных удобрений и химической продукции, обеспечивающее сельское хозяйство региона.',
      profit: '+11.6%',
      profitChange: '+2.3% за месяц',
      isProfitable: true,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
      imageAlt: 'Химическое производство Навоиазот'
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
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl h-[400px] ${
                index < 2 ? 'h-[500px]' : 'h-[400px]'
              }`}
            >
              {/* Фоновое изображение */}
              <div className="absolute inset-0">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />
                {/* Градиентный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
              </div>

              {/* Контент */}
              <div className="relative h-full flex flex-col p-8 md:p-12">
                {/* Тег категории */}
                <div className="mb-auto">
                  <span className={`inline-block px-5 py-2 ${project.categoryColor} text-white text-sm font-semibold rounded-full shadow-lg`}>
                    {project.category}
                  </span>
                </div>

                {/* Нижняя часть */}
                <div className="max-w-2xl mt-auto">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Прибыльность */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
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
                  <button className="px-7 py-3 bg-[#1EB53A] text-white text-base font-semibold rounded-xl hover:bg-[#17A130] transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
                    Начать
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
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
