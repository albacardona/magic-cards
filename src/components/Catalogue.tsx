import { Collection } from './Collection/Collection';
import { Container } from './ui/Container/Container';
import { useCards } from '@/context/CardsContext';

export const Catalogue = () => {
  const { cards } = useCards();

  return (
    <Container>
      <div className="card-container">
        <Collection cards={cards} />
      </div>
    </Container>
  );
};
