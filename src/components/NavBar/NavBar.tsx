import { useState } from 'react';
import logo from '../../assets/images/bunkuaLogo.svg';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 mr-3">
                <img src={logo} alt="logoBunkua" />
              </div>
              <span className="text-xl font-semibold text-gray-800">
                BUNKUA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to={'/'}
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Inicio
            </NavLink>
            <NavLink
              to={'/services'}
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Servicios
            </NavLink>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Acerca de nostros
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Casos de estudio
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contáctanos
            </a>
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-2">BOTONES</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {isMenuOpen ? (
                <img src={logo} className="w-6 h-6" />
              ) : (
                <img src={logo} className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 text-center">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to={'/'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Inicio
            </NavLink>

            <NavLink
              to={'/services'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Servicios
            </NavLink>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Acerca de nostros
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Casos de estudio
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Language Selector */}
          {/* <div className="px-5 py-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <button
                onClick={() => handleLanguageChange('Esp')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeLanguage === 'Esp'
                    ? 'bg-gray-200 text-gray-800'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Esp
              </button>
              <button
                onClick={() => handleLanguageChange('Eng')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeLanguage === 'Eng'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Eng
              </button>
            </div>
          </div> */}
        </div>
      )}
    </header>
  );
};
