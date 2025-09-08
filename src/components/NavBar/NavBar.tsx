import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import logoPrincipal from '../../assets/images/LOGOBUNKUA.webp';
import SwitchButton from './../SwitchButton/SwitchButton.tsx';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#faf4e1] shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 w-full">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-1">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink
                to="/"
                className="flex items-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14">
                  <img
                    src={logoPrincipal}
                    alt="logoBunkua"
                    className="w-full h-full object-contain"
                  />
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 ml-2">
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                {t('nv_inicio')}
              </NavLink>
              <NavLink
                to={'/services'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                {t('nv_servicios')}
              </NavLink>
              <NavLink
                to={'/AboutUs'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                {t('nv_acercaDeNosotros')}
              </NavLink>
              <NavLink
                to={'/CaseStudies'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                {t('nv_casosDeEstudio')}
              </NavLink>
              <NavLink
                to={'/ContactUs'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                {t('nv_contactanos')}
              </NavLink>

              {/*provicional*/}
              <NavLink
                to={'/Crm'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                Crm
              </NavLink>

              <NavLink
                to={'/TrainingAI'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                CapacitacionIA
              </NavLink>

              <NavLink
                to={'/AppBrey'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                AppBrey
              </NavLink>

              <NavLink
                to={'/ServicesO'}
                className={({ isActive }) =>
                  isActive
                    ? 'textNavbar font-semibold !text-green'
                    : 'textNavbar'
                }
              >
                Servicios Over
              </NavLink>
            </nav>
          </div>

          {/* Right side - Language Switch */}
          <div className="hidden md:flex items-center">
            <SwitchButton />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <SwitchButton />

            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green focus:outline-none"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `block px-3 py-2 text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? '!text-green bg-green-50'
                      : 'text-gray-700 hover:text-green hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nv_inicio')}
              </NavLink>

              <NavLink
                to={'/services'}
                className={({ isActive }) =>
                  `block px-3 py-2 text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? '!text-green bg-green-50'
                      : 'text-gray-700 hover:text-green hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nv_servicios')}
              </NavLink>

              <NavLink
                to={'/AboutUs'}
                className={({ isActive }) =>
                  `block px-3 py-2 text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? '!text-green bg-green-50'
                      : 'text-gray-700 hover:text-green hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nv_acercaDeNosotros')}
              </NavLink>

              <NavLink
                to={'/CaseStudies'}
                className={({ isActive }) =>
                  `block px-3 py-2 text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? '!text-green bg-green-50'
                      : 'text-gray-700 hover:text-green hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nv_casosDeEstudio')}
              </NavLink>

              <NavLink
                to={'/ContactUs'}
                className={({ isActive }) =>
                  `block px-3 py-2 text-2xl font-medium transition-colors duration-200 ${
                    isActive
                      ? '!text-green bg-green-50'
                      : 'text-gray-700 hover:text-green hover:bg-gray-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nv_contactanos')}
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
