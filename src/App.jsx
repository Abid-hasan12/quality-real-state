import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ListProperty from './pages/ListProperty';

const homePaths = ['/', '/properties'];

function App() {
  return (
    <Routes>
      {homePaths.map((path) => (
        <Route key={path} path={path} element={<Home />} />
      ))}
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/list-property" element={<ListProperty />} />
    </Routes>
  );
}

export default App;