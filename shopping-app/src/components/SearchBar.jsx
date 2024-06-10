
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
        <center>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Buscar productos..." 
      />
      <button onClick={handleSearch}>Buscar</button></center>
    </div>
  );
};

export default SearchBar;