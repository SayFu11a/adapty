import Hero from "@/components/Hero";
import SDKSection from "@/components/SDKSection";
import SDKPlatforms from "@/components/SDKPlatforms";
import ABTestingSection from "@/components/ABTestingSection"; // ← НОВОЕ
import RefundSaverSection from "@/components/RefundSaverSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SDKPlatforms />
      <SDKSection />
      <ABTestingSection /> {/* ← НОВОЕ */}
      <RefundSaverSection />
      <TestimonialsSlider />
      {/* Статистика */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Adapty обрабатывает доход от подписок
            <br />
            <span className="text-purple-500">
              с самым высоким SLA уровнем в индустрии
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">$2 млрд</div>
              <div className="text-gray-400">обрабатываемого дохода</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">99.99%</div>
              <div className="text-gray-400">времени безотказной работы</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">2.5 млрд</div>
              <div className="text-gray-400">обслуживаемых пользователей</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">60 млрд</div>
              <div className="text-gray-400">обращений к API / месяц</div>
            </div>
          </div>
        </div>
      </section>
      {/* Компании */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 mb-12">
            Доверяют более 15,000+ приложений
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-gray-800">FEELD</div>
            <div className="text-3xl font-bold text-gray-800">bumble</div>
            <div className="text-3xl font-bold text-gray-800">weewoo</div>
          </div>
        </div>
      </section>
    </main>
  );
}
