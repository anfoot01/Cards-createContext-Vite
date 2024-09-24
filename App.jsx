// App.js
import React from 'react';
import { ProductProvider } from './ProductContext';
import ProductList from './ProductList';
import Cart from './Cart';
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
