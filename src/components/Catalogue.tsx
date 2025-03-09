import type { Card } from '@/types/types';
import { Container } from './ui/Container/Container';
import { Collection } from './Collection';

interface Props {
  cards: Card[];
}

export const Catalogue = (props: Props) => {
  const { cards } = props;
  console.log(cards);
  return (
    <Container>
      <div className="card-container">
        <Collection cards={cards} />
      </div>
    </Container>
  );
};
