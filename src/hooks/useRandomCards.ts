import { useCards } from '@/context/cards-context';
import type { Card } from '@/types/types';
import { useEffect, useState } from 'react';

interface Props {
  quantity: number;
}

export const useRandomCards = ({ quantity }: Props) => {
  const { cards, isLoading } = useCards();
  const [randomCards, setRandomCards] = useState<Card[]>([]);

  useEffect(() => {
    const cardsWithImage = cards?.filter((card) => !!card.imageUrl);
    const selectedCards: Card[] = [];

    if (cardsWithImage) {
      for (let i = 0; i < quantity; i++) {
        let newElem = cardsWithImage[Math.floor(Math.random() * cardsWithImage.length)];
        while (selectedCards.includes(newElem)) {
          newElem = cardsWithImage[Math.floor(Math.random() * cardsWithImage.length)];
        }
        selectedCards.push(newElem);
      }
      !isLoading && setRandomCards(selectedCards);
    }
  }, [cards, isLoading, quantity]);

  return { randomCards };
};
