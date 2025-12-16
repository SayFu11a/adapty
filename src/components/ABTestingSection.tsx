"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";

export default function ABTestingSection() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Тестируйте
              <br />
              пейволлы без
              <br />
              релизов приложения
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Управляйте пейволлами, таргетируйте их, локализуйте и
              персонализируйте не выходя из браузера.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all text-lg"
            >
              Больше про A/B-тесты <FiArrowRight className="text-xl" />
            </a>

            {/* Отзыв */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow max-w-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  S
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">smartist</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                «Будь то A/B-тестирование пейволлов, прогнозирование LTV или
                анализ показателей подписки, Adapty — это идеальный набор
                инструментов для роста приложения».
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900">Ильгар Тали</p>
                  <p className="text-sm text-gray-600">
                    Основатель и директор по позиционированию
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА */}
          <div className="relative lg:pl-8">
            <div className="bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[600px] flex items-center justify-center">
              {/* Декоративные блюры */}
              <div className="absolute top-20 right-20 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Predicted Winner */}
              <div className="absolute top-8 right-8 bg-teal-800/40 backdrop-blur-sm border border-white/10 rounded-2xl p-5 min-w-[220px]">
                <div className="flex items-center gap-2 mb-4">
                  <FiStar className="text-yellow-400 text-lg" />
                  <span className="text-white font-semibold text-base">
                    Predicted winner
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-white text-sm font-medium mb-2">
                      <span>Variant A</span>
                      <span className="font-bold">74.5%</span>
                    </div>
                    <div className="h-2 bg-teal-900/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: "74.5%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-white text-sm font-medium mb-2">
                      <span>Variant B</span>
                      <span className="font-bold">25.5%</span>
                    </div>
                    <div className="h-2 bg-teal-900/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white/50 rounded-full"
                        style={{ width: "25.5%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Телефоны */}
              <div className="flex gap-8 items-end justify-center relative z-10">
                {/* Variant A */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl w-[160px] lg:w-[180px] border-8 border-gray-900">
                    <div className="bg-gray-900 rounded-t-2xl h-2 mb-3 mx-auto w-16"></div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl h-24"></div>
                      <div className="flex gap-2">
                        <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-xl h-16 flex-1"></div>
                        <div className="bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-xl h-16 flex-1"></div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl h-14"></div>
                    </div>
                  </div>
                  <div className="h-1 bg-white w-24 rounded-full mt-4 opacity-30"></div>
                  <p className="text-white font-semibold mt-3">Variant A</p>
                </div>

                {/* Variant B */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-[2.5rem] p-3 shadow-2xl w-[160px] lg:w-[180px] border-8 border-gray-900">
                    <div className="bg-gray-900 rounded-t-2xl h-2 mb-3 mx-auto w-16"></div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl h-20"></div>
                      <div className="bg-gradient-to-br from-teal-300 to-teal-400 rounded-xl h-24"></div>
                      <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-xl h-14"></div>
                    </div>
                  </div>
                  <div className="h-1 bg-white w-24 rounded-full mt-4 opacity-30"></div>
                  <p className="text-white font-semibold mt-3">Variant B</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
