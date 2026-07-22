import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ListProperty from './pages/ListProperty';
import BuyPage from './pages/BuyPage';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';

const homePaths = ['/', '/home', '/properties'];

function App() {
  return (
    <Routes>
      {homePaths.map((path) => (
        <Route key={path} path={path} element={<Home />} />
      ))}
      <Route path="/list-property" element={<ListProperty />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;