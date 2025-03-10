import { Collection } from '@/components/Collection/Collection';
import { Container } from '@/components/ui/Container/Container';
import { useCollections } from '@/context/CollectionsContext';
import { useMemo } from 'react';

export const Favourites = () => {
  const { collections } = useCollections();

  const favouriteCollection = useMemo(
    () => collections.filter((collection) => collection.isFavourite)[0],
    [collections],
  );

  return (
    <Container>
      <h2>Favourites</h2>
      {favouriteCollection ? (
        <Collection collection={favouriteCollection} />
      ) : (
        <p>Your favourite collection is empty. Choose some cards to add to it!</p>
      )}
    </Container>
  );
};
