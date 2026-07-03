import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ListProperty from './pages/ListProperty';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Home />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/list-property" element={<ListProperty />} />
    </Routes>
  );
}

export default App;