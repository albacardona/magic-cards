import { Collection } from '@/components/Collection/Collection';
import { useCollections } from '@/context/CollectionsContext';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';

import './Favourites.scss';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/Button/Button';

export const Favourites = () => {
  const { collections } = useCollections();
  const modal = useModal();

  const favouriteCollection = useMemo(
    () => collections.filter((collection) => collection.isFavourite)[0],
    [collections],
  );

  const onAddFavourites = () => {
    modal.showModal({
      title: 'My favourites cards',
      content: "I don't have them",
    });
  };

  return (
    <div className="favourites-collection">
      <h2>Favourites</h2>
      {favouriteCollection ? (
        <Collection collection={favouriteCollection} />
      ) : (
        <div className="empty-favourites">
          <h3>Your favourite collection is empty. Choose some cards to add to it!</h3>
          <Button className="add-button" onClick={onAddFavourites}>
            <Add className="add" />
          </Button>
        </div>
      )}
    </div>
  );
};
