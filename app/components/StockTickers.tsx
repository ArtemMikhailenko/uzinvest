'use client';

import { useState } from 'react';

const stocks = [
  {
    id: 1,
    name: 'Uzbekneftegaz',
    symbol: 'UNG',
    price: '1 245 800',
    change: -0.01,
    icon: '🛢️'
  },
  {
    id: 2,
    name: 'Uztransgaz',
    symbol: 'UTG',
    price: '856 300',
    change: -0.07,
    icon: '⚡'
  },
  {
    id: 3,
    name: 'Uzbekenergo',
    symbol: 'UZE',
    price: '524 900',
    change: -0.05,
    icon: '💡'
  },
  {
    id: 4,
    name: 'Uzinvest',
    symbol: 'UZI',
    price: '689 450',
    change: -0.04,
    icon: '💰'
  },
];

export default function StockTickers() {
  const [activeTab, setActiveTab] = useState<'stocks' | 'crypto'>('stocks');

  return (
    <section className="py-6 px-4" style={{ minHeight: 'calc(50vh - 32px)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Табы */}
        <div className="flex justify-center gap-8 mb-6">
          <button
            onClick={() => setActiveTab('stocks')}
            className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === 'stocks'
                ? 'text-white border-[#1EB53A]'
                : 'text-white/60 border-transparent hover:text-white/80'
            }`}
          >
            Акции
          </button>
          <button
            onClick={() => setActiveTab('crypto')}
            className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
              activeTab === 'crypto'
                ? 'text-white border-[#1EB53A]'
                : 'text-white/60 border-transparent hover:text-white/80'
            }`}
          >
            Крипто
          </button>
        </div>

        {/* Тикеры акций */}
        {activeTab === 'stocks' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stocks.map((stock) => (
              <div
                key={stock.id}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0099D8] to-[#1EB53A] rounded-full flex items-center justify-center text-2xl">
                      {stock.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {stock.name}
                      </h3>
                      <p className="text-white/60 text-sm">{stock.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold text-lg">
                      {stock.price} <span className="text-sm text-white/60">UZS</span>
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        stock.change >= 0 ? 'text-[#1EB53A]' : 'text-[#CE1126]'
                      }`}
                    >
                      {stock.change >= 0 ? '+' : ''}
                      {stock.change}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ссылка на все активы */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-white/60 hover:text-white transition-colors underline"
          >
            Все 200+ активов&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
