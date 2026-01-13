'use client';

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Виктория Алексеева',
      position: 'Главный менеджер по привлечению клиентов',
      image: '/images/team/viktoria.jpg'
    },
    {
      id: 2,
      name: 'Максим Каримов',
      position: 'Главный специалист по привлечению клиентов',
      image: '/images/team/karimov.jpg'
    },
    {
      id: 3,
      name: 'Олег Старков',
      position: 'Руководитель отдела по цифровой трансформации и управлению проектами',
      image: '/images/team/starkov.jpg'
    },
    {
      id: 4,
      name: 'Дониёр Ахмедов',
      position: 'Начальник отдела по брокерскому обслуживанию клиентов',
      image: '/images/team/donier.jpg'
    },
    {
      id: 5,
      name: 'Фахриддин Нарзыкулов',
      position: 'Руководитель отдела продаж',
      image: '/images/team/fahridin.jpg'
    },
    {
      id: 6,
      name: 'Каримов Зафар',
      position: 'Генеральный директор',
      image: '/images/team/zafar.jpg'
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
                  className="w-full h-32 md:h-64 bg-cover bg-top transition-transform duration-500 group-hover:scale-110"
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
