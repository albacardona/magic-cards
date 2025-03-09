import type { Card } from '@/types/types';
import { CardItem } from './CardItem';

interface Props {
  cards: Card[];
}

export const Collection = (props: Props) => {
  const { cards } = props;

  return (
    <div className="card-container">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};
