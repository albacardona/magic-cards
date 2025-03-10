import { Collection } from '@/components/Collection/Collection';
import { useCollections } from '@/context/CollectionsContext';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';
import './MyCollections.scss';

export const MyCollections = () => {
  const { collections } = useCollections();

  const myCollections = useMemo(
    () => collections.filter((collection) => !collection.isFavourite),
    [collections],
  );

  return (
    <div>
      <h2>Collections</h2>
      {myCollections.length > 0 ? (
        myCollections.map((collection) => (
          <Collection key={collection.id} collection={collection} />
        ))
      ) : (
        <div className="empty-collections">
          <h3>You have no collection yet. Click the button to create a new one.</h3>
          <button type="button" className="add-button" onClick={() => console.log('add')}>
            <Add className="add" />
          </button>
        </div>
      )}
    </div>
  );
};
