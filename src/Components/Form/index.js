import styles from './Form.module.css'
import { useState } from "react";



function Form( {onSearch} ){

    const [query, setQuery] = useState(""); 
    const [mediaType, setMediaType] = useState("image"); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query, mediaType);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una palabra clave..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
  
        <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
          <option value="image">Imágenes</option>
          <option value="video">Videos</option>
        </select>
  
        <button type="submit">Buscar</button>
      </form>
    );

}

export default Form