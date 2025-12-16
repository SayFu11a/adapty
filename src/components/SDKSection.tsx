"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";

export default function SDKSection() {
  const [activeTab, setActiveTab] = useState("swift");

  const tabs = [
    { id: "swift", name: "Swift" },
    { id: "kotlin", name: "Kotlin" },
    { id: "react", name: "React Native" },
    { id: "flutter", name: "Flutter" },
    { id: "unity", name: "Unity" },
  ];

  const codeExamples = {
    swift: `// Your app's code
import Adapty

do {
    try await Adapty.activate("PUBLIC_SDK_KEY")
    
    // Make a purchase, Adapty handles the rest
    let purchaseResult = try await Adapty.makePurchase(product)
    // successful purchase
} catch {
    // handle the error
}`,
    kotlin: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
    when (result) {
        is AdaptyResult.Success -> {
            // successful purchase
        }
    }
}`,
    react: `// Your app's code
import { adapty } from 'react-native-adapty';

await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
    const profile = await adapty.makePurchase(product);
    // successful purchase
} catch (error) {
    // handle the error
}`,
    flutter: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

try {
    await Adapty().activate();
    
    // Make a purchase, Adapty handles the rest
    final result = await Adapty().makePurchase(product: product);
    // successful purchase
} catch (error) {
    // handle the error
}`,
    unity: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
    if (error == null) {
        // successful purchase
    }
});`,
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Интегрируйте покупки в приложении
          <br />
          <span className="text-gray-500">с помощью нескольких строк кода</span>
        </h2>

        <p className="text-lg text-gray-400 text-center mb-4 max-w-3xl mx-auto">
          Интегрируйте IAP за несколько часов без серверного кодирования с
          помощью простого и удобного SDK. А дальше, Adapty будет управлять
          работой и состоянием каждой вашей подписки – от активации, до
          возврата.
        </p>

        <div className="text-center mb-12">
          <a
            href="#"
            className="text-purple-500 hover:text-purple-400 font-semibold inline-flex items-center gap-2"
          >
            Быстрая интеграция →
          </a>
        </div>

        {/* Табы */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Блок с кодом */}
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2 rounded-lg transition">
              <BiCopy className="text-xl" />
            </button>
          </div>

          <div className="bg-gray-950 rounded-2xl p-8 overflow-x-auto border border-gray-800">
            <pre className="text-green-400 text-sm md:text-base font-mono leading-relaxed">
              <code>
                {codeExamples[activeTab as keyof typeof codeExamples]}
              </code>
            </pre>
          </div>
        </div>

        {/* GitHub badge */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-5 py-3 rounded-full text-gray-300 transition-all text-sm font-medium"
          >
            <FaGithub className="text-xl" />
            100% Open Source
          </a>
        </div>
      </div>
    </section>
  );
}
