import type { Card, Collection as CollectionTypes } from '@/types/types';
import { CardItem } from '../CardItem/CardItem';
import './Collection.scss';
import { useMemo } from 'react';
import Remove from '@/assets/icons/remove.svg?react';
import { useCollections } from '@/context/collections-context';
import { Button } from '../ui/Button/Button';
import Add from '@/assets/icons/add.svg?react';
import Delete from '@/assets/icons/delete.svg?react';
import { useModal } from '@/context/modal-context';
import { Catalogue } from '../Catalogue/Catalogue';
import { ConfirmDeletion } from './CollectionConfirmDeletion';

interface Props {
  collection: CollectionTypes;
}

export const Collection = ({ collection }: Props) => {
  const { removeCardFromCollection } = useCollections();
  const catalogueModal = useModal();
  const deleteModal = useModal();

  const cardAction = useMemo(
    () => ({
      onClick: (card: Card) => removeCardFromCollection(collection.id, card),
      icon: <Remove />,
    }),
    [removeCardFromCollection, collection],
  );

  const collectionIsFavourite = useMemo(() => collection.isFavourite, [collection]);

  const addCardsToCollection = () => {
    catalogueModal.showModal({
      title: 'Catalogue',
      content: <Catalogue collectionId={collection.id} />,
    });
  };

  const handleClickDeleteCollection = () => {
    deleteModal.showModal({
      description: 'Are you sure you want to delete this collection?',
      content: <ConfirmDeletion collectionId={collection.id} />,
    });
  };

  return (
    <div className={collectionIsFavourite ? 'collection favourite' : 'collection'}>
      {!collectionIsFavourite && (
        <Button className="delete-button" onClick={handleClickDeleteCollection}>
          <Delete className="delete" />
        </Button>
      )}
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
