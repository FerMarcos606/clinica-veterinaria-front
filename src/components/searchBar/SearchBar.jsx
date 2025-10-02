import React from "react";
import "./SearchBar.css";

export default function SearchBar({ placeholder = "Buscar...", onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value); // devuelve el valor al padre
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}