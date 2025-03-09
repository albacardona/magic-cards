import type { Card } from '@/types/types';
import { CardItem } from '../CardItem/CardItem';
import './Collection.scss';
import { Container } from '../ui/Container/Container';

interface Props {
  cards: Card[];
  showCardName?: boolean;
}

export const Collection = (props: Props) => {
  const { cards, showCardName } = props;

  return (
    <Container>
      <div>
        <div className="cards-container">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} showCardName={showCardName} />
          ))}
        </div>
      </div>
    </Container>
  );
};
