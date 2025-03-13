import type { Card } from '@/types/types';
import { useQuery } from 'react-query';

const baseURL = import.meta.env.VITE_API_URL;

export async function getCards(): Promise<Card[]> {
  const response = await fetch(`${baseURL}/cards`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const data = await response.json();

  return data.cards;
}

export const useCardsApi = () => {
  return useQuery<Card[], Error>({
    queryKey: [getCards.name],
    queryFn: getCards,
    staleTime: 1000 * 60 * 5,
    retry: 3,
    refetchOnWindowFocus: false,
  });
};
