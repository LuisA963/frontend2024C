
import React from 'react';

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id} onClick={() => onSelectProduct(product.id)}>
            {product.title} {/* Aquí debería ser product.title en lugar de product.name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;