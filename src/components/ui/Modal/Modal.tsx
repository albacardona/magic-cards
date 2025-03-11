import { useModal } from '@/context/ModalContext';
import './Modal.scss';

export const Modal = () => {
  const { openModal, closeModal, title, content } = useModal();

  return (
    openModal && (
      // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
      <div className="modal" onClick={closeModal}>
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    )
  );
};
