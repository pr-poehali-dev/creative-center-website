import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="gradient-creative rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать творческий путь?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Присоединяйтесь к нашему сообществу талантливых студентов и
              раскройте свой потенциал
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <Icon name="UserPlus" size={20} />
                <span>Записаться на курс</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>Связаться с нами</span>
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <Icon
                  name="Award"
                  size={32}
                  className="mx-auto mb-3 opacity-80"
                />
                <h3 className="font-bold text-lg mb-2">Сертификаты</h3>
                <p className="opacity-80">
                  Получите официальный сертификат по окончании курса
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Users"
                  size={32}
                  className="mx-auto mb-3 opacity-80"
                />
                <h3 className="font-bold text-lg mb-2">Сообщество</h3>
                <p className="opacity-80">
                  Станьте частью творческого сообщества единомышленников
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Briefcase"
                  size={32}
                  className="mx-auto mb-3 opacity-80"
                />
                <h3 className="font-bold text-lg mb-2">Карьера</h3>
                <p className="opacity-80">
                  Помощь в трудоустройстве и развитии карьеры
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
