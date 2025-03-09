import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
