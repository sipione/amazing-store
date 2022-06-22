import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrencyContextProvider from './common/contexts/currencyContext';
import ProductsContextProvider from './common/contexts/productsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrencyContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
    </CurrencyContextProvider>
  </React.StrictMode>
);
