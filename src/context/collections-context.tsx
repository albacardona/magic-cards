import type { Card, Collection } from '@/types/types';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface ContextTypes {
  collections: Collection[];
  addCollection: (name: string) => void;
  addCardToCollection: (collectionId: string, card: Card) => void;
  removeCardFromCollection: (collectionId: string, card: Card) => void;
  deleteCollection: (collectionId: string) => void;
}

const INITIAL_STATE: Collection[] = [
  {
    id: '1',
    name: 'Favourites',
    cards: [],
    isFavourite: true,
  },
];

const getPersistedState = () => {
  const collections = localStorage.getItem('collections');
  return collections ? JSON.parse(collections) : INITIAL_STATE;
};

const CollectionsContext = createContext<ContextTypes | undefined>(undefined);

export const CollectionsProvider = ({ children }: React.PropsWithChildren) => {
  const [collections, setCollections] = useState<Collection[]>(getPersistedState);

  const addCollection = useCallback(
    (name: string) => {
      setCollections([
        ...collections,
        { id: crypto.randomUUID(), name, cards: [], isFavourite: false },
      ]);
    },
    [collections],
  );

  const addCardToCollection = useCallback((collectionId: string, card: Card) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) =>
        collection.id === collectionId
          ? { ...collection, cards: [...collection.cards, card] }
          : collection,
      ),
    );
  }, []);

  const removeCardFromCollection = useCallback(
    (collectionId: string, card: Card) => {
      const selectedCollection = collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              cards: collection.cards?.filter((existingCard) => existingCard.id !== card.id),
            }
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

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections));
  }, [collections]);

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
