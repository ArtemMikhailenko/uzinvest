'use client';

export default function News() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок секции */}
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Новости
        </h2>

        {/* Карточка новости */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
          <h3 className="text-2xl font-bold text-white mb-4">
            Узбекистан усиливает позиции на мировом рынке золота
          </h3>
          
          <div className="space-y-4 text-white/80 leading-relaxed">
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

        {/* Кнопка */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block text-white/60 hover:text-white transition-colors underline text-lg"
          >
            Читать все новости →
          </a>
        </div>
      </div>
    </section>
  );
}
