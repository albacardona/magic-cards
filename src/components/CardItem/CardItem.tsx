import type { Card } from '@/types/types';
import imageNotFound from '@/assets/image-not-found.png';
import './CardItem.scss';

interface Props {
  card: Card;
  showCardName?: boolean;
}

export const CardItem = ({ card, showCardName = true }: Props) => {
  return (
    <div className="card">
      {card.imageUrl ? (
        <img src={card.imageUrl} alt={card.name} />
      ) : (
        <img src={imageNotFound} alt={card.name} />
      )}
      {showCardName && <p>{card.name}</p>}
    </div>
  );
};
