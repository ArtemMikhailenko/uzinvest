'use client';

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Омарбеков Куаныш Алтынбекович',
      position: 'Главный директор по производству',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces'
    },
    {
      id: 2,
      name: 'Юсупов Менржан Бахитович',
      position: 'Председатель правления',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces'
    },
    {
      id: 3,
      name: 'Кошербаев Дастан Ермекович',
      position: 'Главный директор по стратегии и международному развитию',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces'
    },
    {
      id: 4,
      name: 'Сагиндыков Даржан Танатович',
      position: 'Главный директор по закупкам и общим вопросам',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces'
    },
    {
      id: 5,
      name: 'Байгужин Владислав Ерханович',
      position: 'Главный директор по коммерции, член правления',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces'
    },
    {
      id: 6,
      name: 'Хасенов Аскат Галимович',
      position: 'Член правления',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces'
    }
  ];

  return (
    <section id="team" className="relative py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1A3A5C] mb-4">
            Наши сотрудники
          </h2>
        </div>

        {/* Сетка сотрудников */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          {team.map((member) => (
            <div 
              key={member.id}
              className="group bg-white/80 backdrop-blur-sm rounded-xl md:rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Фото */}
              <div className="overflow-hidden">
                <div 
                  className="w-full h-32 md:h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${member.image})`,
                  }}
                />
              </div>

              {/* Информация */}
              <div className="p-3 md:p-6">
                <h3 className="text-xs md:text-xl font-bold text-[#1A3A5C] mb-1 md:mb-2 leading-tight">
                  {member.name}
                </h3>
                <p className="text-[#1A3A5C]/70 text-[10px] md:text-sm leading-relaxed">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
