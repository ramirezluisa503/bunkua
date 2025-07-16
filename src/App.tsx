import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Services } from './Pages/Services';
import {AboutUs} from './Pages/AboutUs';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/AboutUs" element={<AboutUs />} />

    </Routes>
  );
}

export default App;
