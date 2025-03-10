import type { Card } from '@/types/types';
import imageNotFound from '@/assets/image-not-found.png';
import './CardItem.scss';
import { ActionButtons } from '../ActionButtons/ActionButtons';

interface Props {
  card: Card;
  showCardName?: boolean;
}

export const CardItem = ({ card, showCardName = true }: Props) => {
  const actions = [
    {
      id: 1,
      onClick: () => console.log('Confirm'),
      content: 'Confirm',
      variant: 'primary',
    },
    {
      id: 2,
      onClick: () => console.log('Cancel'),
      content: 'Cancel',
      variant: 'danger',
    },
    {
      id: 3,
      onClick: () => console.log('Edit'),
      content: 'Edit',
      variant: 'warning',
    },
  ];

  return (
    <div className="card-container">
      <ActionButtons actions={actions} />
      <div className="card">
        {card.imageUrl ? (
          <img src={card.imageUrl} alt={card.name} />
        ) : (
          <img src={imageNotFound} alt={card.name} />
        )}
        {showCardName && <p>{card.name}</p>}
      </div>
    </div>
  );
};
