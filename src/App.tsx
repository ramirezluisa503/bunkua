import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Services } from './Pages/Services';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
