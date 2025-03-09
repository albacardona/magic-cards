import type { Card } from '@/types/types';
import imageNotFound from '@/assets/image-not-found.png';

interface Props {
  card: Card;
}

export const CardItem = (props: Props) => {
  const { card } = props;
  return (
    <div>
      {card.imageUrl ? (
        <img src={card.imageUrl} alt={card.name} />
      ) : (
        <img src={imageNotFound} alt={card.name} />
      )}
      <p>{card.name}</p>
    </div>
  );
};
