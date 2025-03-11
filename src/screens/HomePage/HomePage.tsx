import { useCards } from '@/context/cards-context';
import { useRandomCards } from '@/hooks/useRandomCards';
import { CardItem } from '@/components/CardItem/CardItem';
import { Loader } from '@/components/ui/Loader/Loader';
import './HomePage.scss';

export const HomePage = () => {
  const { isLoading } = useCards();
  const { randomCards } = useRandomCards({ quantity: 3 });

  return isLoading ? (
    <div className="loader-container">
      <Loader size="large" />
    </div>
  ) : (
    <div className="homepage-content">
      <div className="info">
        <h2>The magic cards collection</h2>
        <h3>Check the catalogue, save your favourite cards and create your own collections.</h3>
      </div>
      <div className="random-cards">
        {randomCards.length > 0 &&
          randomCards.map((card) => <CardItem key={card.id} card={card} showCardName={false} />)}
      </div>
    </div>
  );
};
