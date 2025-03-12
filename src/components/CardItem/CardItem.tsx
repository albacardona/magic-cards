import type { Card, CardAction } from '@/types/types';
import imageNotFound from '@/assets/image-not-found.png';
import './CardItem.scss';
import { Button } from '../ui/Button/Button';

interface Props {
  card: Card;
  showCardName?: boolean;
  cardAction?: CardAction;
}

export const CardItem = ({ card, showCardName = true, cardAction }: Props) => {
  return (
    <div className="card-container">
      {cardAction && <Button onClick={() => cardAction.onClick(card)}>{cardAction.icon}</Button>}
      <div className="card">
        {card.imageUrl ? (
          <img src={card.imageUrl} alt={card.name} />
        ) : (
          <img src={imageNotFound} alt={card.name} />
        )}
        {showCardName && <p>{card.name}</p>}
      </div>
    </div>
  );
};
