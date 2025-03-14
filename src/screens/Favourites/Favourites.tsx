import { useCollections } from '@/context/collections-context';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';
import { useModal } from '@/context/modal-context';
import { Button } from '@/components/ui/Button/Button';
import { Catalogue } from '@/components/Catalogue/Catalogue';
import './Favourites.scss';
import { Collection } from '@/components/Collection/Collection';

export const Favourites = () => {
  const { collections } = useCollections();
  const catalogueModal = useModal();

  const favouriteCollection = useMemo(
    () => collections.filter((collection) => collection.isFavourite)[0],
    [collections],
  );

  const addFavourites = () => {
    catalogueModal.showModal({
      title: 'Catalogue',
      content: <Catalogue collectionId={favouriteCollection.id} />,
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
            <Button className="add-button" onClick={addFavourites}>
              <Add className="add" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
