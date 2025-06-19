import Icon from "@/components/ui/icon";

const events = [
  {
    title: "Выставка студенческих работ",
    date: "15 июля",
    time: "18:00",
    location: "Главная галерея",
    type: "Выставка",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    title: "Мастер-класс по акварели",
    date: "22 июля",
    time: "14:00",
    location: "Студия живописи",
    type: "Мастер-класс",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
  },
  {
    title: 'Лекция "Современный дизайн"',
    date: "28 июля",
    time: "16:00",
    location: "Аудитория 101",
    type: "Лекция",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ближайшие события
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Не пропустите интересные мероприятия нашего центра
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${event.lightColor} ${event.textColor}`}
                >
                  {event.type}
                </span>
                <Icon name="Calendar" size={20} className="text-gray-400" />
              </div>

              <h3 className="text-xl font-bold mb-4">{event.title}</h3>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-gray-400" />
                  <span className="text-gray-600">
                    {event.date} в {event.time}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-gray-400" />
                  <span className="text-gray-600">{event.location}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-colors ${event.color} text-white hover:opacity-90`}
              >
                Записаться
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-colors">
            Смотреть все события
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
