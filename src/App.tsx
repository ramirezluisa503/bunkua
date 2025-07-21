import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Services } from './Pages/Services';
import { AboutUs } from './Pages/AboutUs';
import { CaseStudies } from './Pages/CaseStudies';
import { ContactUs } from './Pages/ContactUs';

function App() {
  return (
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
  );
}

export default App;
