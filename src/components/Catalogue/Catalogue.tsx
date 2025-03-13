import './Catalogue.scss';
import { CardItem } from '../CardItem/CardItem';
import type { Card } from '@/types/types';
import { useMemo } from 'react';
import { useCollections } from '@/context/collections-context';
import Add from '@/assets/icons/add.svg?react';
import { useCards } from '@/context/cards-context';
import { Loader } from '../ui/Loader/Loader';
import { ErrorMessage } from '../ui/Error/Error';

interface Props {
  collectionId: string;
}

export const Catalogue = ({ collectionId }: Props) => {
  const { addCardToCollection, collections } = useCollections();
  const { cards, isLoading, error } = useCards();

  const currentCollection = collections.find((collection) => collection.id === collectionId);

  const isCardInCollection = (cardId: string) =>
    currentCollection?.cards.some((card) => card.id === cardId);

  const cardAction = useMemo(
    () => ({
      onClick: (card: Card) => addCardToCollection(collectionId, card),
      icon: <Add />,
    }),
    [addCardToCollection, collectionId],
  );

  if (isLoading) {
    return <Loader size="large" />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

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
