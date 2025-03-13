import type { Card, Collection as CollectionTypes } from '@/types/types';
import { CardItem } from '../CardItem/CardItem';
import './Collection.scss';
import { useMemo } from 'react';
import Remove from '@/assets/icons/remove.svg?react';
import { useCollections } from '@/context/collections-context';
import { Button } from '../ui/Button/Button';
import Add from '@/assets/icons/add.svg?react';
import { useModal } from '@/context/modal-context';
import { Catalogue } from '../Catalogue/Catalogue';

interface Props {
  collection: CollectionTypes;
}

export const Collection = ({ collection }: Props) => {
  const { removeCardFromCollection } = useCollections();
  const catalogueModal = useModal();

  const cardAction = useMemo(
    () => ({
      onClick: (card: Card) => removeCardFromCollection(collection.id, card),
      icon: <Remove />,
    }),
    [removeCardFromCollection, collection],
  );

  const addCardsToCollection = () => {
    catalogueModal.showModal({
      title: 'Catalogue',
      content: <Catalogue collectionId={collection.id} />,
    });
  };

  return (
    <div className={collection.isFavourite ? 'collection favourite' : 'collection'}>
      <div className="collection-header">
        <h2>{collection?.name}</h2>
        <Button className="add-button" onClick={addCardsToCollection}>
          <Add className="add" />
        </Button>
      </div>
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
