import Icon from "@/components/ui/icon";

const directions = [
  {
    title: "Дизайн",
    description:
      "Изучение основ графического дизайна, UX/UI, брендинга и создания визуальных концепций",
    icon: "Brush",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
    features: ["Логотипы", "Веб-дизайн", "Полиграфия", "Брендинг"],
  },
  {
    title: "Живопись",
    description:
      "Традиционная и современная живопись, работа с различными техниками и материалами",
    icon: "Paintbrush",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
    features: ["Масло", "Акварель", "Акрил", "Пастель"],
  },
  {
    title: "Графика",
    description:
      "Цифровая и традиционная графика, иллюстрация, создание авторских работ",
    icon: "Pen",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
    features: ["Иллюстрация", "Комиксы", "Анимация", "Цифровая графика"],
  },
  {
    title: "Выставочное пространство",
    description:
      "Проектирование и организация выставок, кураторство, создание экспозиций",
    icon: "Layout",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    features: ["Кураторство", "Дизайн выставок", "Организация", "Экспозиция"],
  },
];

const CreativeDirections = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Творческие направления
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите свой путь в мире искусства и дизайна
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directions.map((direction, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 ${direction.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon
                  name={direction.icon}
                  size={28}
                  className={direction.textColor}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">{direction.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {direction.description}
              </p>

              <div className="space-y-2 mb-6">
                {direction.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <div
                      className={`w-2 h-2 ${direction.color} rounded-full`}
                    ></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-colors ${direction.lightColor} ${direction.textColor} hover:opacity-80`}
              >
                Узнать больше
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeDirections;
