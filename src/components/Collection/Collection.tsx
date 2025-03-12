import type { Card, Collection as CollectionTypes } from '@/types/types';
import { CardItem } from '../CardItem/CardItem';
import './Collection.scss';
import { useMemo } from 'react';
import Remove from '@/assets/icons/remove.svg?react';
import { useCollections } from '@/context/collections-context';

interface Props {
  collection: CollectionTypes;
}

export const Collection = ({ collection }: Props) => {
  const { removeCardFromCollection } = useCollections();

  const cardAction = useMemo(
    () => ({
      onClick: (card: Card) => removeCardFromCollection(collection.id, card),
      icon: <Remove />,
    }),
    [removeCardFromCollection, collection],
  );

  return (
    <div className="collection">
      <h2>{collection?.name}</h2>
      <div className="cards-container">
        {collection.cards.length > 0 ? (
          collection.cards?.map((card) => (
            <CardItem key={card.id} card={card} cardAction={cardAction} />
          ))
        ) : (
          <p>This collection has no cards yet.</p>
        )}
      </div>
    </div>
  );
};
