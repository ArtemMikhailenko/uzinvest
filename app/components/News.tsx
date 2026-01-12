'use client';

import { useAddToHomeScreen } from '../hooks/useAddToHomeScreen';

export default function News() {
  const { promptInstall } = useAddToHomeScreen();
  
  return (
    <section className=" px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок секции */}
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center pb-2">
          Новости
        </h2>

        {/* Карточка новости */}
        <div className=" p-8  transition-all bg-white/10 backdrop-blur-sm rounded-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold text-black/70 mb-4">
            Узбекистан усиливает позиции на мировом рынке золота
          </h3>
          
          <div className="space-y-4 font-medium text-black/90 leading-relaxed text-sm md:text-base">
            <p>
              Узбекистан продолжает укреплять свою роль одного из ключевых игроков на мировом рынке золота. 
              В 2025 году страна увеличила объёмы добычи и переработки драгоценного металла, опираясь на 
              модернизацию производственных мощностей и внедрение цифровых технологий в горнодобывающий сектор.
            </p>
            
            <p>
              Государственные инвестиции направлены на расширение Навоийского горно-металлургического комбината, 
              а также на развитие инфраструктуры для глубокой переработки золота внутри страны. Это позволяет 
              не только наращивать экспорт, но и увеличивать добавленную стоимость продукции.
            </p>
            
            <p>
              Эксперты отмечают, что золото остаётся стратегическим активом для финансовой стабильности Узбекистана, 
              а рост интереса иностранных инвесторов подтверждает устойчивость и прозрачность экономических реформ 
              в стране.
            </p>
          </div>
        </div>

        {/* Изображение phone.png */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <img 
            src="/images/phone.png" 
            alt="Mobile App" 
            className="max-w-sm w-full h-auto object-contain drop-shadow-2xl"
          />
          
          {/* Кнопка Начать */}
          <button 
            onClick={promptInstall}
            className="px-12 py-4 bg-[#FFC107] text-black text-lg font-bold rounded-full hover:bg-[#FFB300] transform hover:scale-105 transition-all shadow-lg"
            style={{
              boxShadow: '0 10px 30px rgba(255, 193, 7, 0.4)',
            }}
          >
            Начать
          </button>
        </div>
       
      </div>
    </section>
  );
}
