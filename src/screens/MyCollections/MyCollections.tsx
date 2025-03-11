import { Collection } from '@/components/Collection/Collection';
import { useCollections } from '@/context/collections-context';
import { useMemo } from 'react';
import Add from '@/assets/icons/add.svg?react';
import { useModal } from '@/context/modal-context';
import { Button } from '@/components/ui/Button/Button';
import { Catalogue } from '@/components/Catalogue/Catalogue';
import './MyCollections.scss';

export const MyCollections = () => {
  const { collections } = useCollections();
  const modal = useModal();

  const myCollections = useMemo(
    () => collections.filter((collection) => !collection.isFavourite),
    [collections],
  );

  const onAddCollection = () => {
    modal.showModal({
      title: 'My favourites cards',
      content: <Catalogue />,
    });
  };

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
          <Button className="add-button" onClick={onAddCollection}>
            <Add className="add" />
          </Button>
        </div>
      )}
    </div>
  );
};
