import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Services } from './Pages/Services';
import { AboutUs } from './Pages/AboutUs';
import { CaseStudies } from './Pages/CaseStudies';
import { ContactUs } from './Pages/ContactUs';
import { useEffect } from 'react';

// OPCIÓN 1: Usando scroll behavior smooth (más simple)
const ScrollToTopSmooth = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      {/* Cambia por la opción que prefieras */}
      <ScrollToTopSmooth />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/AboutUs"
          element={<AboutUs />}
        />
        <Route
          path="/CaseStudies"
          element={<CaseStudies />}
        />
        <Route
          path="/ContactUs"
          element={<ContactUs />}
        />
      </Routes>
    </>
  );
}

export default App;
