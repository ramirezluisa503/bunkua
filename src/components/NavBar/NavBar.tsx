import { useState } from 'react';
import logoPrincipal from '../../assets/images/logoPrincipal.webp';
import { NavLink } from 'react-router-dom';
import SwitchButton from './../SwitchButton/SwitchButton';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-nv-bg shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="items-center flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 mr-3">
                <img
                  src={logoPrincipal}
                  alt="logoBunkua"
                />
              </div>
              <span className="text-xl font-semibold text-black">BUNKUA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink
              to={'/'}
              className="text-gray-700 hover:text-green px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Inicio
            </NavLink>
            <NavLink
              to={'/services'}
              className="text-gray-700 hover:text-green px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Servicios
            </NavLink>
            <NavLink
              to={'/AboutUs'}
              className="text-gray-700 hover:text-green px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Acerca de nosotros
            </NavLink>
            <NavLink
              to={'/CaseStudies'}
              className="text-gray-700 hover:text-green px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Casos de estudio
            </NavLink>
            <NavLink
              to={'/ContactUs'}
              className="text-gray-700 hover:text-green px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contáctanos
            </NavLink>
          </nav>

          {/* Desktop Language Selector */}
          <div className="hidden md:flex items-center space-x-10 md:ml-auto">
            <SwitchButton />
          </div>

          {/* Mobile: Language Selector + Hamburger Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <SwitchButton />

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 text-center">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to={'/'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </NavLink>

            <NavLink
              to={'/services'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </NavLink>

            <NavLink
              to={'/AboutUs'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de nosotros
            </NavLink>

            <NavLink
              to={'/CaseStudies'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos de estudio
            </NavLink>

            <NavLink
              to={'/ContactUs'}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
