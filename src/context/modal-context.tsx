import { useOnBlur } from '@/hooks/useOnBlur';
import {
  type ReactElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useRef,
} from 'react';
import '@/components/ui/Modal/Modal.scss';
import { Modal } from '@/components/ui/Modal/Modal';

interface ContextTypes {
  openModal: boolean;
  showModal: (data: ModalData) => void;
  closeModal: () => void;
  modalData: ModalData | null;
}

interface ModalData {
  title: string;
  description?: string;
  content: ReactElement;
}

const ModalContext = createContext<ContextTypes | undefined>(undefined);

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const showModal = useCallback((data: ModalData) => {
    setOpenModal(true);
    setModalData(data);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(false);
    setModalData(null);
  }, []);

  useOnBlur(modalRef, closeModal);

  const value = useMemo(
    () => ({ openModal, showModal, closeModal, modalData }),
    [openModal, showModal, closeModal, modalData],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      <Modal ref={modalRef} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used in a ModalProvider');
  }
  return context;
};
