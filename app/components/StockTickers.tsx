'use client';

import { useState, useEffect } from 'react';

const initialStocks = [
  {
    id: 1,
    name: 'Uzbekneftegaz',
    symbol: 'UNG',
    price: '1 305.83',
    change: -0.01,
    icon: 'https://www.ung.uz/images/main-logo.svg',
    link: 'https://www.ung.uz/'
  },
  {
    id: 2,
    name: 'Uztransgaz',
    symbol: 'UTG',
    price: '1 072.26',
    change: -0.05,
    icon: 'https://utg.uz/local/templates/utg/media/img/logo.svg',
    link: 'https://utg.uz/en/'
  },
  {
    id: 3,
    name: 'Uzbekenergo',
    symbol: 'UZE',
    price: '578.60',
    change: 0.14,
    icon: 'https://www.uzbekembassy.in/wp-content/uploads/2017/12/unnamed.jpg',
    link: 'https://www.uzbekembassy.in/uzbekenergo-international-cooperation-is-expanding/'
  },
  {
    id: 4,
    name: 'Национальный банк',
    symbol: 'NBU',
    price: '234.12',
    change: 0.10,
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/NBU_new_logo.jpg/500px-NBU_new_logo.jpg',
    link: 'https://en.wikipedia.org/wiki/National_Bank_of_Uzbekistan'
  },
];

export default function StockTickers() {
  const [activeTab, setActiveTab] = useState<'stocks' | 'crypto'>('stocks');
  const [stocks, setStocks] = useState(initialStocks);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => ({
          ...stock,
          change: Number((stock.change + (Math.random() - 0.5) * 0.02).toFixed(2))
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4 px-4" style={{ minHeight: 'calc(55vh - 32px)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Белый контейнер */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          {/* Табы */}
          <div className="grid grid-cols-2 pt-5 px-8 border-b border-gray-200">
            <div className="flex justify-center">
              <button
                onClick={() => setActiveTab('stocks')}
                className={`text-base font-semibold pb-3 border-b-3 transition-colors ${
                  activeTab === 'stocks'
                    ? 'text-gray-900 border-b-2 border-[#1EB53A]'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                }`}
              >
                Акции
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setActiveTab('crypto')}
                className={`text-base font-semibold pb-3 border-b-3 transition-colors ${
                  activeTab === 'crypto'
                    ? 'text-gray-900 border-b-2 border-[#1EB53A]'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                }`}
              >
                Крипто
              </button>
            </div>
          </div>

          {/* Тикеры акций */}
          {activeTab === 'stocks' && (
            <div className="pt-5 pb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {stocks.map((stock) => (
                  <a
                    key={stock.id}
                    href={stock.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-18 h-18 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                        <img src={stock.icon} alt={stock.name} className="w-16 h-16 object-contain" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-semibold text-xs leading-tight">
                          {stock.name}
                        </h3>
                        <p className="text-gray-500 text-[10px]">{stock.symbol}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900 font-semibold text-xs">{stock.price}</p>
                      <p className="text-[9px] text-gray-500 font-medium">UZS</p>
                      <p className={`text-[10px] font-semibold ${
                        stock.change >= 0 ? 'text-[#1EB53A]' : 'text-[#CE1126]'
                      }`}>
                        {stock.change >= 0 ? '+' : ''}{stock.change}%
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Кнопка все активы */}
              <div className="mt-5">
                <a
                  href="https://ru.tradingview.com/markets/currencies/rates-asia/"
                  className="block w-full py-1.5 text-center bg-gradient-to-r from-[#0099D8] to-[#1EB53A] md:bg-white text-white md:text-gray-900 font-semibold text-sm hover:shadow-lg transition-all"
                >
                  Все 200+ активов →
                </a>
              </div>
            </div>
          )}

          {/* Крипто (заглушка) */}
          {activeTab === 'crypto' && (
            <div className="p-12 text-center text-gray-400">
              <p>Раздел криптовалют в разработке</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
