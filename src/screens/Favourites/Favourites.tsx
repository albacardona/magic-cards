import { Collection } from '@/components/Collection/Collection';
import { useCollections } from '@/context/CollectionsContext';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';
import './Favourites.scss';

export const Favourites = () => {
  const { collections } = useCollections();

  const favouriteCollection = useMemo(
    () => collections.filter((collection) => collection.isFavourite)[0],
    [collections],
  );

  return (
    <div className="favourites-collection">
      <h2>Favourites</h2>
      {favouriteCollection ? (
        <Collection collection={favouriteCollection} />
      ) : (
        <div className="empty-favourites">
          <h3>Your favourite collection is empty. Choose some cards to add to it!</h3>
          <button type="button" className="add-button" onClick={() => console.log('add')}>
            <Add className="add" />
          </button>
        </div>
      )}
    </div>
  );
};
