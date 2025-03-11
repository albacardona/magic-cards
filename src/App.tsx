import { HomePage } from './screens/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favourites } from './screens/Favourites/Favourites';
import { MyCollections } from './screens/MyCollections/MyCollections';
import { NotFound } from './screens/NotFound';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Container } from './components/ui/Container/Container';
import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <main className="app">
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/my-collections" element={<MyCollections />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </main>
    </BrowserRouter>
  );
};
