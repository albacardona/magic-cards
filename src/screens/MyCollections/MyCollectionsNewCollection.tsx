import Confirm from '@/assets/icons/confirm.svg?react';
import { Button } from '@/components/ui/Button/Button';
import { useCollections } from '@/context/collections-context';
import { useModal } from '@/context/modal-context';
import { type ChangeEvent, useState } from 'react';

export const NewCollection = () => {
  const { addCollection } = useCollections();
  const modal = useModal();
  const [collectionName, setCollectionName] = useState<string>('');
  const [isDirty, setIsDirty] = useState<boolean>();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setCollectionName(value);
    if (value !== '') {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
  };

  const handleClickConfirm = () => {
    addCollection(collectionName);
    modal.closeModal();
  };

  return (
    <div className="new-collection">
      {/* biome-ignore lint/a11y/noAutofocus: <explanation> */}
      <input type="text" onChange={handleChangeInput} autoFocus />
      {isDirty && (
        <Button onClick={handleClickConfirm}>
          <Confirm />
        </Button>
      )}
    </div>
  );
};
