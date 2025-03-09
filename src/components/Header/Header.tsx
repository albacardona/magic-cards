import type { Card } from '@/types/types';
import { useRandomCards } from '@/hooks/useRandomCards';
import './Header.scss';
import { CardItem } from '../CardItem/CardItem';

interface Props {
  cards: Card[];
}

export const Header = (props: Props) => {
  const { cards } = props;

  const { selectedCards } = useRandomCards({ cards, quantity: 3 });

  return (
    <>
      <div className="header-container">
        <div className="header-info">
          <h2>The magic cards collection</h2>
          <p>Check the catalogue, save your favourite cards and create your own collections.</p>
        </div>
        <div className="random-cards">
          {selectedCards.length > 0 &&
            selectedCards.map((card) => (
              <CardItem key={card.id} card={card} showCardName={false} />
            ))}
        </div>
      </div>
      <hr />
    </>
  );
};
