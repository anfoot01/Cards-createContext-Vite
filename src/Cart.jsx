import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useContext(ProductContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <h4>{product.name} - ${product.price}</h4>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <h3>Total Price: ${getTotalPrice()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
