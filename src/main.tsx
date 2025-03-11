import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

import { CardsProvider } from './context/cards-context';
import { CollectionsProvider } from './context/collections-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ModalProvider } from './context/modal-context';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <CardsProvider>
      <CollectionsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CollectionsProvider>
    </CardsProvider>
  </QueryClientProvider>,
);
