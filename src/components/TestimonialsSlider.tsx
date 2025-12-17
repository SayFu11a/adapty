"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      id: 1,
      text: "Платформа Adapty позволяет неразработчикам легко создавать и управлять A/B тестами, пейволлами, ассортиментом продуктов и ценовой структурой. У них есть отличный внешний API, который облегчает передачу связанных событий в другие аналитические инструменты, такие как Amplitude и Mixpanel.",
      name: "Кайл Смит",
      position: "Руководитель отдела данных в Smitten Dating",
      company: "Smitten",
      companyLogo: "💗",
    },
    {
      id: 2,
      text: "С SDK Adapty, добавить покупки в приложение оказалось проще простого. С помощью всего нескольких строк кода я смог без проблем добавить подписки как для iOS, так и для Android.",
      name: "Кайл Смит",
      position: "Руководитель отдела данных в Smitten Dating",
      company: "Smitten",
      companyLogo: "💗",
    },
    {
      id: 3,
      text: "Я никогда не думала, что возврат денег может иметь такое значение. Мы просто щелкнули выключателем, настроили его, и вдруг нам показалось, что мы перестали позволять деньгам ускользать.",
      name: "Берк Чагатай Албайрак",
      position: "Старший менеджер по продуктам",
      company: "Fotorama",
      companyLogo: "📸",
    },
    {
      id: 4,
      text: "Будь то A/B-тестирование пейволлов, прогнозирование LTV или анализ показателей подписки, Adapty — это идеальный набор инструментов для роста приложения.",
      name: "Ильгар Тали",
      position: "Основатель и директор по позиционированию",
      company: "smartist",
      companyLogo: "🎨",
    },
    {
      id: 5,
      text: "Adapty предоставляет мощные инструменты для аналитики и оптимизации подписок. Интеграция заняла считанные часы, а результаты превзошли все ожидания.",
      name: "Кайл Смит",
      position: "Руководитель отдела данных",
      company: "TechCorp",
      companyLogo: "🚀",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
          От Indie до Enterprise – Adapty помогает увеличить доход приложениям
          <br />
          любого уровня
        </h2>

        {/* Слайдер */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8">
                  {/* Фото */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-3xl blur-2xl opacity-50"></div>
                      <Image
                        src="https://adapty.io/assets/uploads/2023/12/photo-Roi-Mulia.webp"
                        alt={testimonial.name}
                        className="relative rounded-3xl w-full max-w-md h-auto shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Текст отзыва */}
                  <div className="text-left space-y-6">
                    <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      «{testimonial.text}»
                    </blockquote>

                    <div>
                      <p className="text-xl font-bold text-white mb-1">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        {testimonial.position}
                      </p>

                      {/* Логотип компании */}
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">
                          {testimonial.companyLogo}
                        </div>
                        <span className="text-2xl font-bold text-white">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные стрелки */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all shadow-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full transition-all shadow-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
