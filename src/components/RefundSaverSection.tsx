"use client";

import { Card, Avatar } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function RefundSaverSection() {
  // Данные для графика
  const data = [
    { date: "17 Nov", rate: 3.8 },
    { date: "18 Nov", rate: 3.9 },
    { date: "19 Nov", rate: 4.1 },
    { date: "20 Nov", rate: 4.0 },
    { date: "21 Nov", rate: 3.9 },
    { date: "22 Nov", rate: 3.8 },
    { date: "23 Nov", rate: 2.4, refundEnabled: true },
    { date: "24 Nov", rate: 2.5 },
    { date: "25 Nov", rate: 2.3 },
    { date: "26 Nov", rate: 2.1 },
    { date: "27 Nov", rate: 2.3 },
    { date: "28 Nov", rate: 1.8 },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ЛЕВАЯ КОЛОНКА - График */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={data}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e5e7eb"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    domain={[0, 5]}
                    ticks={[0, 2.0, 2.5, 3.0, 3.5, 4.0]}
                    label={{
                      value: "Refund Rate, %",
                      angle: -90,
                      position: "insideLeft",
                      style: { fill: "#374151", fontSize: 14, fontWeight: 600 },
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />

                  {/* Вертикальная линия в момент включения */}
                  <ReferenceLine
                    x="23 Nov"
                    stroke="#7c3aed"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    label={{
                      value: "Adapty Refund Saver enabled",
                      position: "top",
                      fill: "#7c3aed",
                      fontSize: 12,
                      fontWeight: 600,
                      offset: 10,
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#7c3aed"
                    strokeWidth={3}
                    dot={false}
                    activeDot={{ r: 6, fill: "#7c3aed" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА - Текст */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Сократите ставку
              <br />
              возврата на 40%
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Перестаньте терять доход из-за возвратов – Adapty автоматически
              делится данными о действиях пользователей с Apple для запросов на
              возврат и уменьшает их.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all text-lg"
            >
              Настройка Refund Saver <ArrowRightOutlined />
            </a>

            {/* Карточка отзыва */}
            <Card
              className="shadow-sm hover:shadow-md transition-shadow border-gray-200"
              style={{ borderRadius: "16px" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-lime-500 rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  F
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Fotorama</p>
                  <p className="text-sm text-gray-500">Фото и видео</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-base leading-relaxed mb-6 border-l-4 border-purple-500 pl-4">
                Я никогда не думала, что возврат денег может иметь такое
                значение. Мы просто щелкнули выключателем, настроили его, и
                вдруг нам показалось, что мы перестали позволять деньгам
                ускользать.
              </blockquote>

              <div className="flex items-center gap-3">
                <Avatar size={48} src="https://via.placeholder.com/48" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Берк Чагатай Албайрак
                  </p>
                  <p className="text-sm text-gray-600">
                    Старший менеджер по продуктам
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
