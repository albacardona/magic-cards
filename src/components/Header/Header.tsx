import type { Card } from '@/types/types';
import { useRandomCards } from '@/hooks/useRandomCards';
import './Header.scss';
import { Container } from '../ui/Container/Container';
import { CardItem } from '../CardItem/CardItem';

interface Props {
  cards: Card[];
}

export const Header = (props: Props) => {
  const { cards } = props;

  const { selectedCards } = useRandomCards({ cards, quantity: 3 });

  return (
    <Container>
      <div className="header-container">
        <div className="header-info">
          <h2>The magic cards collection</h2>
          <p>Check the catalogue, save your favourite cards and create your own collections.</p>
        </div>
        <div className="random-cards">
          {selectedCards.length < 0
            ? selectedCards?.map((card) => (
                <CardItem key={card.id} card={card} showCardName={false} />
              ))
            : new Array(3).map((item) => <div className="empty-card" key={item} />)}
        </div>
      </div>
    </Container>
  );
};
