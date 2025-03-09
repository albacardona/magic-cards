import './App.scss';
import { HomePage } from './screens/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Favourites } from './screens/Favourites';
import { MyCollections } from './screens/MyCollections';
import { NotFound } from './screens/NotFound';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/my-collections" element={<MyCollections />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
