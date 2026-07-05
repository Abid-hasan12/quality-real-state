import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ListProperty from './pages/ListProperty';
import BuyPage from './pages/BuyPage';

const homePaths = ['/', '/properties'];

function App() {
  return (
    <Routes>
      {homePaths.map((path) => (
        <Route key={path} path={path} element={<Home />} />
      ))}
      <Route path="/list-property" element={<ListProperty />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
}

export default App;