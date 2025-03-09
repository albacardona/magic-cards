import type { Card } from '@/types/types';
import { Collection } from './Collection/Collection';
import { Container } from './ui/Container/Container';

interface Props {
  cards: Card[];
}

export const Catalogue = (props: Props) => {
  const { cards } = props;

  return (
    <Container>
      <div className="card-container">
        <Collection cards={cards} />
      </div>
    </Container>
  );
};
