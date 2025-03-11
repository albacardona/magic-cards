import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface ContextTypes {
  openModal: boolean;
  showModal: (data: ModalData) => void;
  closeModal: () => void;
  title: string | null;
  content: string | null;
}

interface ModalData {
  title: string;
  content: string;
}

const ModalContext = createContext<ContextTypes | undefined>(undefined);

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);

  const showModal = useCallback((data: ModalData) => {
    setOpenModal(true);
    setTitle(data.title);
    setContent(data.content);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(false);
    setTitle(null);
    setContent(null);
  }, []);

  const value = useMemo(
    () => ({ openModal, showModal, closeModal, title, content }),
    [openModal, showModal, closeModal, title, content],
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used in a ModalProvider');
  }
  return context;
};
