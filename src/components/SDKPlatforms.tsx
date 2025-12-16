"use client";

import {
  SiSwift,
  SiKotlin,
  SiReact,
  SiFlutter,
  SiUnity,
  SiCapacitor,
  SiStripe,
} from "react-icons/si";
import { TbWorld, TbBrandFlutter } from "react-icons/tb"; // ← ИСПРАВЛЕНО

export default function SDKPlatforms() {
  const platforms = [
    { name: "Swift SDK", icon: SiSwift, color: "text-orange-500" },
    { name: "Kotlin SDK", icon: SiKotlin, color: "text-purple-500" },
    { name: "React Native SDK", icon: SiReact, color: "text-cyan-500" },
    { name: "Unity SDK", icon: SiUnity, color: "text-gray-400" },
    { name: "Flutter SDK", icon: SiFlutter, color: "text-blue-500" },
    { name: "Capacitor SDK", icon: SiCapacitor, color: "text-blue-400" },
    { name: "Kotlin Multiplatform", icon: SiKotlin, color: "text-purple-600" },
    { name: "FlutterFlow", icon: TbBrandFlutter, color: "text-indigo-500" }, // ← ИСПРАВЛЕНО
    { name: "Web API", icon: TbWorld, color: "text-blue-600" },
    { name: "Stripe", icon: SiStripe, color: "text-purple-700" },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Установите SDK для своей платформы
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-750 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group border border-gray-700 hover:border-gray-600"
            >
              <platform.icon
                className={`text-5xl ${platform.color} transition-transform group-hover:scale-110`}
              />
              <p className="text-white text-center text-sm font-medium">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
