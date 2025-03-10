import { getCards } from '@/api/cardApi';
import { useRandomCards } from '@/hooks/useRandomCards';
import type { Card } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';

interface ContextTypes {
  cards: Card[];
  randomCards: Card[];
  // isLoading: boolean;
  // error: string;
}

const CardsContext = createContext<ContextTypes | undefined>(undefined);

export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error('useCards must be used in a CardsProvider');
  }
  return context;
};

export const CardsProvider = ({ children }: React.PropsWithChildren) => {
  const { data, isLoading } = useQuery({
    queryKey: [getCards.name],
    queryFn: getCards,
    onError: (error) => console.log(error),
  });

  const { selectedCards } = useRandomCards({ cards: data, quantity: 3 });

  const value = useMemo(
    () => ({
      cards: data,
      randomCards: selectedCards,
      // isLoading,
      // error,
    }),
    [data, selectedCards],
  );

  return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>;
};
