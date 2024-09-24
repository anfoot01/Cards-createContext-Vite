import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <ProductContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </ProductContext.Provider>
  );
};
