import { Container } from '@/components/ui/Container/Container';
import { Catalogue } from '@/components/Catalogue/Catalogue';
import { Header } from '@/components/Header/Header';
import './HomePage.scss';
import { useCards } from '@/context/CardsContext';
import { Loader } from '@/components/ui/Loader/Loader';

export const HomePage = () => {
  const { isLoading } = useCards();
  return (
    <Container>
      {isLoading ? (
        <div className="loader-container">
          <Loader size="large" />
        </div>
      ) : (
        <div className="main-content">
          <Header />
          <hr />
          <Catalogue />
        </div>
      )}
    </Container>
  );
};
