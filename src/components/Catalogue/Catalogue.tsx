import { useCards } from '@/context/cards-context';
import './Catalogue.scss';
import { CardItem } from '../CardItem/CardItem';
import type { Card } from '@/types/types';
import { useMemo } from 'react';
import { useCollections } from '@/context/collections-context';
import Add from '@/assets/icons/add.svg?react';

interface Props {
  collectionId: string;
}

export const Catalogue = ({ collectionId }: Props) => {
  const { addCardToCollection, collections } = useCollections();
  const { cards } = useCards();

  const currentCollection = collections.find((c) => c.id === collectionId);

  const isCardInCollection = (cardId: string) => {
    return currentCollection?.cards.some((card) => card.id === cardId);
  };

  const cardAction = useMemo(
    () => ({
      onClick: (card: Card) => addCardToCollection(collectionId, card),
      icon: <Add />,
    }),
    [addCardToCollection, collectionId],
  );

  return (
    <div className="catalogue-container">
      {cards?.map((card) => {
        if (!isCardInCollection(card.id)) {
          return <CardItem key={card.id} card={card} cardAction={cardAction} />;
        }
      })}
    </div>
  );
};
