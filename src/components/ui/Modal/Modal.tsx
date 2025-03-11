import { useModal } from '@/context/modal-context';
import Close from '@/assets/icons/close.svg?react';
import './Modal.scss';
import { Button } from '../Button/Button';
import { forwardRef } from 'react';

export const Modal = forwardRef<HTMLDivElement>((_, ref) => {
  const { openModal, closeModal, modalData } = useModal();

  if (!openModal) return null;

  return (
    <div className="modal-overlay">
      <div ref={ref} className="modal-content">
        <div className="modal-header">
          <h4>{modalData?.title}</h4>
          <Button onClick={closeModal}>
            <Close />
          </Button>
        </div>
        <p>{modalData?.description}</p>
        {modalData?.content}
      </div>
    </div>
  );
});
