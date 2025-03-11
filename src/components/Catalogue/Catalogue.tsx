import { useCards } from '@/context/cards-context';
import './Catalogue.scss';
import { CardItem } from '../CardItem/CardItem';
import type { CardActions } from '@/types/types';

interface Props {
  cardActions: CardActions[];
  collectionId: string;
}

export const Catalogue = ({ cardActions, collectionId }: Props) => {
  const { cards } = useCards();

  return (
    <div className="catalogue-container">
      {cards?.map((card) => (
        <CardItem key={card.id} card={card} cardActions={cardActions} collectionId={collectionId} />
      ))}
    </div>
  );
};
