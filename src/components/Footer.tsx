import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full gradient-creative flex items-center justify-center">
                <Icon name="Palette" size={20} className="text-white" />
              </div>
              <span className="font-bold text-2xl">ЦКТ</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Центр Коллективного Творчества — место, где студенты раскрывают
              свой творческий потенциал и создают удивительные проекты.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Icon name="Instagram" size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Icon name="Youtube" size={18} />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <Icon name="Mail" size={18} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Направления</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Дизайн</li>
              <li className="hover:text-white cursor-pointer">Живопись</li>
              <li className="hover:text-white cursor-pointer">Графика</li>
              <li className="hover:text-white cursor-pointer">
                Выставочное пространство
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@ckt.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Творческая, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Центр Коллективного Творчества. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
