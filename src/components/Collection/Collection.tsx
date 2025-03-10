import type { Collection as CollectionTypes } from '@/types/types';
import { CardItem } from '../CardItem/CardItem';
import './Collection.scss';

interface Props {
  collection: CollectionTypes;
  showCardName?: boolean;
}

export const Collection = ({ showCardName, collection }: Props) => {
  return (
    <div>
      <h2>{collection?.name}</h2>
      <div className="cards-container">
        {collection.cards.length > 0 ? (
          collection.cards?.map((card) => (
            <CardItem key={card.id} card={card} showCardName={showCardName} />
          ))
        ) : (
          <p>This collection has no cards yet.</p>
        )}
      </div>
    </div>
  );
};
