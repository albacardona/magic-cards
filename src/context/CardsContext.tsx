import { getCards } from '@/api/cardApi';
import type { Card } from '@/types/types';
import { createContext, useContext, useMemo } from 'react';
import { useQuery } from 'react-query';

interface ContextTypes {
  cards: Card[] | undefined;
  isLoading: boolean;
  // error: ErrorAPI | undefined;
}

const CardsContext = createContext<ContextTypes | undefined>(undefined);

export const CardsProvider = ({ children }: React.PropsWithChildren) => {
  const { data, isLoading } = useQuery({
    queryKey: [getCards.name],
    queryFn: getCards,
  });

  const value = useMemo(
    () =>
      ({
        cards: data,
        isLoading,
        // error,
      }) satisfies ContextTypes,
    [data, isLoading],
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
