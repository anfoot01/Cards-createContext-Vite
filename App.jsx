// App.js
import React from 'react';
import { ProductProvider } from './src/ProductContext';
import ProductList from './src/ProductList';
import Cart from './src/Cart';
import './styles.scss'; 

const App = () => {
  return (
    <ProductProvider>
      <div className="container">
        <h1>Simple Product Shop</h1>
        <Cart />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;
