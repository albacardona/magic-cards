import { useCollections } from '@/context/collections-context';
import { Button } from '../ui/Button/Button';
import Confirm from '@/assets/icons/confirm.svg?react';
import Cancel from '@/assets/icons/close.svg?react';
import { useModal } from '@/context/modal-context';

interface Props {
  collectionId: string;
}

export const ConfirmDeletion = ({ collectionId }: Props) => {
  const { deleteCollection } = useCollections();
  const modal = useModal();

  const handleClickDeleteCollection = () => {
    deleteCollection(collectionId);
    modal.closeModal();
  };

  return (
    <div className="modal-confirmation">
      <Button onClick={handleClickDeleteCollection}>
        <Confirm />
      </Button>
      <Button onClick={() => modal.closeModal()}>
        <Cancel />
      </Button>
    </div>
  );
};
