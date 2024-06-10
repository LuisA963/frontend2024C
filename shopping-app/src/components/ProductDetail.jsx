
import React, { useEffect, useState } from 'react';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error('Error fetching product details:', error));
    }
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>Precio: ${product.price}</p>
        </div>
      ) : (
        <p>Selecciona un producto para ver los detalles</p>
      )}
    </div>
  );
};

export default ProductDetail;