import { useCards } from '@/context/CardsContext';
import './Catalogue.scss';
import { CardItem } from '../CardItem/CardItem';

export const Catalogue = () => {
  const { cards } = useCards();

  return (
    <div className="catalogue-container">
      {cards?.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
};
