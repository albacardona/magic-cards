import { getCards } from '@/api/cardApi';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components/ui/Loader/Loader';
import { Container } from '@/components/ui/Container/Container';
import { Catalogue } from '@/components/Catalogue';
import './HomePage.scss';
import { Header } from '@/components/Header/Header';

export const HomePage = () => {
  const { data: cardsData, isLoading } = useQuery({
    queryKey: [getCards.name],
    queryFn: getCards,
  });

  return (
    <Container>
      {isLoading ? (
        <div className="loader-container">
          <Loader size="large" />
        </div>
      ) : (
        cardsData && (
          <>
            <Header cards={cardsData} />
            <Catalogue cards={cardsData} />
          </>
        )
      )}
    </Container>
  );
};
