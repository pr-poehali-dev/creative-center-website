import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-purple-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full gradient-creative flex items-center justify-center">
            <Icon name="Palette" size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl text-gradient">ЦКТ</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Главная
          </Link>
          <Link
            to="/directions"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Направления
          </Link>
          <Link
            to="/teachers"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Преподаватели
          </Link>
          <Link
            to="/events"
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            События
          </Link>
        </nav>

        <button className="gradient-creative text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium">
          Записаться
        </button>
      </div>
    </header>
  );
};

export default Header;
