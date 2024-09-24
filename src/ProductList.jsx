import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';

const products = [
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 100 },
  { id: 3, name: 'Product C', price: 150 },
];

const ProductList = () => {
  const { addToCart } = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
