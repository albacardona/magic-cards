import { Collection } from '@/components/Collection/Collection';
import { useCollections } from '@/context/collections-context';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';
import { useModal } from '@/context/modal-context';
import { Button } from '@/components/ui/Button/Button';
import { Catalogue } from '@/components/Catalogue/Catalogue';
import './Favourites.scss';

export const Favourites = () => {
  const { collections, addCardToCollection } = useCollections();
  const modal = useModal();

  const favouriteCollection = useMemo(
    () => collections.filter((collection) => collection.isFavourite)[0],
    [collections],
  );

  const cardActions = useMemo(
    () => [
      {
        id: '1',
        onClick: addCardToCollection,
        button: <Add />,
      },
    ],
    [addCardToCollection],
  );

  const onAddFavourites = () => {
    modal.showModal({
      title: 'My favourites cards',
      content: <Catalogue cardActions={cardActions} collectionId={favouriteCollection.id} />,
    });
  };

  return (
    <div className="favourites-collection">
      {favouriteCollection.cards.length > 0 ? (
        <Collection collection={favouriteCollection} />
      ) : (
        <>
          <h2>Favourites</h2>
          <div className="empty-favourites">
            <h3>Your favourite collection is empty. Choose some cards to add to it!</h3>
            <Button className="add-button" onClick={onAddFavourites}>
              <Add className="add" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
