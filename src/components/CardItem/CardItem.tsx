import type { Card, CardActions } from '@/types/types';
import imageNotFound from '@/assets/image-not-found.png';
import './CardItem.scss';

import { Button } from '../ui/Button/Button';
import { useCollections } from '@/context/collections-context';
import { useMemo } from 'react';

interface Props {
  card: Card;
  showCardName?: boolean;
  cardActions?: CardActions[];
  collectionId: string;
}

export const CardItem = ({ card, showCardName = true, cardActions, collectionId }: Props) => {
  const { collections } = useCollections();

  const currentCollection = useMemo(
    () => collections.filter((collection) => collectionId === collection.id)[0],
    [collections, collectionId],
  );

  const isCardAlreadyInCollection = useMemo(
    () => currentCollection?.cards.find((currentCard) => card.id === currentCard.id),
    [currentCollection, card],
  );

  return (
    <div className="card-container">
      {!isCardAlreadyInCollection &&
        cardActions?.map((action) => (
          <Button key={action.id} onClick={() => action.onClick(collectionId, card)}>
            {action.button}
          </Button>
        ))}
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
