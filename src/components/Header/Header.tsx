import { useRandomCards } from '@/hooks/useRandomCards';
import './Header.scss';
import { CardItem } from '../CardItem/CardItem';

export const Header = () => {
  const { randomCards } = useRandomCards({ quantity: 3 });

  return (
    <div className="header-container">
      <div className="header-info">
        <h2>The magic cards collection</h2>
        <p>Check the catalogue, save your favourite cards and create your own collections.</p>
      </div>
      <div className="random-cards">
        {randomCards.length > 0 &&
          randomCards.map((card) => <CardItem key={card.id} card={card} showCardName={false} />)}
      </div>
    </div>
  );
};
