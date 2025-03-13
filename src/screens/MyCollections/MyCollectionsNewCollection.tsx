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

  const handleConfirm = () => {
    addCollection(collectionName);
    modal.closeModal();
  };

  const handleButtonPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirm();
    }
  };

  return (
    <div className="new-collection">
      {/* biome-ignore lint/a11y/noAutofocus: <explanation> */}
      <input type="text" onChange={handleChangeInput} onKeyDown={handleButtonPress} autoFocus />
      {isDirty && (
        <Button onClick={handleConfirm}>
          <Confirm />
        </Button>
      )}
    </div>
  );
};
