import type { Card } from '@/types/types';
import { useEffect, useState } from 'react';

interface Props {
  cards: Card[] | undefined;
  quantity: number;
}

export const useRandomCards = (props: Props) => {
  const { cards, quantity } = props;
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

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
      setSelectedCards(selectedCards);
    }
  }, [cards, quantity]);

  return { selectedCards };
};
