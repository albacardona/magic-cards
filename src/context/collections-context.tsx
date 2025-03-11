import type { Card, Collection } from '@/types/types';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface ContextTypes {
  collections: Collection[];
  addCollection: (name: string, isFavourite: boolean) => void;
  addCardToCollection: (collectionId: string, card: Card) => void;
  removeCardFromCollection: (collectionId: string, cardId: string) => void;
  deleteCollection: (collectionId: string) => void;
}

const CollectionsContext = createContext<ContextTypes | undefined>(undefined);

export const CollectionsProvider = ({ children }: React.PropsWithChildren) => {
  const [collections, setCollections] = useState<Collection[]>([]);

  const addCollection = useCallback(
    (name: string, isFavourite: boolean) => {
      setCollections([...collections, { id: crypto.randomUUID(), name, cards: [], isFavourite }]);
    },
    [collections],
  );

  const addCardToCollection = useCallback(
    (collectionId: string, card: Card) => {
      const selectedCollection = collections.map((collection) =>
        collection.id === collectionId
          ? { ...collection, cards: [...collection.cards, card] }
          : collection,
      );
      setCollections(selectedCollection);
    },
    [collections],
  );

  const removeCardFromCollection = useCallback(
    (collectionId: string, cardId: string) => {
      const selectedCollection = collections.map((collection) =>
        collection.id === collectionId
          ? { ...collection, cards: collection.cards.filter((card) => card.id !== cardId) }
          : collection,
      );
      setCollections(selectedCollection);
    },
    [collections],
  );

  const deleteCollection = useCallback(
    (collectionId: string) => {
      setCollections(collections.filter((collection) => collection.id !== collectionId));
    },
    [collections],
  );

  const value = useMemo(
    () => ({
      collections,
      addCollection,
      addCardToCollection,
      removeCardFromCollection,
      deleteCollection,
    }),
    [collections, addCollection, addCardToCollection, removeCardFromCollection, deleteCollection],
  );

  return <CollectionsContext.Provider value={value}>{children}</CollectionsContext.Provider>;
};

export const useCollections = () => {
  const context = useContext(CollectionsContext);
  if (!context) {
    throw new Error('useCollections must be used in a CollectionsProvider');
  }
  return context;
};
