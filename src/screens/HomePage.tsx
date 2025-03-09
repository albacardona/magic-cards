import { getCards } from '@/api/cardApi';
import { useQuery } from '@tanstack/react-query';
import { Loader } from '../components/ui/Loader/Loader';
import './HomePage.scss';
import { Container } from '@/components/ui/Container/Container';
import { Catalogue } from '@/components/Catalogue';

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
        <>
          <section className="presentation">Here we will display 3 random cards</section>
          {cardsData && <Catalogue cards={cardsData} />}
        </>
      )}
    </Container>
  );
};
