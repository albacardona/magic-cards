import { useCardsApi } from '@/api/cardApi';
import type { Card } from '@/types/types';
import { createContext, useContext, useMemo } from 'react';

interface ContextTypes {
  cards: Card[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

const CardsContext = createContext<ContextTypes | undefined>(undefined);

export const CardsProvider = ({ children }: React.PropsWithChildren) => {
  const { data: cards, isLoading, error } = useCardsApi();

  const value = useMemo(
    () => ({
      cards: cards?.filter((card) => card.imageUrl),
      isLoading,
      error,
    }),
    [cards, isLoading, error],
  );

  return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>;
};

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error('useCards must be used in a CardsProvider');
  }
  return context;
};
