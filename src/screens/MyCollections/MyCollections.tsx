import { Collection } from '@/components/Collection/Collection';
import { Container } from '@/components/ui/Container/Container';
import { useCollections } from '@/context/CollectionsContext';
import { useMemo } from 'react';

export const MyCollections = () => {
  const { collections } = useCollections();

  const myCollections = useMemo(
    () => collections.filter((collection) => !collection.isFavourite),
    [collections],
  );

  return (
    <Container>
      <h2>Collections</h2>
      {myCollections.length > 0 ? (
        myCollections.map((collection) => (
          <Collection key={collection.id} collection={collection} />
        ))
      ) : (
        <p>You have no collections yet.</p>
      )}
    </Container>
  );
};
