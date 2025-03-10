import type { ActionButtonsTypes } from '@/types/types';
import { Button } from '../ui/Button/Button';
import './ActionButtons.scss';

interface Props {
  actions: ActionButtonsTypes[];
}

export const ActionButtons = ({ actions }: Props) => {
  return (
    <div className="action-buttons">
      {actions?.map((action) => (
        <div key={action.id}>
          <Button variant={action.variant} onClick={action.onClick} icon={action.icon} />
        </div>
      ))}
    </div>
  );
};
