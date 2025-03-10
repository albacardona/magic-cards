import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

import { CardsProvider } from './context/CardsContext';
import { CollectionsProvider } from './context/CollectionsContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <CardsProvider>
      <CollectionsProvider>
        <App />
      </CollectionsProvider>
    </CardsProvider>
  </QueryClientProvider>,
);
