import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { UserContextProvider } from '../src/components/store/user-context.jsx';
import { CartContextProvider } from '../src/components/store/card-context.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
      <UserContextProvider>
          <CartContextProvider>
              <App />
          </CartContextProvider>
      </UserContextProvider>
  </QueryClientProvider>
</BrowserRouter>
);