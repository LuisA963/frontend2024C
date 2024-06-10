// App.js
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Swal from 'sweetalert2';
import './App.css';
import './assets/CSS/index.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleSearch = (query) => {
    fetch(`https://fakestoreapi.com/products`)
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.filter(product =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setProducts(filteredProducts);
      })
      .catch(error => Swal.fire('Error', 'No se pudieron obtener los productos', 'error'));
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <center><h1>Shopping</h1></center>
      < hr/>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={products} onSelectProduct={setSelectedProductId} />
      <ProductDetail productId={selectedProductId} />
    </div>
  );
};

export default App;

