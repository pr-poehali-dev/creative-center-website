import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            Центр Коллективного Творчества
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Место, где студенты раскрывают свой творческий потенциал в дизайне,
            живописи, графике и создании выставочных пространств
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="gradient-creative text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <Icon name="Rocket" size={20} />
              <span>Начать творить</span>
            </button>
            <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2">
              <Icon name="Play" size={20} />
              <span>Смотреть работы</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">
                200+
              </div>
              <div className="text-gray-600">Студентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-1">15+</div>
              <div className="text-gray-600">Преподавателей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
              <div className="text-gray-600">Проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
              <div className="text-gray-600">Направления</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
