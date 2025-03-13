import { Collection } from '@/components/Collection/Collection';
import { useCollections } from '@/context/collections-context';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';
import { useModal } from '@/context/modal-context';
import { Button } from '@/components/ui/Button/Button';
import './MyCollections.scss';
import { NewCollection } from './MyCollectionsNewCollection';

export const MyCollections = () => {
  const { collections } = useCollections();
  const modal = useModal();

  const myCollections = useMemo(
    () => collections.filter((collection) => !collection.isFavourite),
    [collections],
  );

  const emptyCollections = useMemo(() => myCollections.length === 0, [myCollections]);

  const onAddCollection = () => {
    modal.showModal({
      description: 'Enter the name for your new collection',
      content: <NewCollection />,
    });
  };

  return (
    <div className={emptyCollections ? 'my-collections' : 'my-collections has-cards'}>
      <div className="my-collections-header">
        <h2>Collections</h2>
        {!emptyCollections && (
          <Button className="add-button" onClick={onAddCollection}>
            <Add className="add" />
          </Button>
        )}
      </div>
      {emptyCollections ? (
        <div className="empty-collections">
          <h3>You have no collection yet. Click the button to create a new one.</h3>
          <Button className="add-button" onClick={onAddCollection}>
            <Add className="add" />
          </Button>
        </div>
      ) : (
        <div className="my-collections-slider">
          {myCollections.map((collection) => (
            <Collection key={collection.id} collection={collection} />
          ))}
        </div>
      )}
    </div>
  );
};
