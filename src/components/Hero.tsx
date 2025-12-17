import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero секция */}
      <section className="bg-white px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Бейджик вверху */}
          <div className="mb-8">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
              Гайд | Как вырасти до $100K | Скачать →
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ЛЕВАЯ КОЛОНКА - текст */}
            <div className="text-left">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.05]">
                Платформа
                <br />
                для роста
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  мобильных
                  <br />
                  приложений
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Сэкономьте месяцы на внедрении подписок и удвойте доход от
                приложения благодаря эффективному управлению пейволлами.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                  type="email"
                  placeholder="Email адрес"
                  className="px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm flex-1 max-w-[280px]"
                />
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all text-sm">
                  Начать →
                </button>
              </div>

              <button className="text-purple-600 font-semibold hover:underline text-sm">
                Запись на демо →
              </button>
            </div>

            {/* ПРАВАЯ КОЛОНКА - картинки */}
            <div className="relative h-[450px] lg:h-[600px] w-full">
              {/* График сзади */}
              <Image
                src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
                alt="Dashboard"
                className="absolute top-1/2 right-0 -translate-y-1/2 w-full max-w-[600px] h-auto object-contain"
              />

              {/* Телефон спереди */}
              <Image
                src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
                alt="Phone"
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[280px] sm:w-[320px] h-auto z-10"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
                  animation: "float 4s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Фиолетовая секция с карточками */}
      <section className="gradient-purple py-16 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-glass rounded-2xl p-6 text-left cursor-pointer">
              <div className="text-4xl mb-3">👨‍💻</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Для разработчиков
              </h3>
              <p className="text-white/80 mb-3 text-sm">
                Подписки SDK, Сбережение на возвратах, Удалённая конфигурация,
                Резервные пейволлы
              </p>
              <a
                href="#"
                className="text-white font-semibold hover:underline text-sm"
              >
                Узнать больше →
              </a>
            </div>

            <div className="card-glass rounded-2xl p-6 text-left cursor-pointer">
              <div className="text-4xl mb-3">👔</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Для владельцев
              </h3>
              <p className="text-white/80 mb-3 text-sm">
                Аналитика доходов, Аналитика LTV, Прогнозы ИИ для LTV и доходов
              </p>
              <a
                href="#"
                className="text-white font-semibold hover:underline text-sm"
              >
                Узнать больше →
              </a>
            </div>

            <div className="card-glass rounded-2xl p-6 text-left cursor-pointer">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">
                Для маркетологов
              </h3>
              <p className="text-white/80 mb-3 text-sm">
                A/B тестирование, Конструктор без кода, Локализации,
                Ориентирование
              </p>
              <a
                href="#"
                className="text-white font-semibold hover:underline text-sm"
              >
                Узнать больше →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
